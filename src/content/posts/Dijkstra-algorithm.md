---
title: "Dijkstra Algorithm"
pubDate: "2023-10-14"
description: "Dijkstra's algorithm is a game-changer in the world of data structures and algorithms (DSA). It's a greedy algorithm that helps in finding.."
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQFPF-lcWBDlEg/article-cover_image-shrink_720_1280/0/1697245172672?e=1713398400&v=beta&t=D0K4a_LgCE39d2kBbmBIqNCxKE3GeDq8ktbfFhfBz4c"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">Dijkstra's algorithm is a greedy algorithm for finding the shortest path from a single source node to all other nodes in a weighted graph. It is one of the most important algorithms in data structures and algorithms (DSA), and has many applications in real-world problems.</span>

Dijkstra's algorithm works by maintaining a set of visited nodes and a set of unvisited nodes. It starts at the source node and iteratively selects the unvisited node with the smallest tentative distance from the source. It then visits the neighbors of this node and updates their tentative distances if a shorter path is found.

The algorithm terminates when all nodes have been visited. The tentative distance of each node at the end of the algorithm is the shortest distance from the source node to that node.

Let's implement this in Golang

```

package main

import (
    "container/heap"
    "fmt"
)

type node struct {
    id int
    distance int
}

type queue []*node

func (q queue) Len() int { return len(q) }
func (q queue) Less(i, j int) bool { return q[i].distance < q[j].distance }
func (q queue) Swap(i, j int) { q[i], q[j] = q[j], q[i] }

func (q *queue) Push(x interface{}) {
    *q = append(*q, x.(*node))
    heap.Fix(q, len(*q)-1)
}

func (q *queue) Pop() interface{} {
    n := heap.Pop(q).(*node)
    return n
}

func dijkstra(graph map[int][]int, source int) map[int]int {
    distances := make(map[int]int)
    for node := range graph {
        distances[node] = infinity
    }
    distances[source] = 0

    queue := make(queue, 0)
    heap.Init(&queue)
    queue.Push(&node{id: source, distance: 0})

    while len(queue) > 0 {
        currentNode := queue.Pop().(*node)
        if distances[currentNode.id] < currentNode.distance {
            continue
        }

        for neighbor := range graph[currentNode.id] {
            distance := distances[currentNode.id] + 1
            if distance < distances[neighbor] {
                distances[neighbor] = distance
                queue.Push(&node{id: neighbor, distance: distance})
            }
        }
    }

    return distances
}

func main() {
    graph := map[int][]int{
        0: {1, 2},
        1: {3},
        2: {4},
        3: {4},
    }

    distances := dijkstra(graph, 0)

    for node, distance := range distances {
        fmt.Printf("The shortest distance from the source node to node %d is %d\n", node, distance)
    }
} 

```


**Note**: This implementation uses a priority queue to store the nodes that need to be visited. The priority queue is sorted based on the distance of each node from the source node. At each step of the algorithm, the node with the shortest distance is removed from the queue and visited. The neighbors of the visited node are then added to the queue, and their distances from the source node are updated if necessary.

The algorithm terminates when all nodes have been visited. At this point, the distance of each node from the source node is the shortest distance from the source node to that node.

Let's implement in C#

```

using System;
using System.Collections.Generic;

public class Dijkstra
{
    public static Dictionary<T, int> FindShortestPaths<T>(Graph<T> graph, T source)
    {
        var distances = new Dictionary<T, int>();
        var visited = new HashSet<T>();
        var queue = new PriorityQueue<T, int>();

        distances[source] = 0;
        queue.Enqueue(source, 0);

        while (queue.Count > 0)
        {
            var node = queue.Dequeue();
            if (visited.Contains(node))
            {
                continue;
            }

            visited.Add(node);

            foreach (var neighbor in graph.GetNeighbors(node))
            {
                int distance = distances[node] + graph.GetEdgeWeight(node, neighbor);
                if (!distances.ContainsKey(neighbor) || distance < distances[neighbor])
                {
                    distances[neighbor] = distance;
                    queue.Enqueue(neighbor, distance);
                }
            }
        }

        return distances;
    }
}

public class Graph<T>
{
    private readonly Dictionary<T, List<Edge<T>>> _adjacencyList;

    public Graph()
    {
        _adjacencyList = new Dictionary<T, List<Edge<T>>>();
    }

    public void AddEdge(T source, T destination, int weight)
    {
        if (!_adjacencyList.ContainsKey(source))
        {
            _adjacencyList.Add(source, new List<Edge<T>>());
        }

        _adjacencyList[source].Add(new Edge<T>(destination, weight));
    }

    public IEnumerable<T> GetNeighbors(T node)
    {
        if (!_adjacencyList.ContainsKey(node))
        {
            return new List<T>();
        }

        return _adjacencyList[node].Select(edge => edge.Destination);
    }

    public int GetEdgeWeight(T source, T destination)
    {
        if (!_adjacencyList.ContainsKey(source))
        {
            return int.MaxValue;
        }

        var edge = _adjacencyList[source].Find(edge => edge.Destination == destination);
        if (edge == null)
        {
            return int.MaxValue;
        }

        return edge.Weight;
    }
}

public class Edge<T>
{
    public T Destination { get; }
    public int Weight { get; }

    public Edge(T destination, int weight)
    {
        Destination = destination;
        Weight = weight;
    }
}

// Here is an example of how to use the Dijkstra class:

var graph = new Graph<int>();

graph.AddEdge(0, 1, 10);
graph.AddEdge(0, 2, 5);
graph.AddEdge(1, 3, 2);
graph.AddEdge(2, 4, 1);

var distances = Dijkstra.FindShortestPaths(graph, 0);

Console.WriteLine("The shortest distance from the source node to node 1 is {0}", distances[1]);
Console.WriteLine("The shortest distance from the source node to node 2 is {0}", distances[2]);
Console.WriteLine("The shortest distance from the source node to node 3 is {0}", distances[3]);
Console.WriteLine("The shortest distance from the source node to node 4 is {0}", distances[4]); 

```

**Note**: to use the Dijkstra class, you first need to create a Graph<T> object to represent your graph. Then, you can add edges to the graph using the AddEdge() method.

To find the shortest paths from a source node to all other nodes in the graph, you can use the FindShortestPaths() method. The FindShortestPaths() method returns a dictionary that maps each node in the graph to the shortest distance from the source node to that node.

Dijkstra's algorithm is a very efficient algorithm for finding the shortest path in a weighted graph. It has a time complexity of O(V + E log V), where V is the number of nodes and E is the number of edges in the graph.

Here are some examples of how Dijkstra's algorithm can be used in real-world problems:
1. Finding the shortest route between two cities on a map
2. Finding the fastest route between two computers on a network
3. Finding the most efficient way to schedule tasks
4. Finding the best way to allocate resources

Dijkstra's algorithm is a powerful and versatile algorithm that is essential for any data structures and algorithms student to know.💡