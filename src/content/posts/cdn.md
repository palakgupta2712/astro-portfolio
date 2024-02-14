---
title: "CDN: Exquisite Manifestation of Engineering"
pubDate: "2023-02-04"
description: "CDN: Exquisite Manifestation of Engineering"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQGpWhTO3OpQew/article-cover_image-shrink_423_752/0/1674941318595?e=1713398400&v=beta&t=Jpq7fbUlXtTH-xAvJNpqgzg2yrRy9EXGIjIoW2JF4mw"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

Geo graphically dispersed servers (Edge, Shield & Origin) used to deliver static content, CDN is a cache itself and it stores images, gifs, Videos, script files..... etc. Content is served from edge server near to user.

We do have another concept for Dynamic content caching that GIFY is using, we will understand at the end of this edition via example.

Here is how a typical* CDN system looks like:

(https://media.licdn.com/dms/image/D5612AQGuys4Vec5MhQ/article-inline_image-shrink_1500_2232/0/1674942299857?e=1713398400&v=beta&t=Gbzj5d88VrL_DV2TQ3jhxeuKTScs6TfRJ77b3VBlIhI)

Let's understand request/response workflow in CDN.

- Consider User1 creates GET request for abc.png image
 https://amitprakash.io.somecloudprovider/abc.png
-- System will look for abc.png image into CDN. (Note:- Every CDN is itself a cache)
-- If abc.png is present/Cached into CDN, it will server to User1 from there, if not it will look into origin, cache into CDN and will server to User1.
Note:- While processing above step3, along with abc.png image to server, origin will add optional HTTP header i.e. TTL(Time-to-Live). This TTL will decide how long image abc.png will be cached to CDN.

- Now Consider User2 will request for same image abc.png, now as long TTL is valid User2 will be served from CDN.

If your are thinking to use or implement CDN, please mind that, we should not cache responses which is highly dynamically in Nature like *authentication* keys and all ....

Cool... Now will look into Real-time example for Dynamic CDN.

What & How the company like GIPHY uses this Dynamic CDN
*Giphy* serves, hosts & provides search facility for Billions of content Everyday.

Serving API is easy and efficient because of smaller size of response, but the real challenge is serving Images, Videos because of larger size.
 
- How & What hashtag#Giphy caches on CDN
Based on the requests from particular Geo region hashtag#Giphy caches contents dynamically like 

```
/v1/gifs/trending
/v1/serach?type=congratulations

//I guess giphy has some ranking job to decide trending gifs, that runs 
//once in a day.. just my assumption 
```

While designing CDN, if we didn't take proper precautions this will lead to Single Point of Failure.

To overcome this situation we can design Multi-layer CDN.

Let's understand this multi later from very simple system-design.

### Single Layer CDN
(https://media.licdn.com/dms/image/D5612AQEInMnGfcrGdQ/article-inline_image-shrink_1500_2232/0/1675279776809?e=1713398400&v=beta&t=BNqcMuEkQJtcHe0mGP1HAhXLoyTdbC6vql7yr8etZ5A)

### Multi Layer CDN

(https://media.licdn.com/dms/image/D5612AQG8e1v28EvTLQ/article-inline_image-shrink_1500_2232/0/1675280015887?e=1713398400&v=beta&t=M9qvinBNuIu_d7kKc78rKxUCE60qNvVseqno2S7kAAQ)

Although moving ahead just wanted to have small tough base on Route Specific TTL.

via route specific - we don't cache all content from same direction in some business use case we need to care about cache duration as well, let's see below.

```
/v1/gif/treanding 
//cached for smaller duration 

v1/gif/happyface.gif
//cached for longer duration

//usually CDN provider provides SDK to manage such things 
// Response Configured caching is an another interesting topic 
```

## That's the wrap now for CDN.

