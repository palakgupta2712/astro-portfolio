---
title: "Un-Layering MFA (Multi Factor Authentication)"
pubDate: "2023-01-28"
description: "Un-Layering MFA (Multi Factor Authentication)"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D4D12AQGcmlYWq3wV0A/article-cover_image-shrink_600_2000/0/1702668857508?e=1710979200&v=beta&t=QSkOewpn2EwepjTF3PN67u1Tof0A7atd2Qgqb9GCcxA"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">MFA stands for "Multi Factor Authentication".</span>

### The key principles behind MFA are

* You Know SOMETHING (Password, PIN or ......)
* You Have SOMETHING (Smart Card, Token, PKI or ....)
* You Have SOMETHING (Figure Print, Eye or .......)

## Here is Typical MFA System Design Looks like :-

![Alt text](https://media.licdn.com/dms/image/D5612AQGqaFW56b81zA/article-inline_image-shrink_1500_2232/0/1674930191618?e=1713398400&v=beta&t=tg1WibOO6hAYd6wN3-5c_JJ4q3ktmHeI3a_C2J0TeZI)

**Let's Talk little more into depth**

## Something You Have
The "something you have" aspect alludes to objects like hand-held tokens or smart cards. A smart card is an identity card of standard size with an integrated certificate that serves as the holder's means of identification. To authenticate the person, the user can place the card into a smart card reader. With a PIN, smart cards are frequently used to provide multi-factor authentication (PKI, or public key infrastructure). To put it another way, the user must possess something (the smart card) and possess knowledge (the PIN).
A token is a hand-held device (now in the form of mobile application) with an LED that displays a number and the number is synchronised with an authentication server. which shows the authentication server and the user with a hand-held token. The number displayed on the token changes regularly, such as every 60 seconds, and the authentication server always knows the currently displayed number.
For instance, the server is aware that the number is 750243 at 10:00 AM even if it isn't displayed on the LED or in a mobile app. The authentication server would be aware of the new number 518304 a minute later when it appeared on the LED or mobile app.

## Something You Are
Biometric techniques offer the authentication factor of what you are. Fingerprints, iris or retina scanning, and voice analysis are a few examples of biometric techniques that may be applied. The two biometric techniques that are now most extensively utilised are fingerprinting and handwriting. There are fingerprint readers on many computers, and they may even be found on external hard drives or USB flash drives. Many amusement parks that offer season passes or multi-day passes employ handprint identification.
While biometrics does offer the most secure authentication, mistakes can nevertheless occur. When a system incorrectly rejects a known user and reports that the user is unknown, this is known as a false rejection error (also known as a type 1 mistake). When a system incorrectly classifies an unknown user as a known user, it commits a false acceptance mistake (also known as a type 2 error). The sensitivity of biometric devices may often be changed, however the sensitivity influences the accuracy.
It's important to remember that when sensitivity rises, the false accept rate (FAR) lowers. In other words, a system that is less sensitive will authenticate unrecognised users in error. As the sensitivity rises, more known users are rejected as unknown, while the false reject rate rises.
The crossover error rate is the location where the FRR and FAR intersect (CER). To assess the accuracy of various biometric systems, you can compare their CERs. The accuracy of the biometric system is shown by a lower CER.

## Bonus is Location Factor
Although it is uncommon, dial-up remote access has employed location-based authentication as an additional authentication factor. Consider hashtag#Amit having the ability to connect to work-based resources utilising a dial-in remote access connection while working from home. Once hashtag#Amit calls in and authenticates, the remote access server can be set up so that it hangs up and dials hashtag#Amit's home computer.

As long as *Amit* tries to connect from his home computer, the connection will be successful. But if a hacker tried to sign in as Joe using *Amit's* username and password, they couldn't succeed. Once the attacker had successfully authenticated using *Amit's* credentials, the remote access server would hang up and try to reach *Amit's* workstation.💡