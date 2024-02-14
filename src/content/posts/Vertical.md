---
title: "Implementing Vertical Sharding"
pubDate: "2023-03-18"
description: "Implementing Vertical Sharding"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQEujLdNZWhmJw/article-cover_image-shrink_720_1280/0/1679082229022?e=1713398400&v=beta&t=4cxZbBTVKm01T1gp1DwSvABY2ndpLxRptqd-KLocDDI"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">Sharding</span>:- The process of storing a large database over numerous servers is known as database sharding. Only a certain amount of data can be stored and processed on a single system, or database server. By dividing the data into smaller pieces, or "shards," and storing them across multiple database servers, database sharding gets around this restriction. The basic technology used by all database servers are typically the same, and they collaborate to store and handle massive amounts of data.

![image](https://media.licdn.com/dms/image/D5612AQHLM68YJz6Gig/article-inline_image-shrink_1500_2232/0/1679077974593?e=1713398400&v=beta&t=tfZaxaB17hkDjVH7m7b_Kfv30l4AUgy4E1nTw9R3bvk)

*Vertical Sharding*:- The main idea of the business sharding method is to specialise databases for various functions. It is known as vertical sharding or longitudinal sharding. A database initially comprises of numerous tables that belong to various businesses. But, following sharding, tables are divided into various databases based on the company, and the pressure is also divided into many databases. The solution to allocate user tables and arrange tables in various databases via vertical sharding in accordance with business needs is shown in the diagram below.

![image](https://media.licdn.com/dms/image/D5612AQHlN7NumvifTA/article-inline_image-shrink_1500_2232/0/1679082636233?e=1713398400&v=beta&t=vA3u8Q4rYY3dIP2JVVR2-KE3Sb5QkgIzfO8avRzABiw)

Let's implement this step by step.

Idea is- A group of tables in separate databases.

Business Case: One database server houses a table connected to payments, and another database server houses a table related to authorisations. 

1. Better Load Handling.
2. Handle larger scale.

When switching to a microservices-based architecture, the database will need to be vertically shard. So let's consider how to make this action happen.

## Tables should be moved from one database server to another

For receiving updates and storing meta data. Due to the fact that the tables will be scattered over several databases, we will have. We would need a method for organising this data so that everyone could see things the same way. Moreover, the API server must be changed in response to any configuration changes (Table ownership). So, to address these issues, we will use Zookeepar.

![image](https://media.licdn.com/dms/image/D5612AQEUt0ap2E4XUg/article-inline_image-shrink_1000_1488/0/1679080428616?e=1713398400&v=beta&t=TGr5ump3c7AANKwOEvavJUiUfFLxP21qia5qkypxuFE)

Let's think How to move tables from one mySql database to another one.

![image](https://media.licdn.com/dms/image/D5612AQGvjbSDgXLBnA/article-inline_image-shrink_1500_2232/0/1679080543905?e=1713398400&v=beta&t=1iESpR_wDLrmtHuoyLUlzBIA7uPpRLJsl_8IU4dP15o)

The main goal is to transfer table T2 from DB1 to DB2 as quickly as possible.

1. Use "mysqldump" to dump the table T2 and the Binlog location. Along with the binlog location, the dump will include all of the table's data.

![image](https://media.licdn.com/dms/image/D5612AQHDA2D_Invmtw/article-inline_image-shrink_1500_2232/0/1679080869089?e=1713398400&v=beta&t=35zIRmUxkF2w6mNe-W0RbGSZEHSflprtaZFcZuimKUY)

2.  Restore the dump to another database load dumpp.sql to DB2.

![image](https://media.licdn.com/dms/image/D5612AQFWABaWuTjCFA/article-inline_image-shrink_1500_2232/0/1679080950341?e=1713398400&v=beta&t=vDlTin1__buEXO7qLNO-BJjLTA-M9m_jA-mK4wUR2Mw)

3. Ensure that only changes relevant to the intended table T2 are applied before starting the replication between the two databases.

![image](https://media.licdn.com/dms/image/D5612AQH5I4U3meXfJQ/article-inline_image-shrink_1500_2232/0/1679081280682?e=1713398400&v=beta&t=flMBQZD1GrqLp5JrYqHOdBIAjjafHjwM0HUb86yAsgU)

Now newer change will flow to DB2.

4. when DB2 is virtually caught up to other databases.
 -- Table T2 should now be called T2_Backup. As soon as a "table not found statement" is seen, sync between the two databases should halt.
 -- To reflect that table T2 is now available on DB2, update the entry in Zookeeper.

 Once the aforementioned changes to Zookeeper have been completed, the API server is reached, and connections to DB2 can then be established from that table.

 ![image](https://media.licdn.com/dms/image/D5612AQHti-LvzwDOZg/article-inline_image-shrink_1000_1488/0/1679081952895?e=1713398400&v=beta&t=JdJkLWYQcmqJClWKhRKaRzEkvSdqFIIFBrEJ760F4d4)

1. Table Not Found errors will occasionally occur consistency over availability for a little period of time.
2. For small and medium-sized tables, this strategy works well, but replication lag will be a problem for large tables.

That's the wrap buddy 💡