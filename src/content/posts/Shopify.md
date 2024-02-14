---
title: "How Shopify Rebalances Shards without any Downtime"
pubDate: "2023-03-23"
description: "How Shopify Rebalances Shards without any Downtime"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQFBeHrtXwu-vg/article-cover_image-shrink_720_1280/0/1679413166291?e=1713398400&v=beta&t=3JBY8pxxp8ejRzPgfqncOa2Ff4k3l_JOgZQAcBh77eY"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">Any system that can be scaled horizontally is genuinely scalable system. By dividing the data into several shards, databases are often scaled. So what happens when some shards aren't being used enough and get hot because of the heavy load they're receiving? Moving a piece of data from one node to another is a traditional method of resolving this.</span>

Shopify allows users to host their online stores, and Mysql serves as their database.

## Let's see the current Architecture 

![image](https://media.licdn.com/dms/image/D5612AQGhYsLFiFt1Wg/article-inline_image-shrink_1000_1488/0/1679530199612?e=1713398400&v=beta&t=BkrJ0O_odMvBl6120uaAskKZZbEX9_QXhTmQOlKulIU)

1. Shops are distributed across 'pods'.
2. All shops in a pod share a database.
3. Requests are sent to the NGINX proxy, which then sends them to the appropriate pods.

*Note*:- Every row in a route table has a column called "shop id" that identifies the shop to which it belongs.

Moving shop from one pod to another pod need to follow below steps.

1. Iterate through all the tables
2. Choose a row with a specified "shop id"
3. Transfer/ move those rows to a database of a different pod.

## How to carry out this action without any downtime is currently the main challenge ..?


Before going on How let's discuss why we need to move.

In the same shard, shops that require a lot of resources and that may.

1. Risk shop failure on the same shard may result in database failure
2. Inconsistent database usage between shards.

But how do you choose which shops belong in which shard..?

It is not a smart idea to distribute databases or pods based on the number of stores since we risk having too many shops on one shard.

![image](https://media.licdn.com/dms/image/D5612AQEx53oPzu0fYw/article-inline_image-shrink_1500_2232/0/1679530447140?e=1713398400&v=beta&t=FuZMDCcPErXmYh-YMQPAqk_Pqt6E5nCwr-q4IVThpKc)

Our decision-making process depends on the heuristics we intend to use.

1. Use of a database historically.
2. Shop traffic in the past.
3. This should be a private request for forecasting.

Let the data science team choose the best distribution based on the aforementioned criteria.

Now Let's start the Gain process for Moving the shop(s) from one pod to another one.

Prior to that, a few crucial constraints need to be decided.

1. Shop must be entirely available i.e. no downtime. 
2. No data loss or corruption. 
3. No needless pressure on the infrastructure.

![image](https://media.licdn.com/dms/image/D5612AQFhhtGS-Xby3A/article-inline_image-shrink_1000_1488/0/1679530732958?e=1713398400&v=beta&t=XMN4IUDPPykCP1ipLPq9vCIUxc4XBlo6AnvhT8ewE30)


## Prior to that, a few crucial constraints need to be decided.
1. Shop must be entirely available i.e. no downtime. 
2. No data loss or corruption. 
3. No needless pressure on the infrastructure.

![image](https://media.licdn.com/dms/image/D5612AQFhhtGS-Xby3A/article-inline_image-shrink_1000_1488/0/1679530732958?e=1713398400&v=beta&t=XMN4IUDPPykCP1ipLPq9vCIUxc4XBlo6AnvhT8ewE30)

Three high-level phases 

1. Batch copy and Tail binlog.
2. Cutoff. 
3. Update the route table.

*Phase 1*: For batch copy and tail binlog Shopify uses an internal tool (also opensource) named Ghostferry.

1. Choose rows from tables that have the shop_id and write them in a transaction to another database.

![image](https://media.licdn.com/dms/image/D5612AQELq-BtkdZfUA/article-inline_image-shrink_1500_2232/0/1679530987514?e=1713398400&v=beta&t=XoMf1_rmqlDABUevr-9lecZ9KibHHw-2t2d3nccYpS4)

2. Keep track of fresh changes being made to the old database while the batch copy is taking place by consuming Binlog via write ahead log.

```
{
  insert, orders, (...),
  update, orders, (...),
  insert, orders, (...)
} 
```
3. We must eliminate the entries for the stores that don't interest us or just note the binlog coordinates.

Our old database is still handling incoming requests while batch copying and tailing are used to speed up reading several tables in parallel. 

*Phase 2: Prepare for Cutoff.

Consume all more recent writes through binlog after the batch copy is finished.

Wait until the delay is only a few seconds (near realtime) i.e. newer events are almost instantly considered as we are nearly finished eating the queued events.

![image](https://media.licdn.com/dms/image/D5612AQFsTC_OxgpC4Q/article-inline_image-shrink_1500_2232/0/1679531213967?e=1713398400&v=beta&t=-Fd7a3NKLpdTY3E8yihoqGhWUlyFTwNtMYaZlNcpzvA)

## The writes to source database is stopped and this should happen in very shot duration like 1-2 seconds and application has re-try mechanism to counter this 1-2 second.

Once the destination database reaches the coordinates that were recorded in the source database's binlog, we can ensure that replication has been completed.

At this stage two things will happen.

1. No new writes to source database.
2. source database == target database.   

*Phase 3*: Update Route Table.

Once we are certain there won't be any data loss, we will update the routing database and turn on traffic. Requests now concentrate on the new pod and database.

![image](https://media.licdn.com/dms/image/D5612AQFzzToZw8Nijg/article-inline_image-shrink_1000_1488/0/1679531430440?e=1713398400&v=beta&t=Flfx1-_vCM8FnmgmaNJTnsp1e3OneGypX5g7YxDXGSg)

In order to reduce downtime, cutover was finished in a very small window of time.

## Next Step

1. Verify and confirm the accuracy of the data in the new pod or database.
2. Purge the data from the old database. 💡