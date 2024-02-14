---
title: "Date-only with (in) .Net6 😉"
pubDate: "2023-01-27"
description: "Date-only with (in) .Net6 😉"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQGeBX48-lv4Ng/article-cover_image-shrink_423_752/0/1674843978327?e=1713398400&v=beta&t=069pGKOxiTZ5vQdpu3-sP__E6A0BVIrnUGN6N0sEE94"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

Since the beginning of C#, dates and times have been handled by the **DateTime** struct, which may be used for either purpose. When two needs may be satisfied by one solution, trade-offs are frequently made, as is the case with the majority of software development decisions. When it comes to DateTime, this often means that even while we put up a whole DateTime instance, we frequently just care about the date component or the time component, but very seldom both.
Now new Release with .Net6, we have two additional (grate job Microsoft)
1. DateOnly
2. TimeOnly

### Let's talk about new two addition :

1. DateOnly
The new DateOnly struct may be used, as its name indicates, to solely represent the date component. A historical document, where we are more interested in the fact of the event than the exact moment it occurred, such as a person's date of birth, may be a good example.

Let's see how to create a fresh DateOnly instance:

```

var _todaysDate = new DateOnly(2023,1,27);
var _todaysUtcDate = DateOnly.FromDateTime(DateTime.Utc.Now);

```

2. TimeOnly

The new TimeOnly struct can be used when we are just concerned with the time component. A daily recurring alarm event at 11 AM might serve as a decent illustration in this case. The actual date doesn't matter because it happens every day.

### It's quite easy to start a new TimeOnly instance:

```

// Fell free to use below constructors as per your use case 🙂

public TimeOnly(int hour, int minute, int second, int millisecond)
public TimeOnly(int hour, int minute, int second)
public TimeOnly(int hout, int minute)

// 5:00 am club member 
var _myTime= new TimeOnly(5,0)

// Current time while I am writing this

var _thisNewsLetterEditionTime= TimeOnly.FromDateTime(DateTime.UtcNow);


```