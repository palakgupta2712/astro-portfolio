---
title: "Mediator in C#"
pubDate: "2024-01-13"
description: "Mediator in C#"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQGJM8WzCr7Fdg/article-cover_image-shrink_720_1280/0/1705136015310?e=1710979200&v=beta&t=ncMvOLNk0LjSh4sz-VPxBJwwzguQu_5v6DkmC3yqM6U"
  alt: "The full Astro logo."
tags: ["astro", "blogging", "learning in public"]
---

<span style="color:orange">For a while think about a bustling marketplace, brimming with vendors hawking their wares. To get what you need, you have to weave through the throng, shouting your requests to each booth. It's loud, confusing, and frankly, not very efficient. Now picture this: a central plaza with a town crier. You simply tell the crier what you're looking for, and they relay it to everyone. Order emerges from chaos, and you leave with your prize much faster.</span>

That's the magic of the Mediator pattern in software development. This is a behavioural design pattern that lowers dependency between programme components by having them communicate indirectly via a particular mediator object. Individual components can be easily modified, extended, and reused thanks to the Mediator, which eliminates their reliance on dozens of other classes.

Just like the town crier, the mediator acts as a central hub for communication between objects. No longer do they need to shout directly at each other, creating a tangle of dependencies and complexity. Instead, they whisper their needs to the mediator, who then sorts it all out and ensures everyone gets what they need.

This makes code cleaner, more maintainable, and less prone to errors. If the rules of communication change, you only need to adjust the mediator, not every single connected object. It's like changing the town crier's script instead of rewriting all the vendor dialogues.

Here's how the mediator works in a common example: a chat application. Imagine several users online, typing away furiously. Without a mediator, user A would need to know about user B, C, and everyone else to send messages. This tangled web of dependencies grows quickly as more users join, making the code brittle and hard to manage.

Enter the chatroom mediator! Users talk to the mediator, who figures out who needs to hear what. If Alice sends a message, the mediator broadcasts it to everyone else in the room. No need for Alice to know or care about how many people are listening. The mediator handles the delivery, like a digital postman.

### UML DESIGN

![image](https://github.com/iamitprakash/astro-portfolio/assets/34869115/ce913b09-3ea4-4334-83db-b99f549867ef)

```
interface IChatRoomMediator
{
  void Send(string message, Participant participant);
}

class ChatRoomMediator : IChatRoomMediator
{
  private List<Participant> participants = new List<Participant>();

  public void AddParticipant(Participant participant)
  {
      participants.Add(participant);
  }

  public void Send(string message, Participant sender)
  {
      foreach (Participant participant in participants)
      {
          if (participant != sender)
          {
              participant.Receive(message);
          }
      }
  }
}

abstract class Participant
{
  protected IChatRoomMediator mediator;

  public Participant(IChatRoomMediator mediator)
  {
      this.mediator = mediator;
  }

  public abstract void Send(string message);
  public abstract void Receive(string message);
}

class ConcreteParticipantA : Participant
{
  public ConcreteParticipantA(IChatRoomMediator mediator) : base(mediator)
  {
  }

  public override void Send(string message)
  {
      Console.WriteLine($"{this.GetType().Name}: Sending message: {message}");
      mediator.Send(message, this);
  }

  public override void Receive(string message)
  {
      Console.WriteLine($"{this.GetType().Name}: Received message: {message}");
  }
}

// Similar implementation for ConcreteParticipantB
```

## Real World example (chat room use case)

Let's implement a Mediator pattern facilitating loosely coupled communication between different Participants registering with a Chatroom. The Chatroom is the central hub through which all communication takes place. At this point only one-to-one communication is implemented in the Chatroom, but would be trivial to change to one-to-many.

```
using System;
using System.Collections.Generic;

namespace Mediator.RealWorld
{
    /// <summary>
    /// Mediator Design Pattern
    /// </summary>

    public class Program
    {
        public static void Main(string[] args)
        {
            // Create chatroom

            Chatroom chatroom = new Chatroom();

            // Create participants and register them

            Participant George = new Beatle("George");
            Participant Paul = new Beatle("Paul");
            Participant Ringo = new Beatle("Ringo");
            Participant John = new Beatle("John");
            Participant Yoko = new NonBeatle("Yoko");

            chatroom.Register(George);
            chatroom.Register(Paul);
            chatroom.Register(Ringo);
            chatroom.Register(John);
            chatroom.Register(Yoko);

            // Chatting participants

            Yoko.Send("John", "Hi John!");
            Paul.Send("Ringo", "All you need is love");
            Ringo.Send("George", "My sweet Lord");
            Paul.Send("John", "Can't buy me love");
            John.Send("Yoko", "My sweet love");

            // Wait for user

            Console.ReadKey();
        }
    }

    /// <summary>
    /// The 'Mediator' abstract class
    /// </summary>

    public abstract class AbstractChatroom
    {
        public abstract void Register(Participant participant);
        public abstract void Send(
            string from, string to, string message);
    }

    /// <summary>
    /// The 'ConcreteMediator' class
    /// </summary>

    public class Chatroom : AbstractChatroom
    {
        private Dictionary<string, Participant> participants = new Dictionary<string, Participant>();

        public override void Register(Participant participant)
        {
            if (!participants.ContainsValue(participant))
            {
                participants[participant.Name] = participant;
            }

            participant.Chatroom = this;
        }

        public override void Send(string from, string to, string message)
        {
            Participant participant = participants[to];

            if (participant != null)
            {
                participant.Receive(from, message);
            }
        }
    }

    /// <summary>
    /// The 'AbstractColleague' class
    /// </summary>

    public class Participant
    {
        Chatroom chatroom;
        string name;

        // Constructor

        public Participant(string name)
        {
            this.name = name;
        }

        // Gets participant name

        public string Name
        {
            get { return name; }
        }

        // Gets chatroom

        public Chatroom Chatroom
        {
            set { chatroom = value; }
            get { return chatroom; }
        }

        // Sends message to given participant

        public void Send(string to, string message)
        {
            chatroom.Send(name, to, message);
        }

        // Receives message from given participant

        public virtual void Receive(
            string from, string message)
        {
            Console.WriteLine("{0} to {1}: '{2}'",
                from, Name, message);
        }
    }

    /// <summary>
    /// A 'ConcreteColleague' class
    /// </summary>

    public class Beatle : Participant
    {
        // Constructor

        public Beatle(string name)
            : base(name)
        {
        }

        public override void Receive(string from, string message)
        {
            Console.Write("To a Beatle: ");
            base.Receive(from, message);
        }
    }

    /// <summary>
    /// A 'ConcreteColleague' class
    /// </summary>

    public class NonBeatle : Participant
    {
        // Constructor
        public NonBeatle(string name)
            : base(name)
        {
        }

        public override void Receive(string from, string message)
        {
            Console.Write("To a non-Beatle: ");
            base.Receive(from, message);
        }
    }
}
```

## Key takeaway:

Benefits:

1. **Reduced coupling**: Objects don't need to know about each other's internal details.
2. **Enhanced maintainability**: Changes to interactions can be made in the mediator without affecting colleagues.
3. **Centralized control**: Logic for complex interactions is consolidated in the mediator.
4. \*\*Reusability: Colleagues can be reused independently in different contexts.

## Common Use Cases:

1. GUI components (buttons, menus, windows)
2. Chat applications
3. Game event systems
4. Air traffic control systems
5. Multi-threaded applications

## Considerations:

1. Mediator can become a central point of complexity.
2. Overuse can lead to a God object anti-pattern.
3. Use judiciously when benefits outweigh potential drawbacks. 💡