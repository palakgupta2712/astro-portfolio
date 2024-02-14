---
title: "Orchestration or Choreography- A Microservice Game Play"
pubDate: "2023-02-07"
description: "Orchestration or Choreography- A Microservice Game Play"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQGDPaSldrUTHg/article-cover_image-shrink_423_752/0/1675725941348?e=1713398400&v=beta&t=uGXkAASLAqRWMUZhxEZDl_ZmhhBdY2_Rdi21_6QmAlM"
  alt: "The full Astro logo."
tags: ["astro", "blogging", "learning in public"]
---

<span style="color:orange">Let's Design a system to understand this game play.</span>

### Technical Requirements

## We need to build an Exit Management System, whenever an employee hashtag#Resign we have to send
1. Email Notification to Manager
2. Notify HR to schedule 1:1 interview
3. Temporary block critical access till decision is finalised.

How do we model and implement this flow

![image](https://media.licdn.com/dms/image/D5612AQHK83puWR92Og/article-inline_image-shrink_1000_1488/0/1675723397773?e=1713398400&v=beta&t=PoG18yFOfS3cmTJYDvEgQD35wGVHb5shkhnWblT_0ns)

So we will be involving 3 services 
1. Notification 
2. HR 
3. Access

Now the Real Game is we can implement this model in two ways.

1. Orchestration 
2. Choreography


### Let's implement via Orchestration 

**Orchestration** :- The brain, or logic component, of microservices orchestration is the orchestrator, which allocates tasks to the microservices. The orchestrator selects the workflow and assigns tasks to the microservices upon receiving a transaction request or a query. Each microservice is just concerned with the task that is allocated to it, not the workflow as a whole.

It's enough of texts now go for actual design.

![image](https://media.licdn.com/dms/image/D5612AQHphbj7GcxLxg/article-inline_image-shrink_1500_2232/0/1675724201026?e=1713398400&v=beta&t=YG7viG5jzDYkhaUAdFWPMxae5mZg4xPxXh0XxxomBYI)

As soon as an employee resign, the EMS service invokes API of other services like - what needs to be done.

All the Three services need not to be invoked one after other.

The main Agenda is in this situation Services are dumb, Only EMS service knows what needs to be done on each involved service, and it thus ORCHESTRATES the required action.

In some situations, the orchestrator needs to handle, manage and track a much complex workflows.


Now can we convert above model into Choreography please...
With choreography, decision-making power is dispersed among the microservices in a more bottom-up manner. It is a decentralised system as a result. The microservices are a component of the logic and decision-making process, and each one knows when and how to interact with other services, carry out tasks, and other things.
Not last but lease Choreography leads the foundation of EVENT DRIVEN ARCHITECTURE

Move to design now...

![image](https://media.licdn.com/dms/image/D5612AQGy79KrsS69XQ/article-inline_image-shrink_1500_2232/0/1675725116645?e=1713398400&v=beta&t=7iMCIJT2l_N0k0FCrG36j_xfeLskTQyCDcdB-PF0kJw)

The EMS service, to which HR and Access have subscribed, sends out an event notification when an employee resigns. The four services involved are decoupled after they receive the event and act accordingly. If we want to expand our system to accomplish more, a new service can simply subscribe to relevant events and handle them.
So, which one We should USE.

before jumping on conclusion, i just want to make few points.

1. Most modern system are inclined towards- Choreography
2. Loosely Coupling- The core of microservice
3. Extensible- Adding new type of service should be simple
4. Hexible- Services should be independent to drive their own changes
5. Robust- Working not affected no matter the number of subscriber.

But with Choreography approach we need to Implement complex observability and track what's happening 
Although a lot of people adopt & prefer Choreography, NOT making Orchestration BAD.

At the end Like Life Tech decisions are not BINARY too my friend, there gonna be always an use/business case. 💡