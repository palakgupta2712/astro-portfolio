---
title: "Error Handling in GO"
pubDate: "2023-09-22"
description: "Error Handling in GO"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQE4ok1I5DsG9w/article-cover_image-shrink_720_1280/0/1695328042179?e=1713398400&v=beta&t=gTGRzxR7nuybv3_GM_iF3TFZirzu2E9gbahKkmXleBk"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">It is the caller's duty to check any errors returned by a function call and take the necessary action. There may be several options, depending on the circumstances. Here are a few real-world instances. </span>

First and most common Propagate the error:- In order for the calling routine to fail if a subroutine fails. FindLinks immediately sends the HTTP error to the caller if the call to http.Get fails: 

```
response, err := http.Get(url)
if err != nil {
return nil, err
}
```
Unlike the example above, let's focus on another example below, if the call to html.Parse fails, findLinks does not directly provide the HTML parser's error because it is missing two essential pieces of information: the fact that the issue happened in the parser and the URL of the page that was being parsed. In this situation, findLinks creates a new error message that contains both pieces of information in addition to the underlying parsing issue:

```
doc, err := html.Parse(resp.Body)
resp.Body.Close()
if err != nil {
return nil, fmt.Errorf("parsing %s as HTML: %v", url, err)
}
```

The fmt.Errorf function uses fmt.Sprintf to format an error message and returns a new error value. By successfully prefixing extra context information to the initial error message, we leverage it to create detailed errors. Let's take a look at one of the NASA accident investigations. When the issue is ultimately addressed by the program's main function, it should show a clear causal path from the core problem to overall failure.

```
genesis: crashed: no parachutes: G-switch failed: bad relay orientation 
```

The capitalization of message strings and the usage of newlines should be avoided because error messages are commonly chained together. When detected by tools like grep, the resulting errors may be overly lengthy but they will be self-contained.

Be deliberate when creating error messages, ensuring that each one is a meaningful description of the issue with enough pertinent information. Also, be consistent, ensuring that errors returned by the same function or by a group of functions in the same package are similar in form and can be handled similarly. 

For instance, the os package ensures that every error returned by a file operation, such as os.Open or the Read, Write, or Close methods of an open file, described not only the nature of the failure (permission denied, no such directory, and so on), but also the name of the file, so the caller need not include this information in the error message it constructs.

Generally speaking, the call f(x) is in charge of reporting the attempted operation f and the argument value x in relation to the error's context. For example, the URL in the call to html.parse in the previous example, which the caller possesses but the call f(x) does not, must be added by the caller.

Let's see the particle example of another famous error handling that represent transient or unpredictable problems, it may make sense to retry the failed operations, possibly with a delay between re-tries and perhaps with a limit on the number of attempts or the time spent trying before giving up entirely.

Let's see in action...

```
// WaitForServer attempts to contact the server of a URl
// It tries for one minute using using exponential back-off.
// It reports an error if all attempts fail

func WaitForServer(url string) error{
const timeout = 1* time.Minute
deadline := time.Now().Add(timeout)
for tries := 0; time.Now().Before(deadline); tries++ {
_, err := http.Head(url)
if err == nil {
return nil
}
log.Printf("Server not responding (%s); retrying...", err)
time.Sleep(time.Second << uint(tries)) //exponential back-off 
}
return fmt.Error("Server %s failed to responf=d after %s", url, timeout)
}
```

What if the progress is impossible, the caller can print the error and stop program gracefully, but this course of action should generally be reserved for the main package of a program. Library function should usually propagate errors to the caller, unless the error is a sign of an internal inconsistency- that is, a bug.

```
// (In function main.)
if err := WaitForServer(url); err != nil {
fmt.Fprint(os.Stderr, "Site is down: "%v\n", err)
os.Exit(1)
}
```

A more convenient way to achieve the same effect is to call log.Fatalf. As with all the the log functions, by default it prefixes the time and date to the error message.

```
if err := WaitForServer(url; err != nil {
log.Fatalf("Site is down: %v\n", err)
})

```

The default format is helpful in a long-running server, but less so for an interactive tool:

```
2006/01/02 15:04:05 Site is down: no such domain: linkedin.com

```
For a more interactive output, we can set the prefix used by the log package to the name of the command and suppress the display of the date and time:

```
log.SetPrefix("wait: ")
log.SetFlags(0)

```

Another interesting case is, it's sufficient just to log the error and then continue, perhaps with reduce functionality. Again there's a choice between using the log package, which adds the useful prefix:

```
if err := Ping(); err != nil {
log.Printf("ping failed: %v; networking disabled:, err)
}
// and printing directly to the standing error stream:

if err := Ping(); err != nil {
fmt.Fprintf(os.Stdeer, "ping failed: %v; networking disabled\n",err)
}
```
And the last one, this is rarer case when we can safely ignore an error and go ahead.

```
dir, err := ioutil.TempDir("", "scratch")
if err != nil {
return fmt.Error("failed to create temp dir: %v", err)
}

os.RemoveAll(dir)

```

The call to os.RemoveAll may fail, but the program ignores it because the operating system periodically cleans out the temporary directory. In this case, discarding the error was intentional, but the program logic would be the same had we forgotten to deal with it. Get into the habit of considering errors after every function call, and when you deliberately ignore one, document your intention clearly. 

In Go, handling errors follows a specific pattern. Success is typically addressed before failure after an error has been checked. The logic for success is not indented within an else block but rather follows at the outer level if failure results in the function returning. Functions often have a similar form, with a number of initial tests to weed out errors and the function's actual content at the end, lightly indented. 💡