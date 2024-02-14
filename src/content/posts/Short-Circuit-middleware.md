---
title: "Route Short Circuit middleware in ASP.NET Core"
pubDate: "2023-11-02"
description: "Bots and browsers frequently search servers for popular routes like favicon.ico. The middleware pipeline typically completes a request before returning a 404 error."
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D4D12AQGsO8UTBAICdg/article-cover_image-shrink_600_2000/0/1698875739572?e=1713398400&v=beta&t=JjZgi3eCxVP7xwargaIMwB15_NgMPqYBgEPfA0r5cio"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

This is a new feature in .NET 8 that allows you to bypass the middleware pipeline for certain endpoints. This can be useful for improving performance, especially for endpoints that are simple and do not need any authorization or other processing.

To use Route Short Circuit middleware, you simply need to call the ShortCircuit() method on the endpoint. 

Working examples:

```

app.MapGet("/short-circuit", () => "Short circuiting!")
    .ShortCircuit();

services.AddRouteShortCircuit(options =>
{
    options.Paths.Add("/favicon.ico");
    options.OnRejected(context => { /* metrics */ });
});
...
app.UseRouteShortCircuit();

```

## Use Cases:
When a request comes in for the /short-circuit endpoint, ASP.NET Core will immediately execute the endpoint logic and then end the request. This means that the middleware pipeline will not be run for this endpoint.

Route Short Circuit middleware can be used for a variety of purposes, such as:

1. Bypassing authorization middleware for endpoints that are publicly accessible.
2. Bypassing CORS middleware for endpoints that are only accessed by internal clients.
3. Bypassing logging middleware for endpoints that do not generate any interesting logs.
4. Improving performance for endpoints that are simple and do not need any middleware processing.


Here are some examples of when you might want to use Route Short Circuit middleware:

1. A health check endpoint that simply returns a 200 OK response.
2. A static content i.e. robots.txt endpoint that serves the robots.txt file.
3. A favicon.ico endpoint that serves the favicon.ico file.
4. An API endpoint that is only accessible to internal clients.
5. An API endpoint that is used to generate images or other static content.

It is important to note that Route Short Circuit middleware should not be used for endpoints that need to perform any complex processing or that need to run middleware for security or compliance reasons. For example, you should not use Route Short Circuit middleware for endpoints that handle user authentication or sensitive data.
