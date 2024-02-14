---
title: "API call got failed....? still you want to re-try"
pubDate: "2023-02-14"
description: "API call got failed....? still you want to re-try"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQF0JQk__NwRlg/article-cover_image-shrink_423_752/0/1676323420309?e=1713398400&v=beta&t=udy1sTqUO_XS1jkhCtnmGjCRnM7sEwMa6d0Q4L9oux8"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">Clients retry the APIs to ensure completion when the network is unstable. When there are fewer clients, this strategy is effective. But what happens when there are millions of clients? </span>

This is known as the Thundering Herd problem, Let's see together what it is, why it happens, and how to fix it. 

Look at an example-

A user named *Amit* attempted to make an API connection to the backend, but the call was unsuccessful due to network problems.

![image](https://media.licdn.com/dms/image/D5612AQGwt_KP0YlydA/article-inline_image-shrink_1500_2232/0/1676321596732?e=1713398400&v=beta&t=ia1K09wySVfO2x-tr5QKzQCqnCd0SJwUAI8opxQomj0)

Now the question is What to do now..?
Shall we re-try, Okay cool let's see. The simplest way of doing it is.

```
for i=0; i<3;i++
doit[]

//assuing re-try limit is 3
 sleep = min(cap, base * 2 ** attempt)
 ```

 ![image](https://media.licdn.com/dms/image/D5612AQFyjfMi5q8T-A/article-inline_image-shrink_1500_2232/0/1676321933943?e=1713398400&v=beta&t=6g49lPW3nrcppqkPmT9pINdfbOIQrt_Vixn65ImTTtE)

Yes, definitely i am thinking the same as you....

A reasonable solution, although it struggles on a larger scale. Imagine that the server is overwhelmed because an API call was unsuccessful, and every connected client is retrying.

This will create server to NO ROOM TO RECOVER because of: 

1. new requests coming in...
2. More and more requests because of re-try.

Then Giant question is How to Solve This...?
1. Exponential Backoff 

--> An exponential backoff method puts some time interval between retries exponentially, up to a maximum backoff time. 
To say it simply, we attempt again with a time interval rather than immediately repeating what we just did.

Let's understand with an exmaple.

![image](https://media.licdn.com/dms/image/D5612AQHQPtB8dxAd6g/article-inline_image-shrink_1500_2232/0/1676322501483?e=1713398400&v=beta&t=m27vhN-0FAKRRMkE2oQHRN_UfJMXFUQatCJe1WrMTCM)

This provides the above mechanism's participants with some breathing room and much-needed recovery time.

However, the retries will still happen at the same time, which will put more strain on the server.
* If the internet were to fall down, you might have witnessed this on Gmail.

Shall we look for bit more cleaver way to solve this, cool here the same solution comes with Jitter
1. Exponential Backoff with Jitter.

The solution isn’t to remove backoff. It’s to add jitter. Initially, jitter may appear to be a counter-intuitive idea: trying to improve the performance of a system by adding randomness. The time series above makes a great case for jitter – we want to spread out the spikes to an approximately constant rate. Adding jitter is a small change to the sleep function:

```
sleep = random_between(0, min(cap, base * 2 ** attempt))

```

### Let's draw the diagram again.

![image](https://media.licdn.com/dms/image/D5612AQGdhFI_DxqkOQ/article-inline_image-shrink_1500_2232/0/1676323154156?e=1713398400&v=beta&t=iJjFUy7PSBHf7FeKvaIk3wT22Ppwn-3pxDQj0vrCm9E)

This guarantees that retries are evenly distributed and don't worsen the issue.
A few things must be ensured when using retries.

1. You add random Jitter
2. Retries are spaced out exponentially.

That's the warp buddy... 💡