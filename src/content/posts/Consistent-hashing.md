---
title: "Designing A Consistent Hashing"
pubDate: "2023-04-09"
description: "Designing A Consistent Hashing"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQFs54G8Xt8b8A/article-cover_image-shrink_720_1280/0/1680995143675?e=1713398400&v=beta&t=TdVqdpjeRfe4bRBvB2s3KfrhPel3HL8jKq4eL3iuGwc"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">It's crucial to efficiently and evenly distribute requests or data between servers in order to achieve horizontal scaling. A common method to accomplish this is consistent hashing. But first, let's examine this issue in great detail.</span>

Re-hashing Problem.

Using the below hash algorithm is a standard strategy to distribute the load among n servers or databases.

```
serverIndex = hash(key) % N
// where N is the count of servers or databases 

```
For better understanding, let's put this information into a table. I'll be using 4 servers, 8 string keys, and their hashes.

![image](https://media.licdn.com/dms/image/D5612AQHt7GwQ3AQ56Q/article-inline_image-shrink_1500_2232/0/1680942488360?e=1713398400&v=beta&t=BgplC10iBqGiosbHdvJzcdENidBIwtfbpVbLo_UHED8)


The modular application f(key)% 4 is used to retrieve the server from which a key is saved. To get the cached data, for instance, a client must visit server 1 if hash(key0)% 4 = 1.

![image](https://media.licdn.com/dms/image/D5612AQFF6sVmwUQAAg/article-inline_image-shrink_1500_2232/0/1680995508210?e=1713398400&v=beta&t=xrYUUgYZqFGnGcamMR6ddl3Qpt9IT_-n20sSc32QdhE)


When the size of the server pool is fixed and the data distribution is uniform, this strategy performs well. Nevertheless, when new servers are added or old ones are deleted, issues occur. For instance, if server 1 goes down, the number of servers in the pool increases to 3. We obtain the same hash result for a key by employing the same hash function. Yet since the number of servers is reduced by 1, using modular procedures results in different server indices. By using hash% 3, we obtain the outcomes shown below.

![image](https://media.licdn.com/dms/image/D5612AQHFrsf_Z6GN7A/article-inline_image-shrink_1500_2232/0/1680941041212?e=1713398400&v=beta&t=zo1bxfmXyywHf8CUWB24Hjuf8CFSDxo76YTBVqnX22c)


![image](https://media.licdn.com/dms/image/D5612AQFs0yldsrC60g/article-inline_image-shrink_1500_2232/0/1680995637549?e=1713398400&v=beta&t=BGnwJeTvMrFYO-Jp_YEc-Es27Dnouwvqt3XCzURKU0o)

As previously mentioned, more keys than only those kept in the offline server are distributed. This implies that the majority of cached clients will connect to the wrong servers to fetch data when server 1 goes offline. If the caches are missed, a storm results. One effective method to address this issue is consistent hashing.

## Consistent Hashing
Quoted from wiki: "Consistent hashing is a special kind of hashing such that when a hash table is resized and consistent hashing is used, only k/n keys need to be remapped on average, where k is the number if keys, and n is the number of slots. In contrasts, it's most traditional hash tables, a change in the number of array slots causes nearly all keys to be remapped".

This gonna introduce the concept of Hash Space and Hash Ring.

Now that we are clear on what consistent hashing is, let's examine its operation. Assuming that the hash function f is SHA-1, and that the output range is as follows: x0,x1,x2,x3,x4,x5........xn. The hash space of SHA-1 in cryptography ranges from 0 to 2^160-1. This indicates that x0 is equivalent to 0, xn is equivalent to 2^160-1, and all other hash values in the intermediate range from 0 to 2^160-1.

Just try to draw above range over line as we did in our childhood.

![image](https://media.licdn.com/dms/image/D5612AQEOUQpb3xLhdA/article-inline_image-shrink_1500_2232/0/1680995731505?e=1713398400&v=beta&t=ly8-DWYVnAyFcAYCU60MgqKY3of8TpozK0KnnWwEefo)

now join both the ends together in the form of ring.

![image](https://media.licdn.com/dms/image/D5612AQGry8KeXpHDKg/article-inline_image-shrink_1000_1488/0/1680942316138?e=1713398400&v=beta&t=3yD5T8VvUZ9Giy_MYFg4Qzgqkhc-2Xl8aS6NNL_CEd0)

## Hash Servers

We map servers based on IP addresses or names onto the below ring using the same hash method, which reveals that 4 servers are mapped on the hash ring.

![image](https://media.licdn.com/dms/image/D5612AQGyite95mRPjg/article-inline_image-shrink_1500_2232/0/1680966936443?e=1713398400&v=beta&t=C6VzFJEBOh6Znf0XSP9HJyE7mbweC1BjIUgjPCPPNFg)

## Hash Keys

One thing to note is that there are no modular operations and the hash functions employed here are different from the ones we discussed for the first time in this edition. Add some keys to the diagram above so we can view the larger picture.

![image](https://media.licdn.com/dms/image/D5612AQHb_xQrGOW4gQ/article-inline_image-shrink_1500_2232/0/1680967268114?e=1713398400&v=beta&t=Db32BmYvLESACkwIS8-dlT8mXAPZN4tPX44jH5ap83w)

## Server Lookup

Going clockwise from the key location on the ring until a server is identified will allow us to know which server a key is kept on. To better understand this procedure, let's diagram it below. Key0 is kept on server 0, Key1 is kept on server 1, Key2 is kept on server 2, and Key3 is kept on server 3.

![image](https://media.licdn.com/dms/image/D5612AQHCXd21eHNNVw/article-inline_image-shrink_1000_1488/0/1680967612608?e=1713398400&v=beta&t=23IHJBqNaTUDA9V_8spUYdeyp7zCIzXxBtVpiZkmv7U)

## Add a Server to Ring

By applying the logic outlined above, adding a new server will only call for a small portion of the key to be redistributed.

Draw this out below. Just key0 has to be dispersed after, say, server4 is added; k1, k2, and k3 will stay on the same servers. Let's examine the reasoning in more detail. K0 was kept on server0 prior to the addition of server4. As server4 is the first server encountered when moving clockwise from key0's position on the ring, k0 will now be stored on server4. The distribution of the other keys is not based on a consistent hashing technique.

![image](https://media.licdn.com/dms/image/D5612AQFjTTGLilt9hg/article-inline_image-shrink_1500_2232/0/1680968183930?e=1713398400&v=beta&t=C6j9N0Be8mpXXYCtOd1z4OWDuYbyeoHZVDKfVwEdfJ4)

### Remove a Server from Ring

Only a tiny portion of keys need to be redistributed with consistent hashing when server1 is withdrawn. Let's try to eliminate server1 by drawing this below once more. Only Key1 must be remapped to Server2 when Server1 is removed. The other keys won't be impacted.

![image](https://media.licdn.com/dms/image/D5612AQFnqbcWx4c-kw/article-inline_image-shrink_1000_1488/0/1680968532292?e=1713398400&v=beta&t=pP4bhQDKbAylchn-AJwhI-hqVBTQ2kWvUHRenGLzD00)

## Two Major Issues in the basic Approach

At MIT, Karger and colleagues developed the consistent hashing method. the following basic actions:
1. Using a uniformly distributed hash function, map servers and keys on the ring.

2. To discover the server that a key is assigned to. start at the key location and work your way clockwise until you reach the first server on the ring.

There are two issues with this strategy. First, because servers can be added or withdrawn, it is impossible to maintain the same size partitions on the ring for every server. A partition is the hash space that is either very small or moderately large between neighbouring servers. If server1 is taken out, server2's partition will be twice as big as server0 and server3.

Second, the distribution of keys on the ring may not be uniform. If servers are mapped to the places listed, for instance. The majority of the keys are kept on server 2, however server 1 and server 3 have no information.

To resolve both issues a technique called virtual node or replicas is used to solve these problems. 

## Virtual Nodes.

Each server is represented by a number of virtual nodes on the ring, and a virtual node on the ring refers to the real node. Both server0 and server1 have three virtual nodes in the diagram below. The number of virtual nodes in real-world systems is substantially more than 3, and the number of 3 was picked at random. We will use s0 0, s0 1, and s0 2 to represent server 0 on the ring in place of s0. Similar to how s1 0, s1 1, and s1 2 stand for server 1 on the ring. Each virtual node server is in charge of a number of partitions. Server 0 is in charge of managing partitions or edges with the designation s0. On the other hand, server1 is in charge of managing partitions with the designation s1.

![image](https://media.licdn.com/dms/image/D5612AQH8sMznyvW9kw/article-inline_image-shrink_1000_1488/0/1680994179019?e=1713398400&v=beta&t=bf5uh-O1_lCrdfWM2kIYWlWc1m9txN-CEUoyhFljY1Q)

Going clockwise from the position of the key, we locate each virtual node in the ring to determine which server each key is kept on. Going clockwise from k0's position, we locate virtual node s1_1, which alludes to server1, and use that to determine which server k0 is stored on. see below diagram for reference.

![image](https://media.licdn.com/dms/image/D5612AQGDYWrbI5d0Xw/article-inline_image-shrink_1000_1488/0/1680994486676?e=1713398400&v=beta&t=R-Q96Y3AXmmW0FaT8ZemK7DqTKMiubrUNw7wCbkWEJQ)

The distribution of keys balances out as the number of virtual nodes rises. This is due to the fact that the standard deviation decreases as there are more virtual nodes, resulting in a balanced data distribution. The standard deviation calculates the distribution of data. The results of an experiment conducted online reveal that the standard deviation is between 5% (200 virtual nodes) and 10% (100 virtual nodes) of the mean with one or two hundred virtual nodes. If we increase the number of virtual nodes, the standard deviation will be lower. We can adjust the amount of virtual nodes to meet our system requirements because this is tread-off.💡