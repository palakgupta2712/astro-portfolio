---
title: "Write-Ahead Logging"
pubDate: "2023-04-17"
description: "Write-Ahead Logging"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQFK52utGAiXvg/article-cover_image-shrink_720_1280/0/1681677386786?e=1713398400&v=beta&t=3jHfJVwabmz9UtwrR1xterCdukjQ7MI_798-KMzE6Z4"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">Every persistent database must ensure dependability. Once the modifications are committed, they should endure any reboots, OS crashes, or hardware failures, regardless of how significant or minute they may be. The write-ahead logging mechanism is used by all persistent databases to ensure this reliability without impacting performance.</span>

For any database, dependability is critical, which implies that the database does everything possible to ensure the success of any transaction. MYSQL and MS SQL are two common examples.

When we Commit anything to database.

Data/updates are kept on disc (non-volatile storage), making us immune to errors.
1. Power outage.
2. OS Error.
3. Failure of hardware. 

Let's assume with below diagram.

![image](https://media.licdn.com/dms/image/D5612AQGKlxgXopSbvg/article-inline_image-shrink_1500_2232/0/1681675816246?e=1713398400&v=beta&t=v8coi1ckbr3GLfJ8lXG0BWw_2lDluLfsvk8yPXeaTpI)

Actual disk writes are a fairly sophisticated operation, we will try to imagine the steps involved before data is actually written on disk using the picture below.

![image](https://media.licdn.com/dms/image/D5612AQFT0FDLTusNJA/article-inline_image-shrink_1500_2232/0/1681676024377?e=1713398400&v=beta&t=4ff1LoD5hm7hCUH-a_07HTcbPZtxkXXV1LLcfpuc9uw)

Now we'll get to the hero of this edition: the Write Ahead Log. In general, this is a conventional approach to assure data integrity.

The basic idea behind write ahead log is that before making changes to actual data files such as tables and indexes, these changes should be logged somewhere and described.

![image](https://media.licdn.com/dms/image/D5612AQHXjZEu9CwENg/article-inline_image-shrink_1000_1488/0/1681676246123?e=1713398400&v=beta&t=nRcYaWpx6UP0ePGva5p6h0bAPYgvEc2f8-SGqAcoJ3k)

WAL flow will be like- once update or insert has been triggered. 
1. Log the entry into WAL file.
2. Make changes into table and indexes.

## Advantages of WAL

1. We don't have to flush the data updates after each commit. 
2. We can recover from a crash by replaying the WAL log files.
3. Reduces the # of disk writes.

![image](https://media.licdn.com/dms/image/D5612AQHFYeF_vitvZw/article-inline_image-shrink_1500_2232/0/1681676562193?e=1713398400&v=beta&t=LOpxeJlBcYxQ97AvKhjxZAc1I2jyO3MLGWX1ixRMU0U)

Because write operations in WAL files are sequential, the cost of logging the change is substantially lower than in data files.
* WAL log- 1 disk write.
* data file- 1. Update table 2. update indexes 3. tree re-balance.

## Point-in-time recovery or snapshot is possible with WAL file, with little bit if time travelling and few rows of data loss.

### Data Integrity in WAL.

This is the major advantages let's discuss how..?

WAL protects each individual record with CRC-32(Cyclic Redundancy Check). That is, we can tell if the record content is correct by CRC checking it during crash recovery and replication. 

![image](https://media.licdn.com/dms/image/D5612AQF360fRp01AfQ/article-inline_image-shrink_1500_2232/0/1681677080629?e=1713398400&v=beta&t=6Or0-69lBsDWqFe5NPye4vrNGzx83YSpPmXCXvtgvK0)

WAL is by default enabled by all the databases vendors.

WAL file structure.

![image](https://media.licdn.com/dms/image/D5612AQEwp37pUZGvAQ/article-inline_image-shrink_1000_1488/0/1681677149539?e=1713398400&v=beta&t=37PcJGLAWuDDOS_tW6FFJGsi_r3pfaIDSTachd1Jg18)

## Bonus Points:
Why SELECT * is slow
1. No Index-only scan.
2. Database Deserialisations. 
3. Not all columns are inline
4. Network cost.
5. Client Deserialisations.

That's the wrap buddy 💡.