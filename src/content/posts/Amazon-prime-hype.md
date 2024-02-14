---
title: "⚡Amazon Prime Video reduced their cloud expenditures by 90% by switching from serverless to a traditional containerized design."
pubDate: "2023-05-06"
description: "⚡Amazon Prime Video reduced their cloud expenditures by 90% by switching from serverless to a traditional containerized design."
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQFZKct8QXKFIg/article-cover_image-shrink_720_1280/0/1683401554337?e=1713398400&v=beta&t=TyVO8sgXGkWPPnlWjPMtfrDuH-jQ-9gQqbI2r-IHGtg"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">The move from a distributed microservices architecture to a monolith application helped achieve higher scale, resilience, and reduce costs.</span>

Prime Video provides thousands of live feeds to their consumers. Prime Video set up a mechanism to monitor every stream viewed by users to verify that content is delivered efficiently. This technology allows us to automatically detect perceptual quality issues (such as block corruption or audio/video sync difficulties) and initiate a process to resolve them.

## Let's see how...?

The initial version of the prime service was made up of dispersed components orchestrated by AWS Step Functions. The orchestration workflow and data passing between dispersed components were the two most expensive operations in terms of cost. To overcome this, we combined all components into a single process to confine data transfers within the process memory, simplifying the orchestration logic. We were able to leverage scalable Amazon Elastic Compute Cloud (Amazon EC2) and Amazon Elastic Container Service (Amazon ECS) instances for the deployment since we combined all of the operations into a single procedure.

### Distributed systems overhead.
There are three essential components to prime service. The media converter converts audio/video input streams into frames or decrypted audio buffers that are then transmitted to detectors. flaw detectors run algorithms in real time that analyse frames and audio buffers for faults (such as video freeze, block corruption, or audio/video synchronisation issues) and deliver real-time notifications when a flaw is identified. More information on this issue can be found in our article How Prime Video utilises machine learning to ensure video quality. The third component offers orchestration, which manages the service flow.

They created the original Prime solution as a distributed system with serverless components (such as AWS Step Functions or AWS Lambda), which was a smart choice for swiftly constructing the service. This would theoretically allow us to scale each service component separately. However, because of the manner we employed some components, we reached a severe scaling barrier at roughly 5% of the predicted load. Furthermore, the total cost of all the construction blocks was too high for the method to be adopted on a big scale.

The diagram below depicts our service's serverless design.

![image](https://media.licdn.com/dms/image/D5612AQHEBfD5pL260g/article-inline_image-shrink_1000_1488/0/1683314821747?e=1713398400&v=beta&t=tF35nMpG819ZB-UCSuR6hqClwyAy4bRHq9GiIQuRfMQ)

## From distributed microservices to a monolith application.

To address the bottlenecks, we initially considered fixing problems separately to reduce cost and increase scaling capabilities. We experimented and took a bold decision: we decided to rearchitect our infrastructure.

We realized that distributed approach wasn’t bringing a lot of benefits in our specific use case, so we packed all of the components into a single process. This eliminated the need for the S3 bucket as the intermediate storage for video frames because our data transfer now happened in the memory. We also implemented orchestration that controls components within a single instance.

The following diagram shows the architecture of the system after migrating to the monolith.

![image](https://media.licdn.com/dms/image/D5612AQGekJKOwfFW-A/article-inline_image-shrink_1000_1488/0/1683314891157?e=1713398400&v=beta&t=r-HQq46SrZUAoRDnyg8ri3eZALAAecfcp8LoJaIjhzo)

## Results and takeaways.

Microservices and serverless components are tools that do work at high scale, but whether to use them over monolith has to be made on a case-by-case basis.

Moving our service to a monolith reduced our infrastructure cost by over 90%. It also increased our scaling capabilities. Today, we’re able to handle thousands of streams and we still have capacity to scale the service even further. Moving the solution to Amazon EC2 and Amazon ECS also allowed us to use the Amazon EC2 compute saving plans that will help drive costs down even further.

Some decisions we’ve taken are not obvious but they resulted in significant improvements. For example, we replicated a computationally expensive media conversion process and placed it closer to the detectors. Whereas running media conversion once and caching its outcome might be considered to be a cheaper option, we found this not be a cost-effective approach.

The changes we’ve made allow Prime Video to monitor all streams viewed by our customers and not just the ones with the highest number of viewers. This approach results in even higher quality and an even better customer experience.

# Fancy ≠ Efficient

[source](https://www.primevideotech.com/video-streaming/scaling-up-the-prime-video-audio-video-monitoring-service-and-reducing-costs-by-90) 💡