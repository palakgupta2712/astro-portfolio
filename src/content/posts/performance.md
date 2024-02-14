---
title: "How to Calculate Performance or Capacity of System"
pubDate: "2023-03-05"
description: "How to Calculate Performance or Capacity of System"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQGrayCHWiosMA/article-cover_image-shrink_720_1280/0/1698432612831?e=1713398400&v=beta&t=CtGMhhrqzvKZf3r0VPykz0wmhby_FagOE5YIjieDEEQ"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">While developing a system, it's common to consider the system's performance or capacity. For high levels of estimation, I find "Back-Of-The-Envelope" technique to be quite helpful.</span>

You must have a solid understanding of scalability, the power of two, latency numbers, and availability numbers in order to use the aforementioned technique.

Let's start by discussing this on a high level.

* Power of Two - Even though dealing with distributed systems can result in large data volumes, calculations ultimately come down to the fundamentals. It is crucial to understand the data volume unit utilising power of two in order to achieve the correct value following calculations. A byte, for example, is a series of 8 bits.

## Points to take away from this is below
1. Memory(application memory) is fast but the disk is slow.
2. Avoid reading from disk if possible.
3. Simple compression algorithms are way faster.
4. Compress data before sending it to over the network. (Mark this as very good practice)
5. Data Centers are usually in different Geo regions and they takes times to sends data between them. 
6. Availability Numbers - A system's capacity to function continuously for a desired extended length of time is known as high availability. In terms of percentage, high availability is defined as a service that is available 100% of the time. 99% to 100% of services in this world fall under this range.

A service level understanding A service provider is commonly referred to by the acronym SLA. This is a contract that you and the service provider have made.

Examples of cloud service providers who set their SLAs at 99.99% or above include Amazon, Google, and Microsoft. In the past, uptime was expressed as nines. The better, the more nines.

![image](https://media.licdn.com/dms/image/D5612AQEj6t3TLU6qlQ/article-inline_image-shrink_1500_2232/0/1678005740171?e=1713398400&v=beta&t=9ehAz8GkvRAR2_t_ir5mYj8V1bos9ZOO9N5G7OnSYKY)

For making this more clear let's do one Exercise.

### Estimate Twitter QPS & Storage requirements 
* Assumptions:
1. 300 million monthly active users.
2. 50% of users use Twitter daily
3. Each user posts 2 tweets per day on an average.
4. 10% of tweets contains media.
5. Data is stored for 5 years.

## Calculation: 

QPS Query per Second estimation will be

* DAU(daily active users)= 300 million * 50%= 150 million 
* Tweets QPS = 150 million * 2 tweets / 24 hours / 3600 seconds = ~ 3500
* Peek QPS= 2 * QPS= ~7000

We will only estimate media storage here

### Average tweet size;
* tweet_id 64 bytes
* text 140 bytes
* media 1MB
1. Media storage: 150 millions * 2 * 10% * 1 MB= 30 TB per day
2. 5- years media storage: 30 TB * 365 * 5= ~55 PB