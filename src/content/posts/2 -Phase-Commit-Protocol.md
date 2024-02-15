---
title: "Distributed Transactions: 2 -Phase Commit Protocol"
pubDate: "2023-06-10"
description: "Distributed Transactions: 2 -Phase Commit Protocol"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQGs91NQHhk2yg/article-cover_image-shrink_720_1280/0/1686394227097?e=1713398400&v=beta&t=p2AnF_PGU7XbFqLxRAmm1L_I5-5E1THGTj-iwUVll0Q"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">Let's understand the term Distributed Transactions :- A distributed transaction is a database transaction in which two or more network hosts are involved. Usually, hosts provide transactional resources, while the transaction manager is responsible for creating and managing a global transaction that encompasses all operations against such resources. Distributed transactions, as any other transactions, must have all four ACID (atomicity, consistency, isolation, durability) properties, where atomicity guarantees all-or-nothing outcomes for the unit of work (operations bundle).</span>

On very high level- A transaction involving several physical systems, machines, or computers.

Let's explore this via an example.

In India we have Zepto 10 minutes grocery delivery app.

We will look at business side to understand how this application making money and works.

![image](https://media.licdn.com/dms/image/D5612AQH7esiuG2DWIw/article-inline_image-shrink_1500_2232/0/1686392281169?e=1713398400&v=beta&t=Pa-kKSIaIpmfqF6IjYDa93SXQ-Zz0chc2O0IJpq1wfE)

Here we have two key points, to ensure that groceries are delivered within 10 minutes. Zepto should accept order only when.

1. Grocery is available in micro store.
2. Delivery partner is available.

Let's see tech design of the above problem statement.

![image](https://media.licdn.com/dms/image/D5612AQGqyUxo7ZSgsw/article-inline_image-shrink_1500_2232/0/1686392440428?e=1713398400&v=beta&t=rBdO0prkB5mjqWBkIVkAmWaDegCcLI-OIkTcgvWILRE)

Only place an order if there are groceries available in the microstore and a delivery partner has been assigned.

The one thing that distributed transactions must have is atomicity, which is the most difficult to achieve here. 

This signifies that either all or none of the stages are successful.

Thinking about -ve or edge cases, on very high level these should be two situations like below.

1. Transaction is successful in store service database but got failed on delivery service database. 

![image](https://media.licdn.com/dms/image/D5612AQE0M7BzucMvkg/article-inline_image-shrink_1500_2232/0/1686392737599?e=1713398400&v=beta&t=kBRBKUcOInWMNDswqKlA_pk2kSQUDD8oOZIxAD_Y9Pw)

2. Transaction is failed in store service database but got successful on delivery service database. 

![image](https://media.licdn.com/dms/image/D5612AQFvp5VZ5j-kiA/article-inline_image-shrink_1500_2232/0/1686392760971?e=1713398400&v=beta&t=RInmuaAbQ5Y7bwj-f5pDRfd7Sq0v-FgV5jM6MEPW1ws)

What we gonna think for above two situations - If each of them fails, we fall back on others.
If not that will cause negative impact on Zepto/our business.

1. Poor delivery partner experience.
2. Manpower and time were lost since the micro store spent time packing and other activities.

These are two classic cases of distributed systems that we must develop in two phases.

We will split 2 phase commit flow into two parts.

1. Prepare- Reserve the order
2. Commit- Final Booking

Let's draw this system into a diagram.

![image](https://media.licdn.com/dms/image/D5612AQHumtAI3Pg9jQ/article-inline_image-shrink_1000_1488/0/1686393184944?e=1713398400&v=beta&t=2Nst2yQNpllP2xEjEUu3_B9iNqeoHOzPy7d_HFxHvXY)

* Prepare- 
1. If both fail, the entire transaction fails, and the process is aborted.
2. If we only succeed once, we will cancel the reservation and Abort, or the timer will cancel the reservation for us.
3. If both succeeds, we will move ahead and commit the phase.

* Commit- 
1. If both succeeded, order is placed.
2. If anyone fails, we will cancel the reservation and Abort
3. If order service fails, timer will cancel the reservation automatically.

### Now time to look at Advantage of this system
1. Guaranteed ATMOIC transactions.
2. Guaranteed isolation.

and grass is not always green so just we will look as slightly but not major down side of this system.
bit slow.

chances for dead lock (and we know how to handle this so chill).

*Note*:- In case of n/w failure, we already discussed on re-try mechanism link is below.

[Github](https://www.linkedin.com/pulse/api-call-got-failed-still-you-want-re-try-amit-prakash) 💡