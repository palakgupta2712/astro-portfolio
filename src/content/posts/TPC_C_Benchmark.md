---
title: "TPC-C Benchmark"
pubDate: "2022-07-01"
description: "This is the first post of my new Astro blog."
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQFOy6S9Gxg2gg/article-cover_image-shrink_720_1280/0/1704566106568?e=1710979200&v=beta&t=-SXuVId_bsdR60uMnESIOjyAS-sVSjZkXwKTAnTYnNw"
  alt: "The full Astro logo."
tags: ["astro", "blogging", "learning in public"]
---

In the fast-paced world of online transactions, speed and reliability are king. That's where the TPC-C benchmark comes in – a rigorous test designed to crown the champions of transaction processing performance.

TPC-C is an OLTP (online transaction processing) benchmark that combines read-only and update transactions to simulate common application workloads.

Think of it as a high-stakes obstacle course for databases and systems used by businesses like online retailers, airlines, and banks. They face five different challenges, like placing complex orders, checking stock levels, and recording payments, all happening simultaneously. And it's not just about brute force – the test also measures response times and the ability to handle heavy workloads without buckling under pressure.

Why TPC-C? Well, it's like having a standardised ruler to compare apples to apples, or in this case, databases to databases. It provides a neutral and objective way to assess the performance of different systems, allowing businesses to make informed decisions about which one to invest in.

This benchmark is concerned with the performance and correctness of concurrently processed transactions. Throughput, or the number of transactions a database system can execute per minute, is the primary performance metric. Transactions must avoid ACID qualities and adhere to the set of properties outlined by the benchmark itself.

This benchmark does not focus on any one business segment, but rather presents an abstract collection of actions necessary for the majority of the applications for which OLTP databases are acceptable. It includes various tables and entities such as warehouses, stock, inventory, customers, and orders, as well as table layout, information of activities that may be conducted against these tables, the minimum amount of rows per table, and data durability constraints.

A good TPC-C score translates to real-world benefits like faster order processing, happier customers, and smoother business operations. Imagine a world where online purchases happen instantly, flights get booked in a flash, and bank transfers zip through in the blink of an eye – that's the promise of a high-performing OLTP system, and TPC-C helps measure the potential to achieve it.

Of course, no benchmark is perfect. TPC-C has been around for a while, and some argue it doesn't fully capture the complexities of modern workloads. But its simplicity and wide adoption make it a valuable tool for benchmarking and comparison.

So, next time you click "Buy Now" or check your bank balance, remember the invisible heroes behind the scenes – the databases and systems that power those lightning-fast transactions. And if you're curious about who sits atop the throne of performance, just look up the latest TPC-C results – they'll tell you who the transaction processing titans truly are.
