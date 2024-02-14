---
title: "Sharing Database among Microservices"
pubDate: "2023-02-17"
description: "Sharing Database among Microservices"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQGIejZJt_07vg/article-cover_image-shrink_720_1280/0/1676653209806?e=1713398400&v=beta&t=dRRWHZS-0qesXkQ097sQZpTtdyA3EvwqqYHwQcMJlks"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<spam style="color:orange">The same database is shared by a number of microservices in the shared-database-per-service design. </span>

Let's implement this pattern, thoroughly evaluate the application architecture step by step.

Allowing two or more service to share a database is one of the easiest methods to integrate them.

![image](https://media.licdn.com/dms/image/D5612AQHyc9oaffKDaQ/article-inline_image-shrink_1500_2232/0/1676575477221?e=1713398400&v=beta&t=2-rF94dF2s_Hr-9Fj7ltzu9T0Kf1g2vgkSpC_fZYZj0)

Consider the following scenario: We have two services A and B. Service A publishes some metadata, such as employee details, while service B updates the employee's daily attendance in the same shared database.

The simplest method for integrating microservices is this one. Anyone who wishes to read or modify something should just update the database straight after reading it.


### Advantages of this Approach:-
1. Simplest way of Integration.
2. No middleman Involved.
3. No Latency Overhead.
4. Quick Development time.
5. Simpler Operation.
6. Better Performance.


In addition to all these benefits, there are a few challenges we should be aware of.
*Challenge 1: Internal Information is Disseminated to External Parties.*

-- Service B can obtain the internal database structure and other implementation information by sharing a database with them.

### What is the structure of schema

Design choice like
1. Hard delete versus Soft delete.
2. Normalisation
3. Redundancy


Given that an external service has access to the database.

What if service A will think of changing the schema
The changes made by service A should always be backward compatible, therefore in this case service B would need to revisit or update its logic accordingly.
What if service A wants to move from relational database from non-relational database
Because of tight coupling, service A can't take this independent call.
So, AUTONOMY of service A is gone.

*Challenge 2: Sharing Database = Sharing Business Logic.*

Lets add one more service C that has to show some data for this reason C has to fetch data from multiple tables like- table1, table2, table3 & table4.

![image](https://media.licdn.com/dms/image/D5612AQGHVzdatt96Qg/article-inline_image-shrink_1500_2232/0/1676576956274?e=1713398400&v=beta&t=BQYuSBdR5UpDYsbFHbNdCwi5O_YA6m6S8rESc7s5Bco)


All independent services implement the logic to fetch the data, but what if service A group modifies the reasoning and now employs table1, table9, table3, & table2.

All dependant services will need to modify their logic in this case.

In this case we are losing COHESION.

Let's re-think about the core principle behind the microservices are....

1. Lose Coupling X
2. High Cohesion X

## We are losing both now

*Challenge 3 : Risk of data corruption & Deletion.*

With WRITE access to the same database granted to all dependant services, there are enormous chances that someone may
1. Corrupting the data
 -- Wrong Script 
 -- Limited Knowledge 
2. Accidentally deleting the data.

## To stop this, database ACL needs to be managed properly.

*Challenge 4: Abusing the Shared Database.*

Let's say that service B created a few new, extremely complex queries to display a user-facing dashboard. Other services that rely on the same database will be impacted by this.

## No way to automatically throttle Database queries.

As i always say, like life tech decisions are not black and white.

Given the lack of significant obstacles, does this imply that we should never share a database...?

Definitely No, there are instances where sharing a database is advantageous.

1. When time is of the essence, sharing databases is an efficient solution.

![image](https://media.licdn.com/dms/image/D5612AQGBGnSWBRSwfw/article-inline_image-shrink_1500_2232/0/1676652655098?e=1713398400&v=beta&t=oN8VIxagVIbydicdF0AMep0ZHURNHTPiQYCTyr0SL88)

This involves work from numerous teams that work in synchronisation.

When schema doesn't change often.

-- Schema or business logic don't change frequently, preventing needless dependencies.

Read Load can move to master replica.

-- A separate master replica database can be used for intensive analytics queries.

![image](https://media.licdn.com/dms/image/D5612AQGMMEgK1ChK9w/article-inline_image-shrink_1500_2232/0/1676653117926?e=1713398400&v=beta&t=Cmshj8Wj1FcYoZY3qBJb_7cdLDZDfpU0UTS0zSJbeyA)

This will prevent dependent systems from overtaxing the primary master database.💡