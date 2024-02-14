---
title: "Don't get Catch While Designing Cache"
pubDate: "2023-01-26"
description: "Don't get Catch While Designing Cache"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQG_fUJ91NadmQ/article-cover_image-shrink_423_752/0/1674676333868?e=1713398400&v=beta&t=b3lAbXmRULPKzvNOxKHPfzo9TG_YI0mk-wMUiyko-is"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

Here is how hashtag#typical application* looks like 

![Alt text](https://media.licdn.com/dms/image/D5612AQH5NZghzx2vsw/article-inline_image-shrink_1500_2232/0/1674672858676?e=1713398400&v=beta&t=wcP-T3cAM_AD0UJ1guTtJFAPjjPEUChfNuYLnXeIRNA)

Caching static content and moving it to a CDN (content delivery network; more on this later) are two options if you want to reduce latency and response time.

**Cache**-  In order to more swiftly respond to following requests, this temporary storage location keeps the results of expensive responses or frequently accessed data in memory.

Every time a new web page opens, one additional database calls are made to gather data, as shown in the system design diagram above. The frequency of database calls has a significant impact on the application's performance. This issue can be reduced using the cache.

A cache tier, which is significantly quicker than the database and can be added, will serve as temporary data storage. Better system and application speed, the capacity to lessen database burdens, and the capacity to grow the cache tier independently are all advantages of having a separate cache tier.

![Alt text](https://media.licdn.com/dms/image/D5612AQH1zasPytd6Fw/article-inline_image-shrink_1500_2232/0/1674674049240?e=1713398400&v=beta&t=AV33NJqTJYECJpdRNwnV_P3Hv23vlQQ16NuTchJ6-Rg)

When a web server receives a request, it first checks the cache to see whether the answer is there, and if it is, it sends the data back to the client. If not, a database query is performed, the result is cached, and the client is then redirected to the result. This caching technique is referred to as read-through caching. We can use a different method depending on the data type, size, and pattern of access.

Because the majority of cache servers offer APIs in a broad variety of languages, interacting with them is straightforward.

### Consider while Designing Cache
1. **Pick a time to use the cache**: When data is often read but seldom updated, think about employing caching. A cache server is not the best option for persistent data since cached data is kept in volatile memory. For instance, all the data stored in memory is destroyed if a cache server restarts. Important data should thus be stored in a data store.

2. **Policy on Expiration**: Putting in place an expiry policy is a smart idea. Data that has been cached is purged from the cache once it has expired. Cache data will always be kept in memory if there is no expiration policy. I may advise against setting the expiration date too soon because doing so would force the system to often reload data from the database. The data might get stale if the expiration date is set too far in advance.

3. **Consistency**: Syncing the cache and the database is necessary for this. Because data-modification operations on the database and cache are not included in a single transaction, consistency issues might arise. Maintaining consistency between the database and cache while scaling over several locations is difficult. Facebook has a lovely solution for my favourite scaling memcache issue.

4. **Mitigating Failures**: A single cache server represents a potential Single point of Failure(SPOF).

5. **Eviction Policy**: Any requests to add things to the cache after it is full may result in the removal of already-existing items. Most people like the LRU (Least-Recently-Used) eviction policy. For a variety of use cases, other eviction rules, such as LFU (Least-Frequently-Used) or FIFO (First in First out), can be used.