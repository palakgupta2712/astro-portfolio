---
title: "Message Splitter Pattern in Microservice"
pubDate: "2023-03-02"
description: "Message Splitter Pattern in Microservice"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQGrayCHWiosMA/article-cover_image-shrink_720_1280/0/1698432612831?e=1713398400&v=beta&t=CtGMhhrqzvKZf3r0VPykz0wmhby_FagOE5YIjieDEEQ"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">Let's understand the problem first. </span>

Consider many messages that are processed by an enterprise solution have multiple micro service. An order placed by a consumer, for instance, may contain multiple line items. Each line item can require the attention of a different inventory system, as stated in the description of the Content-Based Router. As a result, we must devise a method for processing an order in its entirety while still treating each order component separately.

When a message has numerous pieces, each of which might need to be processed differently, how can we process the message?

Then IBM came with unique solution- Using a Message Splitter pattern to split a large message into smaller elements for processing by one or more targets/ services.

Let's drill down the solution in 3 easy steps.

1. Enrich with Original Event.

![image](https://media.licdn.com/dms/image/D5612AQGn4SScIKkDvg/article-inline_image-shrink_1500_2232/0/1677776757860?e=1713398400&v=beta&t=wjZ4HMyWknLO2lthwtAcJKHbeSGwSKsPY73lwgywFkQ)

here i am trying to split into many messages keeping original as base.

2. Change data capture into many events.

![image](https://media.licdn.com/dms/image/D5612AQEC-3AUc4wPDg/article-inline_image-shrink_1000_1488/0/1677776903187?e=1713398400&v=beta&t=_LQUznFjk7v9Geh8jbSI2g2avhwUkl756eCw1yWTRes)

I am tying to capture the event that got triggered while any change happen in database table.

3. Splitting message/events into multiple items for other services.

![image](https://media.licdn.com/dms/image/D5612AQETUfyBJ8mkTQ/article-inline_image-shrink_1000_1488/0/1677777062669?e=1713398400&v=beta&t=hX4CSXvDKOd1Yq1CeAW9WSXo_kHn9_IV28fE3ClkynA)

*note*:- please ignore bad handwriting and drawing buddy.💡
