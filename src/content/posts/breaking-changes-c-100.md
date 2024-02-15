---
title: "Breaking Changes in C# 10.0"
pubDate: "2023-07-14"
description: "Breaking Changes in C# 10.0"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQE1nKev4DrTBw/article-cover_image-shrink_720_1280/0/1689322537089?e=1713398400&v=beta&t=tGF_cmQg5Dglp5wKBh8Y2f2ereQLVXwD6STH5sbTNGg"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">Everyone is/was really excited about the C# 10.0 version, and I've seen a lot of articles and blogs about it, but nearly no one is talking about the breaking changes that come with the C# 10.0 version.</span>

Let us look at a few of the more crucial ones.

1. *null* suppression operator is no longer allowed in patterns.

```
void M(object o
{
    if (o is null!) {} // error
})
```

2. lambda expressions and method groups with inferred type are implicitly convertible to System.MulticastDelegate, and bases classes and interfaces of System.MulticastDelegate including object, and lambda expressions and method groups are implicitly convertible to System.Linq.Expressions.Expression and System.Linq.Expressions.LambdaExpression. These are function_type_conversions.

The new implicit conversions may change overload resolution in cases where the compiler searches iteratively for overloads and stops at the first type or namespace scope containing any applicable overloads.

### Instance and extension methods.

```
class 
{
    static void Main()
    {
        var c = new C();
        c.M(Main);      // C#9: E.M(); C#10: C.M()
        c.M(() => { }); // C#9: E.M(); C#10: C.M()
    }

    void M(System.Delegate d) { }
}

static class E
{
    public static void M(this object x, System.Action y) { }
}
```

### Base and derived methods.

```
using System
using System.Linq.Expressions;


class A
{
    public void M(Func<int> f) { }
    public object this[Func<int> f] => null;
    public static A operator+(A a, Func<int> f) => a;
}


class B : A
{
    public void M(Expression e) { }
    public object this[Delegate d] => null;
    public static B operator+(B b, Delegate d) => b;
}


class Program
{
    static int F() => 1;


    static void Main()
    {
        var b = new B();
        b.M(() => 1);   // C#9: A.M(); C#10: B.M()
        _ = b[() => 2]; // C#9: A.this[]; C#10: B.this[]
        _ = b + F;      // C#9: A.operator+(); C#10: B.operator+()
    }
};
```

### Method group or anonymous method conversion to Expression or LambdaExpression.

```
using System
using System.Linq.Expressions;


var c = new C();
c.M(F);                         // error CS0428: Cannot convert method group 'F' to non-delegate type 'Expression'
c.M(delegate () { return 1; }); // error CS1946: An anonymous method expression cannot be converted to an expression tree


static int F() => 0;


class C
{
    public void M(Expression e) { }
}


static class E
{
    public static void M(this object o, Func<int> a) { }
};
```

### A lambda expression with inferred type may contribute an argument type that affects overload resolution.

```
using System


class Program
{
    static void F(Func<Func<object>> f, int i) { }
    static void F(Func<Func<int>> f, object o) { }


    static void Main()
    {
        F(() => () => 1, 2); // C#9: F(Func<Func<object>>, int); C#10: ambiguous
    }
};
```

### In Visual Studio 17.0.7, an error is reported in a record struct with a primary constructor if an explicit constructor has a this() initializer that invokes the implicit parameterless constructor. See roslyn#58339.

```
record struct R(int X, int Y
{
    // error CS8982: A constructor declared in a 'record struct' with parameter list must have a 'this'
    // initializer that calls the primary constructor or an explicitly declared constructor.
    public R(int x) : this() { X = x; Y = 0; }
})
```

The error could be resolved by invoking the primary constructor (as below) from the this() initializer, or by declaring a parameterless constructor that invokes the primary constructor

```
record struct R(int X, int Y
{
    public R(int x) : this(x, 0) { } // ok
})
```

### In Visual Studio 17.0.7, if a struct type declaration with no constructors includes initializers for some but not all fields, the compiler will report an error that all fields must be assigned.


Earlier builds of 17.0 skipped definite assignment analysis for the parameterless constructor synthesized by the compiler in this scenario and did not report unassigned fields, potentially resulting in instances with uninitialized fields. The updated analysis and error reporting is consistent with explicitly declared constructors. See roslyn#57925.

For instance, the following results in an error:

```
struct S // error CS0171: Field 'S.Y' must be fully assigned before control is returned to the calle
{
    int X = 1;
    int Y;
}
```

o resolve the errors, declare a parameterless constructor and assign the fields that do not have initializers, or remove the existing field initializers so the compiler does not synthesize a parameterless constructor. (For compatibility with Visual Studio 17.1 which requires a struct with field initializers to include an explicitly declared constructor, avoid adding initializers to the remaining fields without also declaring a constructor.)

For instance, the error in the example above can be resolved by adding a constructor and assigning Y:

```
struct 
{
    int X = 1;
    int Y;
    public S() { Y = 0; } // ok
}
```

*Note*: Reference has been taken from official Microsoft lean site.

