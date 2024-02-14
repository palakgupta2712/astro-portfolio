---
title: "Hyper Personalised Type Ahead Search"
pubDate: "2023-03-11"
description: "Hyper Personalised Type Ahead Search"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQG_CdGBqTkzrg/article-cover_image-shrink_720_1280/0/1678553365604?e=1713398400&v=beta&t=MPP_TKvRrTkupKWk9Cck0Xf40Wu49L1oB3KZaEEl_UI"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">A better user experience can be achieved by offering type-ahead search suggestions since search is one of the most popular elements of any e-commerce site.</span>

Instead of displaying generic or well-liked options, suggest the search term as the user types it to make it easier to look for products.

## What if we make it personalised ....?

![image](https://media.licdn.com/dms/image/D5612AQH4TSioOLr4jw/article-inline_image-shrink_1500_2232/0/1678554000431?e=1713398400&v=beta&t=WxWvvVieoiny04KUtARnhJhglgIataLAkKK0Q4PHG4o)

## Personalised Suggestions 

![image](https://media.licdn.com/dms/image/D5612AQFAKAtLMxVHrA/article-inline_image-shrink_1500_2232/0/1678554246024?e=1713398400&v=beta&t=YPP9q7T2vQ0IQvCQcm-Bk0KOCbgd-d4rBimEQ36OGuM)
"supplied all the phrases that rank, so that the user's time to purchase is as short as possible"

## Parameters of Ranking

1. Quality of Suggestion :- 
 -- Popularity - How widespread is the phrase?
 -- Preference - Are there enough results for this term?
 -- Grammar Quality - is the word properly spelled?

Note: No business could or would produce them manually. thus the requirement for the check.

2. Prefix :-
 -- powerful prefix, word starting and substring.

3. User Dependent :-

 -- Post Action - The results of a prior search.
 -- User Profile - Historical acquisitions.

 ![image](https://media.licdn.com/dms/image/D5612AQEMZfW8EhhCVA/article-inline_image-shrink_1500_2232/0/1678554897358?e=1713398400&v=beta&t=Oc06JNjvugpWhDwRsH3YpbrqKbzwhZaEl_X2kQy2X-Q)

 ## Let's Personalise the Suggestions Now

 The very first Approach

-> Group the users and then produce suggestions for each group, but, since each person has a distinct trip, combining them won't produce the best results, and the level of engineering we're talking about here is not that.

![image](https://media.licdn.com/dms/image/D5612AQFEX1yix0EOGw/article-inline_image-shrink_1500_2232/0/1678555190583?e=1713398400&v=beta&t=S656eKsGsc5KUc8TYq60Og-QXj8_fySqauyRsh98Yhc)

Let's re-engineered the first approach again.

So, we must develop and rank on a personal basis for each user while taking into account their objective. Take Flipkart as an illustration. It has around 5000 taxonomies and categories.

![image](https://media.licdn.com/dms/image/D5612AQGo0UsNXm7Grw/article-inline_image-shrink_1000_1488/0/1678555527218?e=1713398400&v=beta&t=t9ImchxRKZyneJihxbAIOI2UPWhnj8RQbS1NtIqVxDM)

1. In the tree, the closer the entries, the more similar they are.
2. On this taxonomy, past searchers, browsers, and buyers can be mapped together and grouped according to similarities.
3. Map the inputs to this tree, look at what's nearby, and determine the user intent.

![image](https://media.licdn.com/dms/image/D5612AQEL4_5nnUvQpg/article-inline_image-shrink_1500_2232/0/1678555826256?e=1713398400&v=beta&t=vgsr6WnH0T8hPHW3yquSSVwzG6bnSjKA5GKjSGa0qqs)

1. *Evaluate Category Similarities* : Provide examples of related categories in the present. such as a computer mouse and display.
2. *Evaluate Re-formulation* : Ensure that the user would rephrase their question. for instance, shoes, red shoes, and nike under 2000.
3. *Personalising Suggestions* : Model training data. For every prefix a user supplied, all views clicked suggestions were displayed.

score ↑ for clicked suggestions.

score ↓ for shown but not clicked suggestions.

The relevance of the search feature was evaluated and the feature relationship was modelled before being swallowed into the xgBoost (decision tree) algorithm.

Let's design the system now.

![image](https://media.licdn.com/dms/image/D5612AQG0SyqZQ0wFJQ/article-inline_image-shrink_1500_2232/0/1678557504082?e=1713398400&v=beta&t=qqAW0yuIV-l4lI7kCQs3buJhWO3mmMUzCwnOwfg7MG0)

Based on search categories from prior searches, a proposal may be personalised or not.
For example-
Red Shoes ---> shoes
Nike Shoes --> shoes
"a" --> adidas shoes not for apple laptops.


That's the wrap buddy 💡