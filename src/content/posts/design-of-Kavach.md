---
title: "[Tech] Design of Kavach (Train Safety System)"
pubDate: "2023-06-04"
description: "[Tech] Design of Kavach (Train Safety System)"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQHUA3Iqx6l3Zg/article-cover_image-shrink_720_1280/0/1685820425795?e=1713398400&v=beta&t=bNly7wIWOJH1hMDpdfaAE4BeiKRDMAFvmRG6eglAWps"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">Kavach (meaning "Armour") is an automated train protection (ATP) system developed by Indian Railways through the Research Designs & Standards Organisation (RDSO).[1] Kavach's development began in 2012 under the moniker Train Collision Avoidance System (TCAS).</span>

The Kavach system is a certified safety integrity level 4 (SIL-4) technology. When fully operational, Kavach will be the world's cheapest autonomous train collision safety system, with an operating cost of 50 lakh rupees per kilometre, compared to around two crore rupees globally. 

## Working Mechanism.


The system is made up of a collection of electronic devices and radio frequency identification devices that are put in locomotives, tracks, the railway signalling system, and every station within a 1 km radius.The system now communicates with its components via ultra-high radio frequencies, while a 4G LTE-based solution is being developed. When a loco pilot jumps a signal (Signal Passed at Danger -SPAD), which is the major cause of railway crashes, Kavach sends a warning. When it detects another train on the same line within a certain distance, the system can immediately inform the loco pilot, take control of the brakes and put train movement to a halt. The gadget continuously monitors train progress and sends signals ahead to the locomotives, which is useful in inclement weather such as fog. The Kavach integrates major features of the European Train Control System as well as the Indian Anti-collision device.

Let's explore System Design and working functionality of this Safety System.

1. How date is getting collected form LOCO.

![image](https://media.licdn.com/dms/image/D5612AQEmyT8ug4vcsA/article-inline_image-shrink_1500_2232/0/1685827322164?e=1713398400&v=beta&t=eorINWeVMJIddkhE8PYaLAIS1SsnvD8T0zDDj19Lv4o)

2. Communication System the real *magic* happens here.

![image](https://media.licdn.com/dms/image/D5612AQG6edRECrxXXg/article-inline_image-shrink_1000_1488/0/1685827274115?e=1713398400&v=beta&t=0KPeV7iD2ReYe8gK2KfT9ylvOrikQZEIj_zq752KI3A)

💡

