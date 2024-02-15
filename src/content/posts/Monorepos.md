---
title: "Understanding Monorepos"
pubDate: "2023-06-16"
description: "Understanding Monorepos"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQH0ltSf1yNgPg/article-cover_image-shrink_720_1280/0/1686864996816?e=1713398400&v=beta&t=qB3qRtXmI89uSQfRsx6fIvRrYPeYt2ekrUu09uwFvdY"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">Monorepos are popular right now, particularly among Web developers. This resource was developed to help developers understand what monorepos are, the benefits they can provide, and the tools available to make monorepo development enjoyable.</span>

## What is Monorepos..?

A monorepo is a single repository that houses several independent projects with clearly established relationships.

Let's understand via a chart.

![image](https://media.licdn.com/dms/image/D5612AQGexzQjn2Jy1Q/article-inline_image-shrink_1500_2232/0/1686864650329?e=1713398400&v=beta&t=NYnbY6HwaOPqzoa8gTNqGDeh7ZSJwFRUMbNNkpxuuQw)

## Monorepo ≠ Monolith

Why we are so much talking about MonoRepo..?

* A “Polyrepo”.

Let's call the opposite of monorepo a "polyrepo" for the sake of this discussion. A polyrepo is the current standard for application development: a repo for each team, application, or project. It's also usual for each repo to have a single build artefact and a basic build workflow.

![image](https://media.licdn.com/dms/image/D5612AQEw9xvMMZannQ/article-inline_image-shrink_1000_1488/0/1686864529740?e=1713398400&v=beta&t=L2eeww5rmYmQ-inju5DwcrLLUpXoLjVgsh4TOYcYDAM)

The industry has shifted to the polyrepo method of operation for one major reason: team autonomy. Teams desire the freedom to choose which libraries to use, when to deploy their apps or libraries, and who can contribute to or use their code.

Finally Let's draw the spectrum which may apply in the real word.

![image](https://media.licdn.com/dms/image/D5612AQFkTvDT0SnljQ/article-inline_image-shrink_1500_2232/0/1686864592519?e=1713398400&v=beta&t=igEWURlyknxD1FwzP3SPLXTjD32ewEQYDHZaDeBJVY4)

All of these things are positive, so why should teams do anything differently? Because separation provides this autonomy, and isolation hinders teamwork. More specifically, the following are common disadvantages of a polyrepo environment.

At the end what advantages we get from MonoRepo.

Monorepos provide numerous advantages, but they require the proper tools to function. As your workplace expands, the tools you use must assist you in keeping it fast, understandable, and manageable.

1. The ability to save and replay file and task output. You will never create or test the same item twice on the same system.
2. The ability to complete activities in the proper order and in parallel. Except for Lerna, all of the above tools can do it in much the same way. 
3. The ability to transfer cache artefacts between environments. This means that no two things will ever be built or tested by your entire organisation, including CI agents.
4. The ability to distribute a command over multiple machines while retaining the development ergonomics of performing it on a single system.
5. The ability to run any command on any number of machines while creating locally. 💡