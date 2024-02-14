---
title: "Rate Limiter"
pubDate: "2023-03-08"
description: "Rate Limiter"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQEJimCZSW5BUw/article-cover_image-shrink_423_752/0/1678260980657?e=1713398400&v=beta&t=oM6v1ZUvJzyGEAk_024ZYed-sBJ0G_RP9MfOr60Qpzw"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">The idea of rate limiting is to restrict the number of times a resource may be accessed. For instance, you may be aware that a database your application uses can safely handle 1000 requests per minute, but you may not be sure it can manage many more. Your application can include a rate restriction that accepts up to 1000 requests per minute and rejects any more ones before they can reach the database. By rate-limiting your database, you can protect it from bad database failures and let your application handle a reasonable volume of requests.</span>

To manage the volume of requests, many rate limiting algorithms are available. We'll discuss four of them.
1. Concurrency Limit
2. Token Bucket Limit
3. Fixed Window Limit
4. Sliding Window Limit

The number of concurrent requests that can access a resource is limited by a concurrency limiter. If you have a limit of 10, you can only make 10 requests at once and the 11th request will be denied. The number of permitted requests rises to 1 when the first one is finished, to 2 after the second, and so on. To accomplish this, dispose of  a RateLimitLease.

```
public abstract class RateLimiter : IAsyncDisposable, IDisposable
{
    public abstract int GetAvailablePermits();
    public abstract TimeSpan? IdleDuration { get; }

    public RateLimitLease Acquire(int permitCount = 1);
    public ValueTask<RateLimitLease> WaitAsync(int permitCount = 1, CancellationToken cancellationToken = default);

    public void Dispose();
    public ValueTask DisposeAsync();
}
```

An algorithm's name, token bucket, is a description of its operation. Picture a bucket with a large quantity of tokens. It accepts a token when a request is received and stores it there permanently. A certain amount of tokens are periodically added back to the bucket, but never more than the bucket can contain. This process is repeated after a regular interval of time. When a request arrives, it is rejected if the resource is not available because the bucket is empty.

Let's say the bucket can carry 10 tokens and that 2 tokens are added to the bucket every minute to provide a more specific example. A request comes in and takes a token, leaving us with 9, three more requests arrive and each take a token, leaving us with 6, and after a minute, we receive two more tokens, bringing our total to 8. 8 requests arrive, consuming the tokens left over, leaving us with 0.The resource cannot be accessed if another request comes in until we receive new tokens, which happens every minute. The bucket will have all 10 tokens again after five minutes of no requests, and it won't add any more in the following minutes unless new requests need more tokens.

```
RateLimiter limiter = new TokenBucketRateLimiter(new 
TokenBucketRateLimiterOptions(tokenLimit: 5, 
queueProcessingOrder: QueueProcessingOrder.OldestFirst
    queueLimit: 1, replenishmentPeriod: TimeSpan.FromSeconds(5), 
tokensPerPeriod: 1, autoReplenishment: true));

using RateLimitLease lease = await limiter.WaitAsync(5);

// will complete after ~5 seconds
using RateLimitLease lease2 = await limiter.WaitAsync();,
```

The next algorithm will also make use of the window notion, which is employed in the fixed window technique. Before moving on to the next window, the window is the period of time during which our limit is in effect. Moving to the following window in the fixed window instance involves resetting the limit to its beginning position. Let's say there is a movie theater with a single room that can accommodate 100 people, and the film being shown lasts for two hours. Up to 100 people are permitted to queue up before we start telling them to return at a later time. When the movie begins, we allow people to begin waiting in line for the subsequent showing, which will be in two hours. The queue of 0 to 100 people can enter the cinema once the two-hour film has ended, and we can then reopen the line. When using the fixed window algorithm, this is equivalent to moving the window.

```
new FixedWindowRateLimiter(new FixedWindowRateLimiterOptions(permitLimit: 2
    queueProcessingOrder: QueueProcessingOrder.OldestFirst, queueLimit: 1,
 window: TimeSpan.FromSeconds(10), autoReplenishment: true));,
 ```

 With the addition of segments, the sliding window algorithm is identical to the fixed window algorithm. A segment is a portion of a window; if we divide the previous 2-hour window into 4 segments, we now have segments that are each 30 minutes long. Moreover, there is a current segment index that consistently points to the most recent segment in a window. Every 30 minutes, the window moves by one segment, and during that time, requests are added to the current section. Our limit is now increased by the amount of any requests that were made during the segment that the window goes past. If no requests were made, the cap remains the same.

 ```
 new SlidingWindowRateLimiter(new SlidingWindowRateLimiterOptions(permitLimit: 2
    queueProcessingOrder: QueueProcessingOrder.OldestFirst, queueLimit: 1, 
window: TimeSpan.FromSeconds(10), segmentsPerWindow: 5, 
autoReplenishment: true));,
```
💡
