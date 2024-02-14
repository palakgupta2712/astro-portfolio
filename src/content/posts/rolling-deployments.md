---
title: "Rolling Deployments"
pubDate: "2023-03-25"
description: "Rolling Deployments"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQG0VXkUlqRh5w/article-cover_image-shrink_720_1280/0/1679730023981?e=1713398400&v=beta&t=IwTbJ-JJYZM8SLR6BetNbVuF88dLYVuH7mHwjegfmf4"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">Rolling Deployment is one of the most straightforward deployment tactics that is a delight to use. Only because it is so straightforward and affordable makes it the most widely used deployment approach. This is the standard deployment approach used by the majority of tools.</span>

We slowly replace older versions of the application with the new one as part of rolling deployments by replacing the supporting infrastructure.

![image](https://media.licdn.com/dms/image/D5612AQHBm2G1_P6AVg/article-inline_image-shrink_1500_2232/0/1679731797304?e=1713398400&v=beta&t=Ga0z3ZzAul68cIOTs4twpia_2L8l-lMPZCXtIoLYynU)

For instance, in kubernetes containers, the operating service is replaced with a newer version of the code or artifact, or in an EC2 machine, the previous services are now running on a newer version of code or artifact.

*Note*: The infrastructure replacements take place as incoming requests are processed gradually rather than all at once.

![image](https://media.licdn.com/dms/image/D5612AQG64lFF2H6NAw/article-inline_image-shrink_1500_2232/0/1679731903821?e=1713398400&v=beta&t=e_ILDgAnsU5NTM1oF--hUDd4i3Q_wsnEYrb6c_Ta3J8)

As the Rolling Deployments are incremental, some servers would serve the new version of the artefact at the moment of deployment while others would provide the older versions.

As a result, the answer would be created using the appropriate version depending on which server receives the request. Because of this, backward and forward compatibility become essential features.

## How to apply the Rolling Deploy method..?
The practise of rolling out is usually graceful.

1. Pick a server for deployment.
2. Stop in-coming traffic to it.
 -- Remove it form load balancer.
3. Wait for existing request to be completed.
4. If no Infra replacement.
 -- pull the latest code/artifact.
 -- Restart the process.

![image](https://media.licdn.com/dms/image/D5612AQHDW7ou7_jfzw/article-inline_image-shrink_1500_2232/0/1679732038729?e=1713398400&v=beta&t=OT1GTGLdszkyT10AOF-AQjxOXvzaT_pxe-pQDSU1G-M)

![image](https://media.licdn.com/dms/image/D5612AQECelr6hg9T3Q/article-inline_image-shrink_1500_2232/0/1679732086203?e=1713398400&v=beta&t=dAxSjcdJLt55SLZHKbwnDDk373h5DNQpJfy0esjzL7c)

5. If Infra replacement.
 -- Terminate the server
 -- create the new server with new code or artifact

![image](https://media.licdn.com/dms/image/D5612AQGGtdE5HIjkkA/article-inline_image-shrink_1500_2232/0/1679732173532?e=1713398400&v=beta&t=ftOLK_Wd3cjNxu4R9fgsF2-9moCS5Cgk6tBpZRCNzoE)

6. Attach the server with load balancer.

![image](https://media.licdn.com/dms/image/D5612AQHU8VR3dDPN8Q/article-inline_image-shrink_1500_2232/0/1679732193307?e=1713398400&v=beta&t=HTq5x3jPgjQLoP-sOlUVmVYRrPM49XjGgP2owX7uGz4)

Tuning the Rolling Deployment
1. Concurrent Server 
 -- We can choose 'n' servers concurrently rather than selecting one server for upgrade at a time.
 -- This will seed-up the deployment.
*Note*: 'n' shouldn't be excessively big or little. 

![image](https://media.licdn.com/dms/image/D5612AQGa2-TK0ByDqA/article-inline_image-shrink_1500_2232/0/1679732212421?e=1713398400&v=beta&t=xKu7WPD3bUA1vsUszG3qVUpnkSTrbJmphRTZto2pO24)

2. Double- Half Deployment.

The infrastructure is often doubled with new code before being restored to its original capacity in rolling deployment.

*Note*: Make sure your database cache can handle a lot of connection queries while doing this.

![image](https://media.licdn.com/dms/image/D5612AQE8A1HDzyLeZQ/article-inline_image-shrink_1500_2232/0/1679732228844?e=1713398400&v=beta&t=S-SVaq42v6YE9Ehw5wvzaBTeM-gjdv6-AoP1Nvm0Itk)

3. Terminate one and Spin one.
## Pros of Adopting Rolling Deployment
1. Much faster then Blue Green deployment.
2. Deployment ensures zero downtime.
3. Rollouts are gradual.
4. Any defect affect only a small set of user or requests.
5. Cost efficient deployment strategy.

## Cons of Adopting Rolling Deployment 

1. No Environment isolation between the old and new servers.
2. Changes we rollout has to be backward compatible.
3. Changes we rollout has to be forward compatible.
4. Deployments takes a long time to complete.
5. Stateful applications will be affected during the deployments.

*Note*: These are merely my personal worries, not the main problem.💡