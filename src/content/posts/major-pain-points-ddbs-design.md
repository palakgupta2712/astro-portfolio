---
title: "Major Pain Points in DDBS Design"
pubDate: "2023-10-06"
description: "Major Pain Points in DDBS Design"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQGa4hXp4urcXA/article-cover_image-shrink_720_1280/0/1696025397560?e=1713398400&v=beta&t=0aa4xUB9Y9vwH97N583sIBQ1t5fTCqOKhL4XALKyGa0"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">There are few commonly encountered problems when we talk about DDBS design. Let's talk about few of them in details.</span>

In a distributed environment, just consider the data may be replicated on few nodes. As basics a distributed database can be designed so that the entire database or a portion of it, resides at different sites of a computer network. This is not essentially that every site on the network contains the database, it is only essentially the be there more than on site where the database resides. The possible duplication of data items is mainly due to reliability and efficiency considerations. Consequently, the distributed database system is responsible for #1 choosing one of the stored copies of the requested data for access in case if retrievals and #2 making sure that the effect of an update is reflected on each and every copy of that data item.

Another major problem is what if some site fail (like any hardware failure or what not...) or if some communication links fail (making some of the site unreachable) while an update is being executed, the system must make sure that the effects will be reflected on the data residing at the failing or unreachable sites as soon as the target system can recover from failure.

Another one us that since each site cannot have instantaneous information on the action currently being carried out at the other sites, the synchronisation of transaction on multiple sites is considerably harder than for a centralised system. 

I guess above discussed points are sufficient enough to cause a number to serious issues. Let's talk about few issues can be created by above.

1. *Complexity*- DDMS problems are inherently more complex than centralized database management ones, as they include not only the problems. We discuss these new issues shortly.

2. *Cost*- Distributed systems require additional hardware(communication mechanism) thus have increased hardware costs. however, the trend towards decreasing hardware costs does not make this a significant factor. A more important fraction of cost lies in the fact that additional and more complex software and communication may be necessary to solve some of the technical problems. The development of software engineering technique should help on this respect. Perhaps the most important cost component is due to the replication of effects. When computer facilities are setup at different sites, it becomes necessary to employ people to maintain these facilities. This usually results in an increase in the personnel in the data processing operations. Therefore, the trade-off between increased profitability due to more efficient and timely use if information and the increased personnel costs has to be analysed carefully.

3. *Distribution of Control*- This pain is mainly related to distribution creates problem of synchronisation and coordination. Distributed control control can therefore easily become a liability if care is not taken to adopt adequate policies to deal with these issues.

4. *Security*- One of the major benefits of centralised databases has been the control it provides over the access of data, Security can easily be controlled in one central location, with the DBMS enforcing the rules. However in a distributes database system, a network is involved which is a medium that has it's own security requirements. It is well known that there are serious problems in maintaining adequate security over computer networks. Thus the security problems in distributed database systems are by nature more complicated than in centralised one. 💡