---
title: "Schedule Cron Job with .Net core"
pubDate: "2023-11-12"
description: "A cron job is a task that is scheduled to run periodically at a fixed time, date, or interval. Cron jobs are often used to automate system..."
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQEz-7eaiL9vQw/article-cover_image-shrink_720_1280/0/1699768929843?e=1713398400&v=beta&t=GkIyQGIzXjvvTWSHTMqWhzfRcswMjoW5xn-o2H4rqkE"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

A cron job is a task that is scheduled to run periodically at a fixed time, date, or interval. Cron jobs are often used to automate system maintenance or administration tasks, such as backing up files, updating software, or generating reports.

Cron jobs are defined using a cron expression, which is a string that specifies the schedule on which the job should run. Cron expressions are made up of five or six fields, each of which represents a different unit of time: minute, hour, day of month, month, day of week, and year.

For example, the cron expression 0 0 * * * specifies that the job should run every day at midnight. The cron expression */5 * * * * specifies that the job should run every 5 minutes. And the cron expression 0 0 1 * * specifies that the job should run on the first day of every month at midnight.

Cron jobs are managed by the cron daemon, which is a system service that runs on Unix-like operating systems. The cron daemon periodically checks the crontab files of all users on the system and runs any jobs that are scheduled to run at that time.

Cron jobs are a powerful tool for automating tasks on Unix-like systems. They can be used to simplify system administration and to ensure that important tasks are always completed on time.

## Here are some examples of common cron jobs:
1. Backing up files
2. Updating software
3. Generating reports
4. Sending email notifications
5. Cleaning up logs
6. Running scripts
7. Starting and stopping services


Cron jobs can be used to automate a wide variety of tasks, and they are an essential tool for system administrators and DevOps engineers.

To schedule a cron job with .NET Core, you can use the Quartz library.

Step 1: Install the Quartz library

Install the Quartz NuGet package into your .Net Core project:

```
dotnet add package Quartz
```

Step 2: Configure the cron job

In your Startup.cs file, configure the cron job by adding the following code to the ConfigureServices() method:

```
builder.Services.AddQuartz(q =>
{
    q.UseMicrosoftDependencyInjectionScopedJobFactory();

    var jobKey = new JobKey("MyJob");
    q.AddJob<MyJob>(opts => opts.WithIdentity(jobKey));
    q.AddTrigger(opts => opts
        .ForJob(jobKey)
        .WithIdentity("MyJob-trigger")
        .WithCronSchedule("0/5 * * * * ?"));
});

```

This code will create a new cron job named MyJob that will run every 5 seconds. You can change the cron expression to match your desired scheduling needs.

Step 3: Implement the cron job

Create a new class named MyJob and implement the IJob interface. This class will contain the code that you want to run when the job is triggered.

```
public class MyJob : IJob
{
    public async Task Execute(IJobExecutionContext context)
    {
        // Do something here...
    }
}

```

Step 4: Start the cron job

In your Program.cs file, start the cron job by adding the following code to the Main() method:

```
builder.Services.AddQuartzHostedService(q => q.WaitForJobsToComplete = true);

var app = builder.Build();

await app.RunAsync();

```

This code will start the cron job and ensure that it continues to run even if the application is restarted.

## Code sample

The following code sample shows a complete example of how to schedule a cron job with .NET Core:

```

using Quartz;

public class MyJob : IJob
{
    public async Task Execute(IJobExecutionContext context)
    {
        // Do something here...
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        builder.Services.AddQuartz(q =>
        {
            q.UseMicrosoftDependencyInjectionScopedJobFactory();

            var jobKey = new JobKey("MyJob");
            q.AddJob<MyJob>(opts => opts.WithIdentity(jobKey));
            q.AddTrigger(opts => opts
                .ForJob(jobKey)
                .WithIdentity("MyJob-trigger")
                .WithCronSchedule("0/5 * * * * ?"));
        });

        builder.Services.AddQuartzHostedService(q => q.WaitForJobsToComplete = true);

        var app = builder.Build();

        await app.RunAsync();
    }
}

```

At the end Cron jobs are the unsung heroes of the DevOps world. They automate tasks, simplify system administration, and ensure that important things always happen on time.

Here are 5 reasons why you should love cron jobs:

1. They're easy to set up and use. With a few simple lines of code, you can schedule any task to run at any time or interval.
2. They're reliable and scalable. Cron jobs have been around for decades, and they're used by some of the biggest and busiest companies in the world.
3. They're free and open source. There are many different cron job implementations available, but they all work the same way.
4. They can automate just about anything. From backing up files to deploying software, cron jobs can help you automate all of your DevOps tasks.
5. They save you time and headaches. By automating your tasks, you can focus on more important things, like building new features and improving your systems. 