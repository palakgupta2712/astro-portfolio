---
title: "Proxy: Let's Choose Forward or Reverse"
pubDate: "2023-02-12"
description: "Database per Service"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQH3I25S0Rxn1g/article-cover_image-shrink_720_1280/0/1676213851022?e=1713398400&v=beta&t=TI5gfFkCBICFQUPzkmFFcUDRDdq5kDIAMH00mj-cJQg"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">Let's talk about Basics First </span>

What is a Proxy Server..?

Any device or router known as a proxy server that acts as a gateway for users to access the application. As a result, it aids in preventing online intruders from accessing a private network. It is a server, and because it stands between end users and the application they visit online, it is referred to as a "intermediary."

A computer uses an IP address to connect to the internet. Similar to your home's street address, this directs incoming data to the appropriate location and includes a return address on all outgoing data so that other devices can authenticate it. In essence, a proxy server is a machine connected to the internet with a unique IP address.

In short- This is a useful layer of security is added to your computer/ application server through proxies. Your computer or application server can be protected from online dangers like malware by setting them up as web filters or firewalls.

![image](https://media.licdn.com/dms/image/D5612AQGfZWcqQT2hSQ/article-inline_image-shrink_1500_2232/0/1676213080132?e=1713398400&v=beta&t=wfH85w7wuVI3DgIph5I_ajpmaGjbLUBo713-tES-7O8)

Type of Proxy..?

Generally we do have two type of proxy use case.

1. Forward Proxy.
2. Reverse Proxy.

### Let's talk about Forward 

The usage of "forward" or "classic" proxies allows users to submit requests to a destination website via a server. Forward proxies first determine whether requests are legitimate; if they aren't, the client will be informed with a "error" or "redirect" message. Requests that aren't cached will be routed through a firewall to content servers, while requests that are cached will be processed immediately. The data will then be transmitted back to the original requester and cached for further use. Let's look via diagram

![image](https://media.licdn.com/dms/image/D5612AQEZskYaMUs9cA/article-inline_image-shrink_1500_2232/0/1676213544761?e=1713398400&v=beta&t=zmSDRmcCudgVCknmy5HTH3DYsIcPBiaGQSsIRnNcxBc)

### Reverse one

In an effort to secure an internal data pool that resides on a private/isolated network further, proxy traffic can be arranged in a reverse proxy fashion. This is accomplished by sending requests first through a firewall and then to the first server (A), after which they are secretly forwarded to the second server (B), which actually holds the requested target information. When comparable requests are made in the future, there will be reduced network traffic since Server A has stored (cached) the data.

![image](https://media.licdn.com/dms/image/D5612AQEMizSjHVRtKw/article-inline_image-shrink_1500_2232/0/1676213616420?e=1713398400&v=beta&t=Mg5piJcf2eELBfk-_Y82DvotX5ybeiXA9dN6oNj0Kz8)

How to chose which proxy is for you/ your use case.

Forward proxies are excellent for uncomplicated, simple content queries, such as retrieving public records from a digital repository (more on this example in the next section).
For a use case like that produces its own data, a reverse proxy might be more helpful. They might want to keep some of that information accessible to the general public while containing very sensitive, confidential information about the core of their technology in other portions (more on this in the next section).

## At the End

One should go and select the kind of proxy solution that is appropriate for your organisation/business based on the target data for your company as well as the data lakes that may be potentially at risk. A "traditional proxy" can handle simple, easy requests properly, however businesses with internal or externally facing data may want to employ a reverse proxy. A third-party technology or solution that assumes this obligation and establishes a safety barrier may also be used by businesses that want to collect data in various ways and keep it as secure as feasible in the cloud. 💡