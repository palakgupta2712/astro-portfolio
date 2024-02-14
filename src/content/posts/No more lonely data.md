---
title: "Share Memory in Distributed Systems: No more lonely data!"
pubDate: "2024-01-05"
description: "Share Memory in Distributed Systems: No more lonely data!"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQHdAyeim2YYOQ/article-cover_image-shrink_720_1280/0/1704469287718?e=1710979200&v=beta&t=bPcjMZCxD3D4bnZ_MQrgtDtuw4WEWiMv8-nEj1AmYrA"
  alt: "The full Astro logo."
tags: ["astro", "blogging", "learning in public"]
---

## Happy 2024! May your code compile clean and your bandwidth be boundless.

<span style="color:orange">In terms of distributed system complexity, we built a distributed system for a client that acts as if it has shared storage, comparable to a single node system architecture. Communication and message passing are abstracted away and take place behind the scenes in the internode. This always gives the impression of a shared memory. </span>

A register is a single unit of storage that can be accessed via read or write operations. A distributed database's shared memory can be viewed as an array of such registers.

Every operation is evaluated based on its invocation and completion events. An operation is defined as failed if the process that initiated it crashes before it completes. If both the invocation and completion events for one action occur before the other, we say that this operation comes first, and the two operations are sequential. Otherwise, they are said to be contemporaneous.


Let's try to Visualise by some image.

![image](https://github.com/iamitprakash/astro-portfolio/assets/34869115/07ff0bcc-9687-4cd4-9902-7b0dbf912de4)

Multiple readers or writers can access the register at the same time. Register read and write operations are not immediate and require some time. Concurrent read/write operations done by multiple processes are not serial: they may be ordered differently and generate various results depending on how registers respond when operations overlap. Depending on how the register behaves when concurrent operations are present. These Registers can be divided into three types.

1. **Safe**: During a concurrent write operation, reads to the safe registers may return arbitrary values inside the register's range, which does not seem very interesting, but may explain the semantics of an asynchronous system that does not impose the order. During reads concurrent to writes, safe registers with binary values may appear to flicker (returning, results switching between two values).
2. **Regular**: We provide significantly greater guarantees for regular registers; a read operation can only return the value written by the most recent completed write or the value written by the write operation that overlaps with the current read. In this situation, the system recognises order, but write results are not available to all readers at the same time, as may be the case in a replicated database, where the master accepts writes and copies them to workers providing reads.
3. **Atomic**: Atomic registers ensure linearizability because every write operation has a single moment before which every read action returns an old value and a single moment after which every read operation returns a new one. Atomicity is a fundamental characteristic that makes resonating about system state easier. 

## Key takeaways:
1. Registers have limitations in terms of speed and concurrent access.
2. Register behavior under concurrent operations is crucial for multi-process systems.
3. Understanding register types is essential for choosing the appropriate one for a given application.💡
