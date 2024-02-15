---
title: "How Database Indexes make Read faster"
pubDate: "2023-05-21"
description: "How Database Indexes make Read faster"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQH0742eG8oE7A/article-cover_image-shrink_720_1280/0/1684626296849?e=1713398400&v=beta&t=8HdpIL7gVpwrj7_hsqdZCE3_3bXgPOz9L0LhWKkXBTg"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">We go over how indexes help a database run faster. While we're at it, we'll go over how data is read from disc, how indexes are built, serialised, and saved on disc, and how data is swiftly read using the proper set of indexes.</span>

An index is a data structure that aids a database in quickly finding data. It is a distinct table that has a copy of one or more columns from the main table, as well as a pointer to the row in the main table that contains that data.

When you make a query, the database first checks to determine if the column(s) you are querying have an index. If there is, the database searches the index for rows that match your query before retrieving the data from the main table. This is far faster than searching the entire primary table for the data.

Let's understand first like- How data is getting stored on disc...?

the most common ways that tables are stored on disk:

1. *Heap files*: In a heap file, the rows are stored in no particular order. This is the simplest way to store a table, but it can make it difficult to find specific rows.
2. *B-tree files*: In a B-tree file, the rows are stored in a sorted order. This makes it much faster to find specific rows, but it takes up more space on disk.
3. *Hash files*: In a hash file, the rows are stored in a hash table. This is a very fast way to find specific rows, but it can be difficult to insert or delete rows from a hash file.

Let's start from zero and think how database stores the data..?

To answer this- Any database that wishes to store its records on disc must first seralize and store them. But the crucial point is how this serilization occurs.

To understand this let's take an example if relational database table named "customer" that has certain columns like.

![image](https://media.licdn.com/dms/image/D5612AQE6w4D4kixXKA/article-inline_image-shrink_1500_2232/0/1684623030602?e=1713398400&v=beta&t=IqomrZQiX9TOedmFH6UsNsmjPtuA5PA--pw_ksa7BKo)

Only in a hypothetical case Customer table contains 5 columns, a record reach of 200B, and 1000 records.

total size of table = 200B * 1000 = 200000B.

Now, how does the disc read work ?

one disk read = one block read 600B(*)

In this case, even if we just require one byte, it will read the full 600B block that includes that byte.

![image](https://media.licdn.com/dms/image/D5612AQFE3rOfw7jPkg/article-inline_image-shrink_1500_2232/0/1684623558747?e=1713398400&v=beta&t=RRk5GrTT9RrMZ83OFmnaeKsPcLn8p7cMrhxI2Cwf114)

Consider our client table as a series of blocks.

![image](https://media.licdn.com/dms/image/D5612AQHpUvwtOlerhg/article-inline_image-shrink_1000_1488/0/1684624401257?e=1713398400&v=beta&t=Tm5Ogpp7v0SP-Yn-JSa71EhIyBd60Pxa4s1KToBVE44)

The complete "customer" with 1000 rows fits within 1000/3=33.3 ~ 34 blocks.

As a result, reading the full table will necessitate the database engine accessing 34 blocks from disc.

In a hypothetical scenario Reading one block takes one second, and reading the full table takes 34 seconds.
Consider this: we need to discover clients with the pin 005. What the flow will look like.

1. Iterate through the table row by row (block by block).

2. Read the memory block.
3. Check each record for Pin == 005.
4. If yes, insert the record into the output buffer.
5. If no, throw away
6. As a result, the output buffer is returned.

The time required to answer this query is the same as the time required to read the block 34 blocks= 43 seconds. 

Let's explore how Indexes speed up this flow.

*Indexes*:- This is a smaller referential table that stores new references against the value of the indexes.

i.e.- create an referential table based on PIN column.

![image](https://media.licdn.com/dms/image/D5612AQGg_CrsN_G3UQ/article-inline_image-shrink_1500_2232/0/1684625580774?e=1713398400&v=beta&t=yIdGbdtx4Jj3kpgLK_NGsSzO2GmidBh5GnUyxQWiRys)

Because the index table will have 1000 entries, the overall size of the index table will be 16 * 1000 = 16000B.

One disk block = 600

So Index table will need 27 blocks almost.

Now, after building Index, the previous flow will be like 

1. Read the index and take note of any Ids that match the criteria.
2. Retrieve the actual records from the disc for the relevant Ids.

Now hashtag#blocks read= 27 in worst case.

Relevant Id with Pin== 005 are [7]

so, there is one record present with id 7 is present in block 3

so total block read will be 27 +1 =28 = 28 sec

Blocks read before creating Index= 1000

Blocks read after creating Index= 28

gain is almost 10 times.

Think about this gain on the scale

Bonus 😉

## Here are some tips for creating indexes:

1. Create indexes on columns that are frequently used in queries.
2. Create indexes on columns that are used in joins.
3. Create indexes on columns that are used in sorting.
4. Do not create indexes on columns that are frequently updated.
5. Keep indexes up to date.  💡