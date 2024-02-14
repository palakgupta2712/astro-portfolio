---
title: "SQL- Avoid the over-optimization pitfall."
pubDate: "2023-02-08"
description: "SQL- Avoid the over-optimization pitfall."
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQFQzoSJPMLgAw/article-cover_image-shrink_720_1280/0/1675809941764?e=1713398400&v=beta&t=xIrHsUSl2gH5eofyc43lTKIUXyU96mcEBnbLzz7njiI"
  alt: "The full Astro logo."
tags: ["astro", "blogging", "learning in public"]
---

<span style="color:orange">It may take hours (or days) of investigation and testing to fix poor queries and fix performance issues. By recognising typical design patterns that are symptomatic of SQL that performs badly, we may sometimes drastically reduce that time.</span>

By developing pattern recognition for these obvious eyesores, we may be able to zero in on the issue at hand right away. While gathering extended events, traces, execution plans, and statistics for performance optimization can frequently take hours, being able to spot possible issues early can eliminate all of that effort.

Knowing where to start can help you save a tonne of time, even if we should always do our research and demonstrate that any adjustments we make are the best!

### Let's Start.

1. Use regexp_like instead of LIKE clause.

```
SELECT * FROM
table_name
WHERE

lower(column1) LIKE '%somevalue1%' OR
lower(column2) LIKE '%somevalue2%'
-- tbc

--// We can re-phrase above query 

SELECT * FROM
table_name
WHERE
REGEXP_LIKE(lower(column1_value),'somevalue1|somevalue2')
```

2. Use regexp_extract instead of 'Case-when Like'.

```
SELECT 
CASE
WHEN concat(' ',value1,' ') LIKE '%somthg%' then 'something'
WHEN concat(' ',value2,' ') LIKE '%somthng2%' then 'something2'

AS some_alies
FROM some_list

--// We can re-phrase above query

SELECT
regexp_extract(values,('(value1|value2|value3)')
FROM some_list
```

3. Convert long list of IN into temp table.

```
SELECT * FROM table_name as t1 WHERE
some_id in (454654,5765768,876786,7896789,.......,769786)

--// can be re-phrased like

SELECT * FROM table_name as t1
JOIN (
SELECT some_id FROM ( SELECT split ('6587687,678667,57656,
67868,675576',',') as amit 
) CROSS JOIN
UNNEST(amit) as t(some_id)) as table_name1 as t2
ON
t1.some_id= t2.some_id
```

4. Join sequence from bigger to smaller table.

```
SELECT * FROM smaller_table 
JOIN
bigger_table
ON
smaller_table.id= bigger_table.id

--// can be re-phrased like

SELECt * FROM 
bigger_table
JOIN
smaller_table
ON
smaller_table.id= bigger_table.id
```

5. Use simple equi-joins.

Consider two tables with date string i.e. '2023-07-02', but one of the tables only has column for year, month and day value.

```
SELECT * FROM
table1 t1
JOIN (
SELECT column_1, CONCAT(t2.year,'-',t2.month,'-',t2.day) as date
from table2 t2
) new on t1.date= new.date
```

6. GROUP BY along with attribute/column with the largest number of unique entities/values.

```
SELECT
column_1
column_1_sub
table1_id
sum(column_3)
FROM table1
GROUP BY
table1_id, column_1_sub, column1
```

7. Avoid sub-queries in WHERE clause.

```
with t2 as (
SELECT table2_id from table2 
)
SELECT sum(column_name) from table1 as t1
JOIN
t2 ON
t1.table1_id=t2.table2_id
```

8. MAX over Rank.

```
SELECT table1_id, max(some_date) FROM table1 GROUP BY 1
```

9. some bonus point.

1. use approx_distinct() instead if count(distinct) for large dataset
2. Use approx_percentile(metric,0.5) for median
3. Avoid UNION as max you can
4. Use WITH instead of nested sub-queries

Thats' the wrap now buddy..... 💡