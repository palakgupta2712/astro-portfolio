---
title: "Scaled to Millions with Google Sheets as Backend - levels.fyi"
pubDate: "2023-03-02"
description: "Scaled to Millions with Google Sheets as Backend - levels.fyi"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQGrayCHWiosMA/article-cover_image-shrink_720_1280/0/1698432612831?e=1713398400&v=beta&t=CtGMhhrqzvKZf3r0VPykz0wmhby_FagOE5YIjieDEEQ"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">When we wish to scale our systems, sharding and partitioning are highly useful. These ideas work with the database and aid in increasing the system's overall throughput and availability.</span>

Basics first, Let's look at what these two terms means

1. Sharding- Data distribution across several machines is covered in this technique.
2. Partitioning- Dividing a slice of data within the same database instance.

The main challenge in the era of highly scalable systems is scaling up the database.

Let's see how a database is scaled step by step with very low level of example.. cool buddy...

Just imagine how a very basic typical database setups looks like (see below).

![image](https://media.licdn.com/dms/image/D5612AQHV52yK8IJZmQ/article-inline_image-shrink_1500_2232/0/1677877945584?e=1713398400&v=beta&t=DVRkfb0OJWSai3-BKM6yHVLOJBMSBYYI69IqYHDClT8)

A database server is just a database process operating on a distant machine examples include MySql, MongoDB, and MSSQL.

Imagine that you have just put your database into production to serve real-time data and traffic, and that at first you will have 100 writes per second (WPS) traffic.

![image](https://media.licdn.com/dms/image/D5612AQGAnqmeBspuiQ/article-inline_image-shrink_1500_2232/0/1677878281165?e=1713398400&v=beta&t=y4bT-2GPhADaWyxL79l7sx2n8v3XhkBZPfsSAQ_5vo8)

After a while, you started to see an increase in users, and your database is now unable to handle the requests.

## What will we do next..?

Hmmm let's scale up the database.. Okay cool.

We will increase the amount of CPU, RAM, and disc as we go up.

![image](https://media.licdn.com/dms/image/D5612AQEfQp4Y7D7ghw/article-inline_image-shrink_1000_1488/0/1677878685301?e=1713398400&v=beta&t=vjA45AmFGAWWPnW9BANYE_DqWe4x4K6xY90xVTw65Lw)

What exactly we did now called Vertical scaling, now we are able to handle 200 writes per second (WPS).

We put in too much effort, and the result was a hit. Our large database is currently unable to manage the traffic. 
OOPS...

So, will we increase our scale once more..?

Okay, yes let's try till 1000 WPS.

![image](https://media.licdn.com/dms/image/D5612AQHEWjAyUCZeMA/article-inline_image-shrink_1500_2232/0/1677879128751?e=1713398400&v=beta&t=_PRJEUNmMOZBeUI6JrfLTgXEuCU2JY-7NLsuKZvh0tQ)

Yet, we are aware that once a certain point has been reached, we will need to scale up our database because unfortunately, verticle scaling has its limits.

So, we must reconsider our approach to horizontal scaling.

Think about the fact that one database server could handle 1,000 writes per second, and we are unable to scale up over that point. We are currently receiving 1500 writes every second.

A system that is really scalable is always ready for both vertical and horizontal scaling. So let's horizontally scale our system.

![image](https://media.licdn.com/dms/image/D5612AQE3DSyik3Cw9g/article-inline_image-shrink_1500_2232/0/1677879588614?e=1713398400&v=beta&t=pFgTEWJ0fUqJwL_vzsPEwJnekVUhjq9PR6eyI0LM0Z8)

Returning to the system adjustment we made earlier, let's look at it again. Our goal is to lower the workload on each database node to 750 writes per second so that we can manage higher throughput. We recently installed one extra database server to accomplish this.

Thinking loudly

We can argue that the data is partitioned since each database server is a shard.
## Yet the fundamental driver behind this was that data is partitioned (split across) while a database is sharded.

The majority of people interchangeably use this phrase.

Let's look at very simple example.

![image](https://media.licdn.com/dms/image/D5612AQEFPTsJM_i0WA/article-inline_image-shrink_1500_2232/0/1677880225513?e=1713398400&v=beta&t=CTM7rKJeDUXGq5C5p9RWlP-iyFyhtNOnLFSQuahB9os)

The 100 GB of total data was divided into 5 partitions that were all mutually exclusive.

The amount of shards you have will determine whether each of these partitions can reside on a separate database server or whether a few of them can share a server or remote machine.

![image](https://media.licdn.com/dms/image/D5612AQFrAxJujnlMZQ/article-inline_image-shrink_1000_1488/0/1677880722579?e=1713398400&v=beta&t=PX0-nHcDBwAvdvvnlOwVdF43gpfLWSPYIsPTZuQD2Zo)

Our 100 GB dataset is divided into a total of five partitions, but the biggest challenge is How to divide the info up.

In the end, there are two main types of partitioning.

1. Horizontal Partitioning. 
2. Verticale Partitioning. 

The decision of which method to choose solely depends on the load, use case, and data access pattern when we split the 100 GB of data. We could have used either of the methods we discussed above.

Let's simplify above problem via a visual table.

![image](https://media.licdn.com/dms/image/D5612AQEUFpxQwAvwMA/article-inline_image-shrink_1000_1488/0/1677881403500?e=1713398400&v=beta&t=aEIrsIJYkSDhNQ0l5QbY5F9_BDQUY0nXoDEJfCpWNJ0)

## Advantage of Sharding
1. Has excellent read and write performance on huge data. 
2. Expands the amount of storage available.
3. Higher availability and throughput.

### Nothing comes free so look at disadvantage.
1. Operational complexity
2. Cross-shared queries will be expensive 
3. Linked server use case need to keep in mind.💡