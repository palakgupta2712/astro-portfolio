---
title: "Database Indexing"
pubDate: "2023-07-10"
description: "Database Indexing"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQEbtEaxTbKBZg/article-cover_image-shrink_720_1280/0/1688938656873?e=1713398400&v=beta&t=8f1Wv6rlenKgzefsri1i-h5d49XXpsGcUL_qC0F6O2o"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">Indexing is a technique used to improve the performance of database queries by storing a copy of the data in a way that makes it easier to find. An index is a data structure that contains a list of values from one or more columns in a database table, along with pointers to the rows in the table where those values are found. When a query is executed, the database server can use the index to quickly find the rows that match the query criteria.</span>

Before jumping to in-depth of Indexing, let's understand, how a typical relational database stores the data.

Typically indexes are stored on disk in a variety of ways, depending on the database management system (DBMS) and the specific index type. However, some common methods include:

1. *B-tree* indexes are a common type of index that stores the index key values in a sorted tree structure. This allows the database server to quickly find the rows that match the query criteria by performing a binary search on the tree.

2. *Hash indexes* are another common type of index that stores the index key values in a hash table. This allows the database server to quickly find the rows that match the query criteria by using a hash function to map the index key values to a specific location in the hash table.

3. *Bitmap* indexes are a type of index that stores a bit vector for each row in the table. The bit vector indicates whether or not the row contains a particular value in the index key column. This allows the database server to quickly find all of the rows that contain a particular value by performing a bitwise AND operation on the bit vectors.


In addition to the index type, the way that indexes are stored on disk can also vary depending on the size of the index and the number of rows in the table. For example, small indexes may be stored in a single disk block, while larger indexes may be stored across multiple disk blocks.

The specific way that indexes are stored on disk is determined by the DBMS and the index configuration. However, the overall goal is to store the index in a way that allows the database server to quickly find the rows that match the query criteria.

In its simplest form, an index is a sorted table that allows for searches to be conducted in O(Log N) time complexity using binary search on a sorted data structure.

The primary key plays an important role in indexing. In most database management systems (DBMS), a primary key is automatically indexed. This means that the database server will use the primary key to quickly find the rows that match a query criteria.

There are a few reasons why the primary key is used for indexing. First, the primary key is unique for each row in the table. This means that the database server can quickly find the rows that match a particular value in the primary key column. Second, the primary key is usually ordered, which means that the database server can quickly find the rows that match a range of values in the primary key column.

For example, if you have a table of customers and the primary key is the customer ID, then a query that searches for all customers with a customer ID between 100 and 200 can be quickly executed by the database server. The database server will first check the primary key index to see if there are any rows that match the range of values in the customer ID column. If there are, then the database server will only need to scan those rows, rather than scanning all of the rows in the table.

There are some of the benefits of using the primary key for indexing:

1. Improved performance of queries. As mentioned earlier, the primary key is used to quickly find the rows that match a query criteria. This can significantly improve the performance of queries that are based on the primary key, such as queries that search for rows by ID or that update rows by ID.

2. Reduced disk I/O. When the primary key is used for indexing, the database server does not need to scan the entire table to find the rows that match a query criteria. This can reduce disk I/O, which can improve the performance of the database server.

3. Increased data integrity. The primary key is unique for each row in the table. This means that the database server can quickly detect and prevent duplicate rows from being inserted into the table. This can help to improve the data integrity of the table.

## Why and How Database stores data into B+ tree form:- 

Relational database management systems (RDBMS) store data into B+ trees because they are a very efficient data structure for storing indexes. B+ trees are a type of balanced tree, which means that the height of the tree is always logarithmic in the number of nodes. This makes B+ trees very efficient for searching, as the database server can quickly find the node that contains the data that it is looking for.

In a B+ tree, each node contains a number of key-value pairs. The keys are the values that are being indexed, and the values are pointers to the rows in the database table where the keys are found. The nodes in a B+ tree are typically arranged in a sorted order, so that the database server can quickly find the node that contains the key that it is looking for.

RDBMS stores data into B+ trees because they offer a number of advantages over other data structures, such as:

1. Efficient searching: B+ trees are very efficient for searching, as the database server can quickly find the node that contains the data that it is looking for. This is because the nodes in a B+ tree are arranged in a sorted order, and the database server can use a binary search to find the node that contains the key that it is looking for.

2. Scalability: B+ trees can be scaled to very large databases, as the height of the tree is always logarithmic in the number of nodes. This means that even if the database contains a very large number of rows, the database server can still quickly find the data that it is looking for.

3. Consistency: B+ trees are a consistent data structure, which means that the database server can always find the data that it is looking for, even if the tree is modified. This is because the database server always knows where to find the data, regardless of how the tree is modified.

4. Space-efficiency: B+ trees are space-efficient, as they only store the keys and pointers to the rows in the database table. This means that they do not store the entire row, which can save a significant amount of space.

Overall, B+ trees are a very efficient and scalable data structure for storing indexes in relational databases. They are used by many popular database management systems, and they are a good choice for storing indexes in any database that needs to be able to quickly search for data.

Here are some of the steps involved in storing data into a B+ tree:

1. The database server first creates a new B+ tree.
2. The database server then inserts the rows from the database table into the B+ tree.
3. The database server ensures that the B+ tree remains balanced after each insertion.
4. The database server can then use the B+ tree to quickly search for data in the database table.

The specific steps involved in storing data into a B+ tree may vary depending on the specific RDBMS. However, the overall process is the same.

To justify above let's have a very high understanding of advantages of B+ tree over B tree.

B+ trees are a more efficient data structure for storing indexes than B-trees. They have the following advantages over B-trees:

1. More efficient for searching: B+ trees only store keys in their nodes, which makes them more efficient for searching. This is because the database server only needs to search the leaf nodes of the tree to find the data that it is looking for.
2. More efficient for sequential access: B+ trees store all keys in their leaf nodes, which makes them more efficient for sequential access. This is because the database server can simply iterate through the leaf nodes of the tree to access all of the data in the tree.
3. Less space-consuming: B+ trees do not store data values in their internal nodes, which makes them less space-consuming than B-trees. This is because data values are typically much larger than keys.
4. More reliable: B+ trees are more reliable than B-trees because they are less likely to become unbalanced. This is because B+ trees have a higher fanout than B-trees, which means that they can store more keys in each node.


Overall, B+ trees are a more efficient and reliable data structure for storing indexes than B-trees. They are the preferred data structure for most relational database management systems (RDBMS).

Let's summarise above understanding into a table.

![image](https://media.licdn.com/dms/image/D5612AQHyns9-9HO4gw/article-inline_image-shrink_1500_2232/0/1688938210966?e=1713398400&v=beta&t=tD44KZCtbWgkUrBpxwI1lKwwKzyNXQ-9ihE5-Uw5Hbo)

Now this is the time perfect time to talk about types of Indexes.

Let's first talk about Clustered Indexes.

Clustered index is a special type of index that physically orders the rows in a table. This means that the rows in the table are stored in the same order as the keys in the clustered index.

Clustered indexes are used to improve the performance of queries that scan the entire table. For example, a query that selects all rows from a table with a clustered index on the id column will scan the table in sorted order by id. This can significantly improve the performance of the query, as the database server does not need to sort the rows in memory.

Clustered indexes can only be created on one column in a table. This is because the rows in the table are physically ordered by the keys in the clustered index.

If you create a clustered index on a column that is not the primary key, then the primary key will be automatically indexed as a secondary index.

Like life everything comes with pros and cons, so let's talk about this as well

Advantages of using clustered indexes:

1. Improved performance of queries that scan the entire table: As mentioned earlier, clustered indexes can significantly improve the performance of queries that scan the entire table.
2. Reduced disk I/O: Clustered indexes can reduce disk I/O, as the database server does not need to sort the rows in memory.
3. Increased data integrity: Clustered indexes can help to improve data integrity, as the rows in the table are physically ordered by the keys in the clustered index.

Disadvantages of using clustered indexes:

1. Only one clustered index per table: As mentioned earlier, clustered indexes can only be created on one column in a table.
2. Can impact the performance of inserts and updates: When a new row is inserted or an existing row is updated, the clustered index may need to be reorganised. This can impact the performance of inserts and updates.

Overall, clustered indexes can be a valuable tool for improving the performance of queries that scan the entire table. However, they should be used carefully, as they can impact the performance of inserts and updates.

## Why not to explore Non-clustered Indexes.

Non-clustered index is a type of index that does not physically order the rows in a table. This means that the rows in the table are not stored in the same order as the keys in the non-clustered index.

Non-clustered indexes are used to improve the performance of queries that search for rows that match a specific value or range of values in a particular column. For example, a query that searches for all rows in a table with a non-clustered index on the name column will quickly find the rows that match the search criteria, as the database server can use the non-clustered index to quickly locate the rows that contain the matching values.

Non-clustered indexes can be created on one or more columns in a table. This is in contrast to clustered indexes, which can only be created on one column in a table.

Advantages of using non-clustered indexes:

1. Improved performance of queries that search for rows: As mentioned earlier, non-clustered indexes can improve the performance of queries that search for rows that match a specific value or range of values in a particular column.

2. Reduced disk I/O: Non-clustered indexes can reduce disk I/O, as the database server does not need to scan the entire table to find the rows that match the search criteria.

3. Can be used on multiple columns: Non-clustered indexes can be created on one or more columns in a table, which gives you more flexibility in designing your indexes.

Disadvantages of using non-clustered indexes:

1. Do not physically order the rows in the table: As mentioned earlier, non-clustered indexes do not physically order the rows in the table. This means that the database server may still need to scan the entire table to find the rows that match the search criteria, if the non-clustered index does not contain the search criteria.

2. Can impact the performance of inserts and updates: When a new row is inserted or an existing row is updated, the non-clustered index may need to be updated. This can impact the performance of inserts and updates.


Overall, non-clustered indexes can be a valuable tool for improving the performance of queries that search for rows that match a specific value or range of values in a particular column. However, they should be used carefully, as they can impact the performance of inserts and updates. 

*Note*: Indexing can have a significant impact on the performance of database queries. However, it is important to note that indexes can also add overhead to the database server. The decision of whether or not to create an index should be made on a case-by-case basis, depending on the specific needs of the application. 💡