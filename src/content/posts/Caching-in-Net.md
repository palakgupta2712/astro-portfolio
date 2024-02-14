---
title: "Caching in .Net using IMemoryCache & IDistributedCache Interface"
pubDate: "2023-05-11"
description: "Caching in .Net using IMemoryCache & IDistributedCache Interface"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQGBOMJETDOhug/article-cover_image-shrink_720_1280/0/1683752897570?e=1713398400&v=beta&t=e_GPhN2cD9_HtNPmG66C9dkzqwmJ0A6G3D_yWpoipS8"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">Caching is a fundamental approach for improving web application and service performance and scalability. Caching reduces the requirement for time-consuming processes such as database queries, API calls, or complex calculations by temporarily storing frequently accessed data or the results of expensive operations in memory or external storage.</spam>

## Ways do to Caching..?

Caching in.NET can be done at several levels, including in-memory caching and distributed caching. The caching approach chosen is determined by factors such as the application's architecture, data access patterns, and performance needs.

1. In-memory caching stores data directly in the memory area of the programme. This method is highly efficient due to rapid access times, but it is limited by the amount of memory accessible on the hosting system. In-memory caching is commonly utilised for small-scale applications or when the cached data is not important to the operation of the programme.

2. Distributed caching stores data across numerous servers or nodes, resulting in a scalable and fault-tolerant solution for bigger applications. Redis, Memcached, and Microsoft's Azure Cache are examples of distributed caching systems. Distributed caching is ideal for high-availability applications or when data must be shared between numerous instances of an application.

Let's implement using IMemoryCache interface.

```
using System;
using Microsoft.Extensions.Caching.Memory;

public class MemoryCacheService
{
    private readonly IMemoryCache _cache;

    public MemoryCacheService(IMemoryCache cache)
    {
        _cache = cache;
    }

    public string GetData(string key)
    {
        // Attempt to get the value from cache
        if (!_cache.TryGetValue(key, out string cachedValue))
        {
            // If the value is not in cache, retrieve it from a data source (e.g., a database)
            cachedValue = $"Data for key {key}"; // Replace this with actual data retrieval logic

            // Set cache options
            var cacheEntryOptions = new MemoryCacheEntryOptions()
                .SetSlidingExpiration(TimeSpan.FromMinutes(5)); // Set cache expiration to 5 minutes

            // Save the value in cache
            _cache.Set(key, cachedValue, cacheEntryOptions);
        }

        return cachedValue;
    }
} 
```

Can we do the same with IDistributedCache interface.

Let's see

```
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Caching.StackExchangeRedis;

public void ConfigureServices(IServiceCollection services)
{
    services.AddStackExchangeRedisCache(options =>
    {
        options.Configuration = "localhost"; // Replace with your Redis server address
        options.InstanceName = "SampleInstance";
    });

    // Rest of the ConfigureServices method

}

using System;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Caching.Distributed;

public class DistributedCacheService
{
    private readonly IDistributedCache _cache;

    public DistributedCacheService(IDistributedCache cache)
    {
        _cache = cache;
    }

    public async Task<string> GetDataAsync(string key)
    {
        // Attempt to get the value from cache
        var cachedValueBytes = await _cache.GetAsync(key);

        if (cachedValueBytes == null)
        {
            // If the value is not in cache, retrieve it from a data source (e.g., a database)
            var cachedValue = $"Data for key {key}"; // Replace this with actual data retrieval logic

            // Save the value in cache
            cachedValueBytes = Encoding.UTF8.GetBytes(cachedValue);
            var cacheEntryOptions = new DistributedCacheEntryOptions()
                .SetSlidingExpiration(TimeSpan.FromMinutes(5)); // Set cache expiration to 5 minutes

            await _cache.SetAsync(key, cachedValueBytes, cacheEntryOptions);
        }

        return Encoding.UTF8.GetString(cachedValueBytes);
    }
} 
```
💡