---
title: "[System Design] Review Service of Booking.com"
pubDate: "2023-03-28"
description: "[System Design] Review Service of Booking.com"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQEdEiiYdSGTtA/article-cover_image-shrink_720_1280/0/1679950854412?e=1713398400&v=beta&t=oP76m87DYZD-opBVa3C5TIM-8bLga0YnhgAr8CB9f7k"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">Booking.com excels at this extremely challenging task of designing a highly available and efficient service. In this video, we take a close look at how the rating and review service, one of Booking's most important offerings, was created and expanded to accommodate peak traffic of more than 10,000 requests per second.</span>

You may book flights, hotels, stays tours and much more on Booking.com are review system is the basis of their platform.
1. Users use the reviews to make an informed decisions.
2. Review are authentic that means User can't post review without making a booking.

Reviews operate as a booking funnel, hence the review system has a high throughput. High availability and low latency are therefore crucial. Consumers won't read a book without reading a review that makes it evident that the quality of the service can never decline.

Simple REST-based services accessible via the review system's API will allow users to add, edit, and delete reviews.

## Traffic peak ~ 10,000 RPS with P^99 of 50 ms.

The above line gives indication about the pre-materialised views or cache of the operational database are mostly used to serve reviews.

Let's Calculate the Amount of Data need to Serve

250 millions reviews and each review contains- 

1. Answers to some objective questions. 
2. Ratings on various Parameters. 
3. Text based feedback.

If we assume 2 KB per review then total data length will be 250M * 2KB= 500GB.

We must shard the database in order to guarantee response times of less than 50 ms + Have a bunch of replica to protect against network or hardware failure + Availability zone failure.

Again Availability is most important here.

![imaage](https://media.licdn.com/dms/image/D5612AQGYyMJZyxjOXg/article-inline_image-shrink_1000_1488/0/1679952237523?e=1713398400&v=beta&t=Xlm_fj1iv0pnNlH050YCCnnBlaGhfJ4wxoEZrTtNwIk)

Sharding
All of a given accommodation's reviews are present on the same node since the reviews are sharded by accommodation_id.
But how do you route the requests...?
Simplest one is Hash Based function.
accommodation_id % shard = i

![image](https://media.licdn.com/dms/image/D5612AQFAV8Up_NywGw/article-inline_image-shrink_1500_2232/0/1679952589451?e=1713398400&v=beta&t=kRS7LA5oFV03hcTF548BH_ZWSLVbM01ONeuqTjWM4iU)

1. re-partitioning of the entire database.
We will use Consistent Hashing for below two reasons.
1. Data ownership.
2. This will result minimal data movement from the peripheral node.

![image](https://media.licdn.com/dms/image/D5612AQE7-PsiFJAPOQ/article-inline_image-shrink_1500_2232/0/1679952906371?e=1713398400&v=beta&t=21y5YNt8WKZy3YIJ5J_TmWWvNVpyq6LoOWuD6e_JNVQ)

*Note*: Consistent hashing tip: This uses a condensed array and a straightforward binary search operation.

We define total_slots as the size of this entire hash space, typically of the order 2^256 and the hash function could be implemented by taking SHA-256 followed by a mod total_slots. Since the total_slots is huge and a constant the following hash function implementation is independent of the actual number of Storage Nodes present in the system and hence remains unaffected by events like scale-ups and scale-downs.

```
 def hash_fn(key: str, total_slots: int) -> int
    """hash_fn creates an integer equivalent of a SHA256 hash and
    takes a modulo with the total number of slots in hash space.
    """
    hsh = hashlib.sha256()

    # converting data into bytes and passing it to hash function
    hsh.update(bytes(key.encode('utf-8')))

    # converting the HEX digest into equivalent integer value
    return int(hsh.hexdigest(), 16) % total_slots: 
```

Adding a New Node to the system

```
def add_node(self, node: StorageNode) -> int
    """add_node function adds a new node in the system and returns the key
    from the hash space where it was placed
    """

    # handling error when hash space is full.
    if len(self._keys) == self.total_slots:
        raise Exception("hash space is full")

    key = hash_fn(node.host, self.total_slots)

    # find the index where the key should be inserted in the keys array
    # this will be the index where the Storage Node will be added in the
    # nodes array.
    index = bisect(self._keys, key)

    # if we have already seen the key i.e. node already is present
    # for the same key, we raise Collision Exception
    if index > 0 and self._keys[index - 1] == key:
        raise Exception("collision occurred")

    # Perform data migration

    # insert the node_id and the key at the same `index` location.
    # this insertion will keep nodes and keys sorted w.r.t keys.
    self.nodes.insert(index, node)
    self._keys.insert(index, key)

    return key:
```

Removing a Node from the System

```
def remove_node(self, node: StorageNode) -> int
    """remove_node removes the node and returns the key
    from the hash space on which the node was placed.
    """

    # handling error when space is empty
    if len(self._keys) == 0:
        raise Exception("hash space is empty")

    key = hash_fn(node.host, self.total_slots)

    # we find the index where the key would reside in the keys
    index = bisect_left(self._keys, key)

    # if key does not exist in the array we raise Exception
    if index >= len(self._keys) or self._keys[index] != key:
        raise Exception("node does not exist")

    # Perform data migration

    # now that all sanity checks are done we popping the
    # keys and nodes at the index and thus removing the presence of the node.
    self._keys.pop(index)
    self.nodes.pop(index)

    return key:
```

## Realisticness of Resizing

1. Add/Remove Nodes.
2. Copy the data that needs to be moved.
3. Modify Review Service (Routing) to start consuming new Node to ring.

Here the final Architectural Diagram.

![image](https://media.licdn.com/dms/image/D5612AQGJr83R3MczPQ/article-inline_image-shrink_1000_1488/0/1679953458178?e=1713398400&v=beta&t=DCUoGPVcIMXIOmMR3WlSGPK8Et8_D60253XPsomuIF4)

Engineering blog of Booking.com ensures below three situations 

1. Materialised Views 
2. High cache hit ratio
3. Availability is Critical.

That's the wrap buddy 💡
