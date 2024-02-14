---
title: "Creating Idempotent API Endpoints at [Stripe] for Payments"
pubDate: "2023-04-07"
description: "Creating Idempotent API Endpoints at [Stripe] for Payments"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQHLy3rX2mP1Kg/article-cover_image-shrink_720_1280/0/1680852361769?e=1713398400&v=beta&t=PKa6yzVA9xK6rXlLtge3m3Nb50Tb_oUAg_XDj5Z6Xqs"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">Just consider that you are creating a payment service that sends money from one account to another, but due to a network failure, the client automatically tried the operation a second time, resulting in the removal of money twice from the sender's bank account. Our API must be idempotent in order to handle this case.</span>

Let's move to real life use case.

Let's say that user A attempted to make an API call to the backend, but the call was unsuccessful due to network problems. 

![image](https://media.licdn.com/dms/image/D5612AQG3M8q8Zcm9vA/article-inline_image-shrink_1500_2232/0/1680849448122?e=1713398400&v=beta&t=ut3zuoJSSB0oePXiyJAwwWntpqd7qLdJdaBo2kbV9_c)

## What must we do right away...?

1. We can disregard and advance for.
2. We can inform the user of the observed error.
3. We can attempt again if we'd like a better user experience, in my opinion.

*Note*: We can choose one of the aforementioned use cases and handle it, again depending on what we are building.

Now we have decided to re-try for better user experience, let's focus on Failure time line.

1. Client is aware that the request never even made it to the server, making a retry extremely secure.

![image](https://media.licdn.com/dms/image/D5612AQEScRF0o2ZdwA/article-inline_image-shrink_1500_2232/0/1680849893342?e=1713398400&v=beta&t=G9zmTF30F9Jdp-yyCDHfzg3kUgmwXeLB7tY6JyPbbeA)

2. Failure while the server is handling or carrying out the request leaves the client uncertain about whether to try again.

![image](https://media.licdn.com/dms/image/D5612AQG6ge7YqTi3RA/article-inline_image-shrink_1500_2232/0/1680850012778?e=1713398400&v=beta&t=906BEVVFZEQEQvCmlKl4M1NbV5nTzvwTDo2HcqAaqiQ)

3. Despite finishing the operation, the server crashed before the client received the response. Client cannot be confident in retrying in this circumstance.

![image](https://media.licdn.com/dms/image/D5612AQFuUgM3RiNIVQ/article-inline_image-shrink_1500_2232/0/1680850218343?e=1713398400&v=beta&t=7dxLO8yPHJC0iIIYn4bk6KRX93tR3meZmNOpVOwYYE4)

What could possibly go wrong if we keep trying, is the crucial question right now..?
Imagine that an API is ready to transfer money from Account A to Account B.

```
../payment/<B> 
{ amount:1000}

```

The money will be re-deducted if the API call was successful but we still retried; the amount will be $10000 * n for n retries.

We must safely experiment with retry techniques in order to assure idempotency for payments and other crucial APIs.

## Idempotent API

The fundamental tenet of creating an idempotent API is that the server must somehow be aware that it has already received this request.

If this is your first time seeing the request, go on; otherwise, disregard it or issue an error.

What we're attempting to accomplish === Exactly once semantics

It is not a good idea to disambiguate a request on a basic, straightforward URL.

1. How many URL would we keep track of...? This will lead to higher memory utilisation.
2. What if the request is genuine..?

While designing I want to keep this very simple, the way we can achieve this is Idempotance Key.

1. The client first communicates with the server to generate a random Id, which could be an operation-specific Id, such as "Money Transfer."

2. To execute the actual operation, the client must send this Id along with the standard payload of the API.

3. The server verifies the Id and sees if it has already been processed. If already handled, kindly disregard or throw the error. Otherwise, proceed with processing.

4. If the client notices the problem, it will resubmit the request using the same random Id.

5. If the client notices the problem, it will resubmit the request using the same random Id.


Now the giant Question is How do we pass the Idempotency Key....?

1. Request Header.
2. Query Parameter.

*Note*: Above two are most common ways.

Stripe requests client to pass key in Request header "Ideompotency_key".
Let's think and design the Architecture of above discussed system.

1. Server maintains all idempotency key in a database.
2. When operation is successful, server deletes the stored key.
3. For every request, server checks the database for key. 

![image](https://media.licdn.com/dms/image/D5612AQGJB56AY5Cn3w/article-inline_image-shrink_1500_2232/0/1680851890032?e=1713398400&v=beta&t=KN8wBi-gMq4D1aENNOlNMuxZlYP4xrVcPSB8qHpVeQo)

```

key1: {operation,user,th}
key2: {operation,user,th}
key3: {operation,user,th}

```

The aforementioned use case is not limited to payments; it can apply to any crucial API that must be used just once. Simply add the meta data and other necessary information if you wish to handle various use cases.

If you want to explore about perfect re-try mechanism, please click check previous edition of techDiary link is below.

## Reference has been taken from stripe engineering blog, in case if you interested to explore more please check below link 💡
