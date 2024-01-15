---
title: "Trade-Offs while making Database choice"
pubDate: "2022-07-01"
description: "This is the first post of my new Astro blog."
author: "Astro Learner"
image:
  url: "https://media.licdn.com/dms/image/D5612AQEsfUGkh-jPGA/article-cover_image-shrink_720_1280/0/1705135793611?e=1710979200&v=beta&t=iWtL_iTJ4KnTM0em2QDJ-D74i_LB7IfouMVylQ6znQE"
  alt: "The full Astro logo."
tags: ["database", "SystemDesign", "learning in public"]
---

As users, we can see how database behaves under different conditions, but when working on databases, we have to make choices that influence this behaviour directly.
Designing a storage engine is definitely more complicated then just implementing a textbook data structure: there are many details and edge cases that are hard to get right from start. We need to design the physical data layout and organise pointers, right from the start. We need to design the physical data layout and organise pointers, decide on the serialisation format, understand how data is going to be garbage collected, how the storage engine fits into the semantics of the database system as a whole, figure out how to make it work in a concurrent environment, and finally, make sure we never lose any data, under any circumstances.
Not only there are many things to decide upon, but most if these decisions involve trade-offs. For example, if we save records in the order they have inserted into the database, we can store them quicker, but if we retrieve then into lexicographical order, we have to re-sort them before returning results to the client. Along with this there are many different approaches to storage engine design, and every implementation has it's own upsides and downsides.
When looking at different storage engines, we discuss their benefits and shortcoming. If there was an absolutely optimal storage engine for every conceivable use case, everyone would just use it, but since it doesn't exist, we need to choose wisely, based on the workloads and use cases we are trying to facilitate.
There are many storage engines, using all sorts of data structures, implemented in different languages, ranging from low-level ones, such as C, to high level ones, such as Java. All storage engines face the same challenges and constrains. To draw a parallel with city planning, it is possible to build a city for a specific population and choose to build up or build out. In both cases, the same number of people will fit into the city, but these approaches lead to radically different lifestyles. When building the city up, people live in apartment and population density is likely lead to more traffic in a smaller area; in more spread out city, population are more likely to live in houses, but commuting will require covering large distances.
Similarly, design decisions made by storage engine developers make them better suited for different things; some are optimised for low read or write latency, some try to maximize density (the amount of stored data per node), and some concentrate on operational simplicity.
Remember, there's no "one-size-fits-all" database. The key is understanding your needs, priorities, and risk tolerance. So, weigh your options, embrace the trade-offs, and choose the database that takes your data journey to the next level!


