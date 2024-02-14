---
title: "Rate Limiter in .Net 7"
pubDate: "2023-03-29"
description: "Rate Limiter in .Net 7"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQEdEiiYdSGTtA/article-cover_image-shrink_720_1280/0/1679950854412?e=1713398400&v=beta&t=oP76m87DYZD-opBVa3C5TIM-8bLga0YnhgAr8CB9f7k"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">There is one special edition, which I have written about on RateLimter click the link to read it.</span>

[Rate Limiter](https://www.linkedin.com/pulse/rate-limiter-amit-prakash)

Now the idea is , how to implement Fixed Window in .Net7

```

//Add Rate Limiting Service
builderbuilder.Services.AddRateLimiter(o =>o.AddFixedWindowLimiter(policyName:"fixed",
options => { options.PermitLimit = 10;
             options.Window = TimeSpan.FromSeconds(10);
             options.QueueProcessingOrder = QueueProcessingOrder.OldesrFirst;
             options.QueueLinit = 2;
})); 

```

### Use Middleware

```

app.UseRateLimiter();

```
That's the wrap buddy 💡