---
title: "Cryptographic Hash Function"
pubDate: "2023-08-12"
description: "Cryptographic Hash Function"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D4D12AQHQqRNKU323og/article-cover_image-shrink_720_1280/0/1691795437760?e=1713398400&v=beta&t=r9utXVz1myI26PNdx7TjQDdNytj-9Jre68F7AGPFs00"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">A hash function H</span> accepts a variable-length block of data M as input and produces a fixed-size hash value h= H(M). A "good" hash function has the property that the results of applying the function to a large set of inputs will produce outputs that are evenly distributed and apparently random. In general terms, the principal object of hash function is data integrity. A change of any bit in M results, with high probability, in a change to the hash value.

The kind of hash function needed for security applications is referred to as a cryptographic hash function.

![image](https://media.licdn.com/dms/image/D5612AQGloIPhn5ty_g/article-inline_image-shrink_1000_1488/0/1691791375838?e=1713398400&v=beta&t=7gAEUhpvWt2xHp3nHudJMSmD5D6Gg9gDcw9oWmbMZiQ)

## Applications of Hash Function
Perhaps the most versatile cryptographic algorithm is the cryptographic hash functions. It is used in a wide variety of security applications and Internal protocols. Let's discuss some of the requirements and security implications for cryptographic hash function.

1. Message Authentication
Message authentication is a mechanism or service used to verify the integrity of a message. Message authentication assures that data received are exactly as sent (i.e. there is no modification, inserting, deletion or replay). In many cases, there is a requirement that the authentication mechanism assures that purported identity of the sender is valid. When a hash function is used to provide message authentication, the hash function value is often referred to as a message digest.

The essence of the use of a hash function for message integrity is as follows. The sender computes a hash value as a function of the bits in the message and transmits both the hash value and the message. The receiver performs the same hash calculation on the message bits and compares this value with the incoming hash value.

If there is a mismatch, the receiver know that the message or possibly the hash value has been altered. 

![image](https://media.licdn.com/dms/image/D4D12AQGBmZi7rUOMsw/article-inline_image-shrink_1500_2232/0/1691793535558?e=1713398400&v=beta&t=4g1AbnFuX4fYyXqsdZUYgOl2TKfg79AbvRNI_cRjrN8)


Let's see couple of more examples in which a hash code can be used to provide message authentication.

a. The message plus concatenated hash code is encrypted using symmetric encryption. Because only A and B share the secret key, the message must have come from A and has not been altered. The hash code provides the structure or redundancy required to achieve authentication. Because encryption is applied to the entire message plus hash code, confidentiality is also provided.

![image](https://media.licdn.com/dms/image/D4D12AQGs0BD94QbYxA/article-inline_image-shrink_1500_2232/0/1691794060919?e=1713398400&v=beta&t=y5-0M7udiwhFiM7BIo5vFCBSb5Z3xLnB3rbtk35qpiI)

b. Only the hash code is encrypted, using symmetric encryption. This reduces the processing burden for those applications that don’t have required confidentiality.

c. It is possible to use a hash function but no encryption for message authentication. The technique assumes that the two communicating parties share a common secret values S. A computes the hash value over the concatenations of M and S and appends the resulting hash value to M. Because B possess S, it can recompute the hash value to verify. Because the secret value itself is not sent, an opponent can't modify and intercepted message and cannot generated a false message.

d. Confidentiality can be added to the approach of method (c) by encrypting the entire message plus the hash code.
When confidentiality is not required, method(b) has an advantage over methods (a) and (d) which encrypts the entire message, in that less computation is required. Nevertheless, there has been growing interest since a long time.

1. Encryption software is relatively slow. Even though the amount of data to be encrypted per message is small, there may be a steady stream of messages into and out of a system.

2. Encryption hardware costs are not negligible. Low-cost chip implementations of DES are available, but the cost adds up if all nodes in a network must have this capability.

3. Encryption hardware is optimized towards large data size. For small blocks of data, a high proportion of the time is spent in initialisation/invocation overhead.

4. Encryption algorithms may be covered by patents, and there is a cost associated with licensing their use.💡