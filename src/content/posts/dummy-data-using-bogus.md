---
title: "Creating Dummy Data using Bogus in C#"
pubDate: "2023-04-02"
description: "Creating Dummy Data using Bogus in C#"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQEujLdNZWhmJw/article-cover_image-shrink_720_1280/0/1679082229022?e=1713398400&v=beta&t=4cxZbBTVKm01T1gp1DwSvABY2ndpLxRptqd-KLocDDI"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">It's crucial to have data to test with. The secret is to have representative data without spending a lot of effort developing it, whether you want to insert sample data in the database or develop unit tests that more accurately simulate the real world.</span>

The Bogus library can help with that. With the help of this free open-source NuGet package, we can easily create fictitious data that can be used in a variety of ways to our application or database. In this video, we'll explore at how to quickly launch an application that uses fictitious data produced by Bogus.

This library can be useful when testing your applications, creating demo data or populating a database with sample data.

Here's a simple example of using Bogus to generate fake data for a user object:

```

using Bogus;


public class User {
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string Phone { get; set; }
}


class Program {
    static void Main(string[] args) {
        var faker = new Faker<User>()
            .RuleFor(u => u.Id, f => f.IndexFaker)
            .RuleFor(u => u.FirstName, f => f.Name.FirstName())
            .RuleFor(u => u.LastName, f => f.Name.LastName())
            .RuleFor(u => u.Email, (f, u) => f.Internet.Email(u.FirstName, u.LastName))
            .RuleFor(u => u.Phone, f => f.Phone.PhoneNumber());


        var user = faker.Generate();


        Console.WriteLine($"Id: {user.Id}");
        Console.WriteLine($"Name: {user.FirstName} {user.LastName}");
        Console.WriteLine($"Email: {user.Email}");
        Console.WriteLine($"Phone: {user.Phone}");
    }
}

```

In this example, we define a User class with properties for Id, FirstName, LastName, Email, and Phone. We then create a Faker<User> object, and use the RuleFor() method to define rules for generating fake data for each property. For example, to generate a fake first name, we use the f.Name.FirstName() method.

Finally, we call the Generate() method on the Faker<User> object to create a new instance of the User class with fake data.

This is just a simple example of how to use Bogus to generate fake data. Bogus supports many more types of data, and you can customize the rules to generate data that fits your specific use case.

In case if you are interested to see live code, here is working repo link for you

[BogusData](https://github.com/iamitprakash/BogusData) 💡
