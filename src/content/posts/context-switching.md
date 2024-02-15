---
title: "Context Switching"
pubDate: "2023-08-19"
description: "Context Switching"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQENFwQTyor9FA/article-cover_image-shrink_720_1280/0/1692099469598?e=1713398400&v=beta&t=nQk4LT5dNdwc4GG7250-rKJjz6VElkMcm_cAmHeNwws"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">Context switching</span> is a technique used by the operating system to transition processes from one state to another for the purpose of executing its function using the CPU's present in the system. When the system switches, the former running process's status is saved in registers, and the CPU is assigned to a new process for task execution. While new processes are operating in a system, the ones that came before them must wait in the ready queue. The execution of the old process begins at the point where another process happens to stop it. This is the actual behaviour of a multitasking operating system in which many processes use a common CPU to execute various tasks without the need for additional resources from the available computer.

### And Why this is Required...?

In the era of multiprocessing system to context switching allows all processes to share a single CPU in order to complete the execution and save the state of the system's duties. When a process reloads in a system, its execution starts at the point where there is a conflict.

1. The system does not explicitly provide transitioning from one process to another. Context switching allows an operating system to move between different processes in order to leverage the CPU's resources for task completion and context storage. A process's service can be resumed later at the same place. If we do not save the data or context of the presently operating process, we risk losing this information while switching between the given processes.

2. If a high-priority process is in a ready queue, the process that is presently executing will be shut down/stopped to allow a high-priority process to complete its tasks in a system.

3. If a running process requires different I/O resources in a system, another process will switch the current process if it needs the CPU. When it meets the I/O requirements, the prior process enters a ready state and waits for CPU execution. Context switching aids in storing the status of a process in order to continue duties in an operating system. Otherwise, the process must restart execution from the beginning.
4. When an interrupt occurs while a process is running in an operating system, the status of the process is preserved as registers utilising context switching. After the interruptions are resolved, the process will transition from a wait to a ready state, allowing it to continue execution at the same time where the OS interrupt occurs.

How the system understand when to trigger this switching option..?

The answer is it depends, It depends on variety of factors like.

1. The priority of the processes: The operating system will typically give higher priority to processes that are waiting for I/O, as these processes are not using the CPU and can be switched out without causing any performance degradation.

2. The time that a process has been running: The operating system may also preempt a process if it has been running for a certain amount of time, even if it has a high priority. This is to prevent any one process from monopolizing the CPU.

3. The resources that a process is using: The operating system may also preempt a process if it is using a lot of CPU resources, such as memory or I/O bandwidth. This is to prevent any one process from starving other processes of resources.

4. The type of context switch: Voluntary context switches are typically triggered by the process itself, when it decides to give up the CPU. Involuntary context switches are typically triggered by the operating system, when it decides to preempt a process.

The specific factors that the system uses to determine when to trigger a context switch will vary depending on the operating system and the hardware platform. However, the general principles outlined above are typically used.

Here are some additional details about the different types of context switches:

1. Voluntary context switching: This type of context switch is typically triggered by the process itself, when it decides to give up the CPU. This can happen for a variety of reasons, such as when the process is waiting for an I/O operation to complete or when it has reached a point in its execution where it does not need the CPU for a while.

2. Involuntary context switching: This type of context switch is typically triggered by the operating system, when it decides to preempt a process. This can happen for a variety of reasons, such as when the process has been running for a certain amount of time, when it is using a lot of CPU resources, or when a higher priority process is ready to run.

Let's understand context switching with a very simple diagram.

![image](https://media.licdn.com/dms/image/D5612AQGlqd7Ei7wU5w/article-inline_image-shrink_1000_1488/0/1692099149900?e=1713398400&v=beta&t=eOGwVCL18MXNr2VVIVFf746UQNQ9OSlN-dMRJl_QaI8)

Before going further let's understand the PCB, this is important one to dig deeper.

PCB (Process Control Block) is a data structure that stores all the information about a process that is needed by the operating system to manage the process. This information includes:

1. The process ID (PID): A unique identifier for the process.
2. The process state: The current state of the process, such as running, waiting, or terminated.
3. The program counter: The address of the next instruction that the process should execute.
4. The registers: The values of the CPU registers that are used by the process.
5. The memory: The memory that is currently being used by the process.
6. The file descriptors: The open files that are associated with the process.
7. The priority: The priority of the process.

## Let's look at very interesting facts about the PCB:
1. The PCB is typically stored in memory.
2. The PCB is created when a process is created and destroyed when a process is terminated.
3. The operating system maintains a queue of PCBs, with each PCB representing a process that is ready to run.
4. When a context switch occurs, the operating system selects the next process to run from the queue of PCBs.
5. The operating system saves the state of the current process in its PCB and then loads the state of the new process from its PCB.
6. The operating system resumes execution of the new process.

At the end PCB is a complex and important data structure that is essential for the efficient operation of multitasking operating systems.


When a context switch occurs, the operating system saves the state of the current process in its PCB. The operating system then loads the state of the new process from its PCB and resumes execution of the new process.

Last but not the least Context switching is a complex and important part of multitasking operating systems. It allows multiple processes to share the CPU and prevents any one process from monopolizing the system. However, it is also a relatively expensive operation, so it is important to use it judiciously. 💡
