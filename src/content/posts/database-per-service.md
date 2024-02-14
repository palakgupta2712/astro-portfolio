---
title: "Database per Service"
pubDate: "2023-02-12"
description: "Database per Service"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQGOgmE8xY3GuA/article-cover_image-shrink_423_752/0/1676187578582?e=1713398400&v=beta&t=a228KPe1W3BoQ6pCWI5xi7299Hp2urezny3MrzqaoO0"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">A microservices architecture's key feature is loose coupling because each microservice can independently store data in and retrieve it from its own data store. By using the database-per-service paradigm, you can select the data stores (such as relational or non-relational databases) that are best suited for your application and business needs. This means that individual data stores cannot be directly accessed by other microservices, permanent data is only accessible through APIs, and changes to one microservice's database do not affect other microservices. Decoupling data stores makes your application's overall resilience better and prevents a single database from acting as a single point of failure.</span>


Loose coupling is the highlight of micro service based architecture, in this situation the bare minimum criteria should be followed -
1. Independency to build, test, deploy and scale
2. Autonomous to take own decisions - Database decision plays a key role here.

Enough of theory here, let's look a hashtag#Typical Social media system design service by service, cool ......

1. Chat Service

![image](https://media.licdn.com/dms/image/D5612AQGFEI6oI0dNhQ/article-inline_image-shrink_1000_1488/0/1676184327089?e=1713398400&v=beta&t=5_AAYHhAZtCja01JB59VrenoYtzJxOEDk6Esxo2JOWY)

2. Analytics Service

![image](https://media.licdn.com/dms/image/D5612AQHrBzmg_BRe1A/article-inline_image-shrink_1500_2232/0/1676184678235?e=1713398400&v=beta&t=PrbSo4MuPPOZd6dzMQ-9vI-pM_V4H3JjEEKWlCqzA6M)

3. Auth Service

![image](https://media.licdn.com/dms/image/D5612AQGYNmnjXq7u9Q/article-inline_image-shrink_1000_1488/0/1676184709489?e=1713398400&v=beta&t=04YB3_IJndhOahj2leV4A3Mc_yNgDyWS45LaGj5ihME)

4. Profile Service

![image](https://media.licdn.com/dms/image/D5612AQEo-nzVMYuK-g/article-inline_image-shrink_1500_2232/0/1676185029033?e=1713398400&v=beta&t=51HJUq0jKVt7EwpmocM1rm4jNV5ahxJa5wsv0UW1dRs)

5. Content Service

![image](https://media.licdn.com/dms/image/D5612AQGgdv8Ghrr6kQ/article-inline_image-shrink_1500_2232/0/1676185053567?e=1713398400&v=beta&t=Qgvg6WAJrVt8pY-T90GQqRXN6d5HMp6DaFqndCtrGfs)

**Note**:- Separation of concerns is the most important thing here and this should be keep in mind always.

Let's look at the Advantages of going for database per Service Pattern.

1. We need to have loosely coupled components- NO DIRET ACCESS OF DATABASE.

![image](https://media.licdn.com/dms/image/D5612AQETTIJUN4XFzw/article-inline_image-shrink_1500_2232/0/1676186089121?e=1713398400&v=beta&t=rhy6hojn12R_wyQaAhy58ttho4VTwvjo7M8PiQYDMn0)

You have a very specific database need for your service, consider - Graph database to model relation in social media
2. We want granular control and scaling of our service, like- 
- Horizontal
- Vertical
- Replica
- Partition
- & decentralised 

![image](https://media.licdn.com/dms/image/D5612AQGxvG9_YyQ9qg/article-inline_image-shrink_1500_2232/0/1676186107918?e=1713398400&v=beta&t=hyigCzzOjfLSWJJAfV_XcQ9mo0885w6EkRyiED66gP0)

In the all above situations, if a database goes down, it only affects the dependent service- ideal behaviour .

Suppose we are building Linkedin and we want to see two mersion hashtag#Amit and *Amrita* in the order of connection like they both are 1st order or 2nd order likewise.

This could be designed on *Graph* database (this is just my guess) and for this reason we can take advantage of - 

1. Neo4j
2. DB graph
3. Amazon Neptune

### On high level we can design like below

![image](https://media.licdn.com/dms/image/D5612AQEwropxptCwbA/article-inline_image-shrink_1500_2232/0/1676186627252?e=1713398400&v=beta&t=wGY9AUu4NH8xbkSpbsth0MGzjMK6AtTOs3xd72nYdyY)

Let's talk about another example to power a tech Search Engine. We might need Elastic Search, because this is meant for this reason, then why do we need to build on RDBMS with writing %LIKE% query.

For specific service or business use case, we could be use use as light as possible & as autonomous as possible.

Point to be noted in certain situation- we will have separate compliance for certain type of data. e.e. Encryption at rest for PII and Financial data.

Let's quickly talk about disadvantages as well.

1. Cross-service transactions are complex and expensive in terms of *time* and *throughput*.
2. Conveying updated across service is difficult.

![image](https://media.licdn.com/dms/image/D5612AQHsOcjZVV6Ecg/article-inline_image-shrink_1000_1488/0/1676187514302?e=1713398400&v=beta&t=5Dk7L6CBeMdVWhL-NeNn5Utp8f4CE34iaaZobMLSb_E)

Multiple Infra components to be monitored and manage.

Imagine you have database like No SQL, Graph database, SQL, document storage and Warehouse what not ...

Your SRE team has night mare to handle all these.

that's the wrap buddy now..💡