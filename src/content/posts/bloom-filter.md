---
title: "BloomFilter in .NetCore"
pubDate: "2023-04-12"
description: "BloomFilter in .NetCore"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQHHKQ3PJH6dLg/article-cover_image-shrink_720_1280/0/1681254309638?e=1713398400&v=beta&t=YvR3DPR_NT1E_NkgYHtMMFOyOb3VjWNQro-f1cc01cU"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">A space-effective probabilistic data structure called a bloom filter is used to determine if an element is a part of a set. For instance, determining a username's availability is a set membership problem, where the set is the whole list of all registered usernames. Efficiency comes at a cost because it is probabilistic in nature, which implies that there may be some False Positive outcomes. False positives are indicators that a username is available when it actually isn't.</span>

## Why we need BloomFilter.?

Consider opening an account on an unrelated social networking site. You want to give it a cool username, but you input it and get the notification, "Username is already taken." Your username and birthdate were also entered, but nothing worked. You have now entered your university roll number as well, yet the message "Username is already taken" persists. It's quite annoying, isn't it?

But have you ever considered how rapidly the social networking site searches through the millions of usernames that have been registered with it to determine whether a username is available. This job can be done in a variety of ways:

### Poor idea: linear search
Binary Search: Keep every username in alphabetical order and compare it to the middle username in the list, Determine if the entered username will come before or after the middle one, and if it will come after, disregard all the usernames before the middle one, if it matched (inclusive). Continue searching after the middle one until you find a match, at which point your search will end. Although this method is more effective and promising, it still involves several steps.

But there must be a better option!

A data structure that can accomplish this is Bloom Filter.

To comprehend bloom filters, you must understand hashing. A hash function takes an input and produces a unique, fixed-length identifier that is used to identify the input.

## Fascinating Bloom Filter Characteristics

1. A Bloom filter with a fixed size can represent a set with an arbitrary large number of entries, in contrast to a typical hash table.

2. A Bloom filter includes a component that never fails. However, as items are added, the false positive rate rises continuously until all bits in the filter are set to 1, at which point all queries return a positive answer.

3. Bloom filters never produce a false negative, informing you that a username doesn't exist when it does.

4. Removing elements from a Bloom filter is practically impossible because if we remove one element by clearing bits at indices produced by k hash functions, it may also remove a small number of other elements.

## Let's try to implement in dot Net core

```

//In memeory
public class Demo_Bloom
    {
        static IBloomFilter bf = FilterBuilder.Build(10000000, 0.01);
        
        public void Sample()
        {
            bf.Add("Value");
            Console.WriteLine(bf.Contains("Value"));
        }
    }
//Configuration
var services = new ServiceCollection();
services.AddBloomFilter(setupAction =>
{
    setupAction.UseInMemory();
});

var provider = services.BuildServiceProvider();
var bf = provider.GetService<IBloomFilter>();
bf.Add("Value");
Console.WriteLine(bf.Contains("Value"));

//Use Redis
public class Demo_Bloom 
   { 
       static IBloomFilter bf = FilterRedisBuilder.Build("localhost", 
"InstanceName", 5000000, 0.001); 

       public void Sample() 
       { 
           bf.Add("Value"); 
           Console.WriteLine(bf.Contains("Value")); 
       } 
   }
//StackExchange.Redis
var services = new ServiceCollection();
services.AddBloomFilter(setupAction =>
{
    setupAction.UseRedis(new FilterRedisOptions
    {
        Name = "Redis1",
        RedisKey = "BloomFilter1",
        Endpoints = new[] { "localhost" }.ToList()
    });
});

var provider = services.BuildServiceProvider();
var bf = provider.GetService<IBloomFilter>();
bf.Add("Value");
Console.WriteLine(bf.Contains("Value"));

//CSRedisCore
var services = new ServiceCollection();
services.AddBloomFilter(setupAction =>
{
    setupAction.UseCSRedis(new FilterCSRedisOptions
    {
        Name = "Redis1",
        RedisKey = "CSRedis1",
        ConnectionStrings = new[] { "localhost" }.ToList()
    });
});

var provider = services.BuildServiceProvider();
var bf = provider.GetService<IBloomFilter>();
bf.Add("Value");
Console.WriteLine(bf.Contains("Value"));

//FreeRedis
var services = new ServiceCollection();
services.AddBloomFilter(setupAction =>
{
    setupAction.UseFreeRedis(new FilterFreeRedisOptions
    {
        Name = "Redis1",
        RedisKey = "FreeRedis1",
        ConnectionStrings = new[] { "localhost" }.ToList()
    });
});

var provider = services.BuildServiceProvider();
var bf = provider.GetService<IBloomFilter>();
bf.Add("Value");
Console.WriteLine(bf.Contains("Value"));

//EasyCaching
var services = new ServiceCollection();


services.AddEasyCaching(setupAction =>
{
    setupAction.UseCSRedis(configure =>
    {
        configure.DBConfig = new CSRedisDBOptions
        {
            ConnectionStrings = new System.Collections.Generic.List<string>
            {
                "127.0.0.1,defaultDatabase=0,poolsize=10"
            }
        };
    }, "BloomFilter1");


    setupAction.UseCSRedis(configure =>
    {
        configure.DBConfig = new CSRedisDBOptions
        {
            ConnectionStrings = new System.Collections.Generic.List<string>
            {
                "127.0.0.1,defaultDatabase=1,poolsize=10"
            }
        };
    }, "BloomFilter2");
});


services.AddBloomFilter(setupAction =>
{
    setupAction.UseEasyCachingRedis(new FilterEasyCachingRedisOptions
    {
        Name = "BF1",
        RedisKey = "EasyCaching1",
        ProviderName = "BloomFilter1"
    });


    //BloomFilter2
    setupAction.UseEasyCachingRedis(new FilterEasyCachingRedisOptions
    {
        Name = "BF2",
        RedisKey = "EasyCaching1"
    });
});


var provider = services.BuildServiceProvider();
var factory = provider.GetService<IBloomFilterFactory>();
var bf = provider.GetService<IBloomFilter>();
var bf1 = factory.Get("BF1");
bf.Add("Value");
Console.WriteLine(bf.Contains("Value"));
bf1.Add("Value");
Console.WriteLine(bf1.Contains("Value"));


```

For more details you can check below Repo.
[GitHub Repo](https://github.com/iamitprakash/BloomFilter_dotNetCore) 💡