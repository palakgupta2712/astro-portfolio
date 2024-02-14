---
title: "GraphQL vs REST: Which one is better for #Application"
pubDate: "2023-01-23"
description: "GraphQL vs REST: Which one is better for #Application"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQFrntDkqbXwVQ/article-cover_image-shrink_600_2000/0/1674340036431?e=1713398400&v=beta&t=qZm5hYp_j2r7wJlwNeHePpxR2guPE6bg-ujZ8WOXYMA"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">The choice between using GraphQL or REST for your application depends on your specific needs and use case.</span>

REST is a good choice for simple, well-defined use cases where the client knows in advance the structure of the data and the endpoint to access it. It is also a good choice for large, well-established systems that have a lot of existing code that expects a RESTful API.

GraphQL, on the other hand, is a good choice for more complex use cases where the client needs more flexibility in how it requests data. It allows the client to request exactly the data it needs and can reduce the number of round-trips to the server. It is also a good choice for systems that have rapidly changing requirements, as the client can easily adapt its requests as the system evolves.

On the other hand, if your application's data requirements are complex and may change over time, or if you have multiple client platforms with varying data needs, then GraphQL may be a better fit. GraphQL allows for more flexibility in terms of data queries, and it also provides a more efficient way to request multiple resources in a single request.

It's also worth noting that many modern architectures are using both REST and GraphQL in parallel, REST for a set of standard, well-known queries and GraphQL for more complex and diverse queries.
Still i want to highlight fews points

## Data fetching 
As the name suggests, data fetching is fetching data from the server to display on the client. With REST, it introduces drawbacks like hashtag#overfetching or hashtag#under_fetching. GraphQL, on the other hand, uses a hashtag#query based approach which mitigates these drawbacks (more on this later).

## Caching
It is the process of generating a cache which stores a subset of a data. This data then can be served up faster during future requests as they are already prefetched.

## Performance
Because REST has a drawback of hashtag#overfetching, it returns a data set much larger than what is actually required. Of course, a lot largely depends on how the API is designed, but with REST, there is only so much you can specify.

## Schema and Type safety
GraphQL uses its own type system - SDL(Schema Definition Language). A schema defines how a client can access resources from the server. 

This helps in catching errors easily while allowing the front-end and backend teams to work independently. GraphQL also allows you to stitch multiple schemas together so that a client can access data from different sources. 
For REST, this would mean making multiple API calls at different endpoints. This can result in more computational power and lower efficiency.

## Speed of Development
Because GraphQL allows you to specify the query on the fly, front-end developers can adjust response requirements without backend involvement. 

Same is not true for REST though. REST APIs are structured according to endpoints and the data they return. To adjust response requirements, one may need to fetch data from different endpoints and be prone to the classic problem of hashtag#underfetching / hashtag#overfetching. 

### Problems with GraphQL

1. Learning curve
Despite its many advantages, GraphQL falls short on REST because of simplicity. If you're new to development, REST is much easier to learn between the two having no restrictions on what your resource can consume or return.
2. HTTP Caching
In REST, the URLs for the requests are different (GET, POST, PUT, PATCH, DELETE). This allows you to get a globally unique identifier for an object which helps you to implement an HTTP cache. This way, you can easily identify if two resources are same while also allowing you to avoid fetching the same resource twice.
Meanwhile, in GraphQL, you use a single endpoint. For non-mutable queries, the developer has to ensure that caching is setup manually and the correct key is being used to inspect the body elements. There are tools that cover GraphQL semantics, but most of them lack in things like mobile and browser caching.
3. Resource attacks
The most talked benefit of GraphQL allowing clients to query only the data they need comes with a huge drawback - performance. Open APIs used in an app do not allow you to control 3rd party client query behaviour. This can results in expensive join queries which can severely effect server performance, or worse, result in a DDoS attack.
4. Reporting (Errors)
As REST follows the HTTP spec, it allows many tools to probe a URL endpoint and study error messages if not OK. In GraphQL, these tools cannot help. GraphQL client errors always return a 200 OK status response with a Something went wrong message. As this is superficial, it is very difficult to handle and monitor errors on GraphQL.

In summary, if your use case is simple and well-defined, REST may be the better choice. If your use case is more complex and dynamic, GraphQL may be the better choice. Additionally, you should also consider the existing infrastructure and team expertise in your decision making process.

Ultimately, the choice between GraphQL and REST will depend on the specific requirements of your application and the needs of your clients. It's also worth considering the development experience, developer's skillset, and the existing infrastructure.💡