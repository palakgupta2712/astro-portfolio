---
title: "API Composition Pattern in Microservice"
pubDate: "2023-04-30"
description: "API Composition Pattern in Microservice"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQEabLIkiNCHWQ/article-cover_image-shrink_720_1280/0/1682798443929?e=1713398400&v=beta&t=3gjZ7cyYTEYO46n4ODAD8deVhPg_ix4MApfRP9EdEAo"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">Assume we have successfully created 6-7 microservices and everything is going well. Now, for the new use case, we must introduce a new service into the product, and that newly added service must communicate with three or four other services.</span>

So, what is the best method for implementing this newly added service to support the product? 

API Composition Pattern is a very high level of pattern support for this. 

The API Composition Pattern is a design pattern used in software development where multiple API endpoints are combined into a single API endpoint. This pattern is particularly useful when working with microservices architectures, where applications are divided into smaller, independent services that communicate with each other over APIs.

The API Composition Pattern enables developers to create a higher-level API that provides a more comprehensive set of functionality by combining the capabilities of multiple underlying APIs. This can simplify the process of building client applications, as they only need to interact with a single endpoint rather than multiple endpoints.

There are several approaches to implementing the API Composition Pattern, including using API gateways or building custom API endpoints. The choice of approach will depend on the specific requirements of the application and the architecture being used.

Let's deep dive into this step by step with real life example.

Assume we have three services: order, payment, and logistics. How would a user receive the necessary data if he wishes to retrieve the specifics of an order(s)?

Querying microservices solutions is a classic problem. 

![image](https://media.licdn.com/dms/image/D5612AQE20Iab7Zojbw/article-inline_image-shrink_1500_2232/0/1682800392652?e=1713398400&v=beta&t=uD3fdh1aQGPpMMTYa0rhVTjvKTtWn1Hp7nRQDeSetBg)

To query Microservices, a popular pattern known as API composition is used.

In this pattern we have a one common component called "composer". let's draw this composer below.

![image](https://media.licdn.com/dms/image/D5612AQGeG_rNSw0VlQ/article-inline_image-shrink_1000_1488/0/1682800745259?e=1713398400&v=beta&t=GB4f5_m0peUTXFarhAjESi5LZr_FuE_rzh-xLuhcP28)

Let's see what composer does..?

1. It takes user query.
2. Identifies the services to talk to.
3. Get the response in return.
4. Returns the joined/calculated response.

Now the giant question is how to implement this..

Q. Do we need to write "composer" from scratch ... hmmmm "NO".

## Because an API gateway is a classic example of composer, we place one in front of our microsevices and configure the rules. That's all these is to it, buddy.

![image](https://media.licdn.com/dms/image/D5612AQGVShsj8vKHXQ/article-inline_image-shrink_1500_2232/0/1682801139124?e=1713398400&v=beta&t=RzTqNTHNFw8EG0YZPs-v0lRJ532fHEvpExCaW7MSz70)

The request to the specific Microservice might occur in two ways. 
1. Sequential - It takes longer to compute.
2. Parallel - More machine resources are required.

The implementation of the consumer depends on programming language has been selected and current use case in hand.

All these are backend talks, here we usually forgot to talk or improve end user experience.

Let's see how we can do this.

The significance of API composition is not restricted to microservices; it also plays a significant part in providing a fantastic US experience.

Just think the situation like below.

![image](https://media.licdn.com/dms/image/D5612AQHiUaKnPuFcBg/article-inline_image-shrink_1500_2232/0/1682802324448?e=1713398400&v=beta&t=yLJjn5zlo3vUKrdHRLFD9DG14hJYAU-4h6cfF3cPy94)

As a result, in order to improve the user experience, we should migrate or build composer at the server level, with the added benefit of better data utilisation. So let's try yo put composer at the server level and see the changes.

![image](https://media.licdn.com/dms/image/D5612AQHnwBWGF7jtQA/article-inline_image-shrink_1500_2232/0/1682802461144?e=1713398400&v=beta&t=2gdjiiSUy-M8b-XTip5daacQmiQ-Tc74LFa_pf7jct0)

When we moved the composer at the server level in the preceding scenario, the end user will have a far superior experience.

## Branch Composition.

Branch composition is nothing more than a multi-level API composition service implementation.

![image](https://media.licdn.com/dms/image/D5612AQFDodayF0SEYQ/article-inline_image-shrink_1500_2232/0/1682802649142?e=1713398400&v=beta&t=5eVfRaoCbkOMrEOflBzAM70xmYgMe2SeZLFGnC_C3Cw)

Advantage of API composition pattern.

1. Simple to implement.
2. user has a single point of interaction.
3. Hides the implementation details and complexities.
4. Security and rate Rate limiting can be implemented at composer (first line of defence).
5. Can cover bad design decisions and wrap then within a new Interface.
6. Hides legacy system and we can replace them gradually.

![image](https://media.licdn.com/dms/image/D5612AQFsiLt9by5Qyg/article-inline_image-shrink_1500_2232/0/1682802894652?e=1713398400&v=beta&t=-0CRqboJ--RX4vpNkMf46f3n9DzmfgQ6lyC4sN1QbAg)

like Grass is not always green, need to visit the disadvantage as well.

* What if we fetch large data from microservice ---Joining then on API gateway level would be ineffective.

![image](https://media.licdn.com/dms/image/D5612AQH3uZoFtTIaKA/article-inline_image-shrink_1500_2232/0/1682803015054?e=1713398400&v=beta&t=EV9Fs7h3ClvBinXF_V-7EkHAI7i0BOmLIcmlKGi-v38)

1. Overall availability is challenging
2. Having transaction data consistency is very difficult.
3. Composer needs to be managed and maintained.
4. Composer may become bottleneck for the product.  💡