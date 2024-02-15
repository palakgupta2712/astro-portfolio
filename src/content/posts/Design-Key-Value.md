---
title: "Design Key-Value [KV Pair] Based Cache System"
pubDate: "2023-06-25"
description: "Design Key-Value [KV Pair] Based Cache System"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQG0KmbpGSDc5g/article-cover_image-shrink_720_1280/0/1687648164134?e=1713398400&v=beta&t=tHbNWb7ojDn41qRCbJhKQkQP6OsQsh1INkHed6R-ttY"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">A key-value system, often known as a key-value database, is a type of non-relational database. Each unique identification is saved as a key with its corresponding value. This data pair is referred to as a "Key-value" pair.</span>

The key in a key-value pair must be unique, and the value associated with the key must be accessible via the key. Plain text or hashed values can be used as keys. A short key is preferable for performance reasons.

Let's try to design this on a Single Server first...


It is simple to create a key-value system that runs on a single server. A simple solution is to retain key-value pairs in a hash table, which keeps everything in memory. Even though memory access is rapid, due to disc space constraints, fitting everything in memory may be difficult. To fit more data on one server, two optimisations can be performed: #1 Data compression and #2 Only keep material that is often accessed. 

With the following optimisation, a single server can fast hit its capacity at some point in time. We designed a key-value system to support huge data on numerous nodes.

A key-value system is sometimes known as a distributed hash table since it spreads key-value across several servers. It is critical to understand CAP(Consistency, Availability and Partition Tolerance) while constructing a distributed system. In some another edition we will talk about CAP in details.

Again for distributed system we need to majorly think about #1 Data Partition and #2 Data Replication, You can go through below edition to understand this over consistent Hashing.

[GitHub](https://www.linkedin.com/pulse/designing-consistent-hashing-amit-prakash)

Surely we gonna discuss about CAP soon but i would like to tough on few facts about Consistency keeping in mind like we are designing for distributed systems.

Because we chose to replicate data across several nodes, it must be synchronised among replicas. Quorum consensus can provide consistency for both read and write operations. 

N = The # of replicas.

W = A Quorum of size W, a write operation must be recognised by W clones for it to be declared successful.

R = A Quorum of size W, a write operation must be recognised by W clones for it to be declared successful.

Let's keep N is 3 as of of now and try to draw put/ACK.

![image](https://media.licdn.com/dms/image/D5612AQEh0RtUnIUMvA/article-inline_image-shrink_1000_1488/0/1687647975729?e=1713398400&v=beta&t=VJ6pZIif8ytm9Ryr4Ps4gntwubEniXdDFPryjNKbsRM)

please don't forget the W,R and N is a typical tradeoff between latency and consistency.

If W + R > N, strong consistency is guaranteed because there must be at least one overlapping node that has the latest data to ensure consistency.

next details will be coming editions .............. 💡