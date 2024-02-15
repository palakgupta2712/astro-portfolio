---
title: "Bun ORM with Golang"
pubDate: "2023-09-16"
description: "Bun ORM with Golang"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQHQ5Y8JfBAtNA/article-cover_image-shrink_720_1280/0/1694038611048?e=1713398400&v=beta&t=bBx0meK7A_cDjj4ABgFoNlAWlmYZg2nGuW6EyHcVw0c"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">Bun is a SQL-first Golang ORM (Object-Relational Mapping) that supports PostgreSQL, MySQL, MSSQL, and SQLite. It aims to provide a simple and efficient way to work with databases while utilizing Go's type safety and reducing boilerplate code.</span>

I have used personally and ran couple of benchmarks with respect to other ORM(s) and this came out pretty good to me.
I will be attaching very high level non-production code github repo at the end of this edition, please do check.
Let's talk what and how this orm does for you

This is a SQL-first database client for Go. SQL-first means that most SQL queries can be automatically compiled to Bun expressions and Bun expressions look and feel like SQL queries.

The purpose of Bun is to allow writing queries using the good old SQL and to help scanning results into common Go types: structs, maps, slices, and scalars.

```
type DB struct {
	*sql.DB
    ...
}
```

Let's see what above code is actually doing.

Bun provides query builder and hooks by wrapping sql.DB. The original sql.DB is now available as db.DB and can be used freely, isn't sounds interesting.

Bun also includes dialects for every supported database. When generating queries and scanning query results, Bun leverages dialects to uncover available features. To connect to a PostgreSQL server, for example, you should use a PostgreSQL driver (for example, pgdriver) and a PostgreSQL dialect (pgdialect).

Bun includes fixtures for loading initial data as well as migrations for updating database structure. Bun starter kit can also be used to quickly bootstrap an app using those packages.

So by this time you might be thinking about complex query’s correct, let see in action now.

```
regionalSales := db.NewSelect().
	ColumnExpr("region").
	ColumnExpr("SUM(amount) AS total_sales").
	TableExpr("orders").
	GroupExpr("region")

topRegions := db.NewSelect().
	ColumnExpr("region").
	TableExpr("regional_sales").
	Where("total_sales > (SELECT SUM(total_sales) / 10 FROM regional_sales)")

err := db.NewSelect().
	With("regional_sales", regionalSales).
	With("top_regions", topRegions).
	ColumnExpr("region").
	ColumnExpr("product").
	ColumnExpr("SUM(quantity) AS product_units").
	ColumnExpr("SUM(amount) AS product_sales").
	TableExpr("orders").
	Where("region IN (SELECT region FROM top_regions)").
	GroupExpr("region").
	GroupExpr("product").
	Scan(ctx)
```

Fairly simple, people coming from LINQ or Entity Framework and EF core can relate this very quickly because they might be doing this since years.

Now the major part is debugging, being a software developer this part is really critical, no worries bun has great offering something like bundebug.

Let's see in quick action.

You can print run queries to stdout for fast troubleshooting. First, you must install the bundebug package:

```
//step- 1 
go get github.com/uptrace/bun/extra/bundebug

// step- 2
import "github.com/uptrace/bun/extra/bundebug"

db := bun.NewDB(sqldb, dialect)
db.AddQueryHook(bundebug.NewQueryHook())

//step- 3 To print all queries, use WithVerbose option:
bundebug.NewQueryHook(bundebug.WithVerbose(true))

// You can also disable the hook by default and enable it as needed using environment variables:

bundebug.NewQueryHook(
    // disable the hook
    bundebug.WithEnabled(false),

    // BUNDEBUG=1 logs failed queries
    // BUNDEBUG=2 logs all queries
    bundebug.FromEnv("BUNDEBUG"),
)
```
Now the dream and nightmare of every developer to run application into production, because we don't want much complexity.

Bun uses sql.DB to communicate with database management systems. You should create one sql.DB and one bun.DB when your app starts and close them when your app exits.

The sql package creates and frees connections automatically; it also maintains a pool of idle connections. To maximize pool performance, you can configure sql.DB to not close idle connections:

```
maxOpenConns := 4 * runtime.GOMAXPROCS(0)
sqldb.SetMaxOpenConns(maxOpenConns)
sqldb.SetMaxIdleConns(maxOpenConns)

//bun.WithDiscardUnknownColumns
```

To make your app more resilient to errors during migrations, you can tweak Bun to discard unknown columns in production:

```
db := bun.NewDB(sqldb, pgdialect.New(), bun.WithDiscardUnknownColumns())
```

## Benefits of using Bun with Golang:

1. Simple and efficient: Bun focuses on providing a simple and efficient way to work with databases. It does this by using SQL as its primary language and by minimizing the amount of boilerplate code required.

2. Type safety: Bun takes advantage of Go's type safety to provide a more robust and reliable way to work with databases. This means that you can be confident that your code is correct and that you are not accidentally sending invalid data to the database.

3. Database-agnostic: Bun is database-agnostic, meaning that you can use it with a variety of different databases without having to change your code. This makes it a good choice for applications that need to be portable or that need to support multiple databases.

4. SQL-first: Bun is SQL-first, meaning that it focuses on helping you write SQL, not on hiding it behind awkward constructs. This makes it easier to learn and use, and it also makes it easier to debug your code.

Now the another major question will be like- Hey, running into Production is fine but what about Bun Performance Monitoring.

The Great news is here this ORM supports OpenTelemetry.

Bun employs OpenTelemetry tracing and OpenTelemetry metrics to monitor database performance and errors.

OpenTelemetry is language and framework neutral, supporting a variety of programming languages and frameworks. It provides language-specific software development kits (SDKs) to enable telemetry gathering easy to integrate into applications developed in various languages.

OpenTelemetry also has exporters and integrations for sending telemetry data to various OpenTelemetry backend systems and observability platforms, such as Prometheus, Grafana, Jaeger, Zipkin, Elasticsearch, and others.

Developers can use OpenTelemetry to take a standardised approach to observability, making it easier to gather and analyse telemetry data across various components of a distributed system. It aids in application debugging, performance optimisation, and monitoring by offering useful insights into their behaviour and performance.

If this sounds exciting to you, please do check out their official documentation, as we developer loves to do that ❤️. If you have any questions, suggestions or info needed, please do comment or reach out to me.

[Toy_Project](https://github.com/iamitprakash/Go-API-Backend-with-postgres) 
💡