---
title: How I've built an AI that knows how to play games - Part I
subtitle: Using Neural Networks and a Genetic Algorithm
date: '2021-06-20'
thumb_img_alt: AI
content_img_alt: lorem-ipsum
excerpt: Using Neural Networks and a Genetic Algorithm
seo:
  title: ''
  description: ''
  robots: []
  extra: []
  type: stackbit_page_meta
category: devlog
layout: post
thumb_img_path: /images/Capture.PNG
content_img_path: /images/2.PNG
---
### In case you don't want to read a post, there's also a Youtube [video](https://youtu.be/GycM61m3Em4)

A few months ago, I've started working on a simple game. I didn't want to play this game, but I wanted to build an AI that will learn how to play this game, and finish it (as well as other levels)

I sat down and started reading up on Neural Networks and their usage in machine learning problems, watched some videos for inspiration, and read some interesting books and posts about this subject. I'll link some resources at the end of this series, so sit tight, and enjoy!

# Basic stuff to know

Before we dive in - a short agenda for the next few posts on this subject, so this entire series of posts will be divided into several parts.

*   **What is machine learning** - I won't get into too much detail, just enough so you'll have the basic knowledge of what is going on

*   **What are Neural Networks**

*   **Evolution** - the connection to the ML learning process

*   **My AI's basic idea**

*   **The learning process**

*   **The final Neural Network**

***

# What is machine learning?

In short, Machine learning (ML) is the study of computer algorithms that improve automatically through experience, without being explicitly programmed. The process of learning begins with observations or data, such as examples, **direct experience**, or instruction, in order to look for **patterns** in the data and make better decisions in the future.

The primary aim is to allow a "machine" to **learn automatically** without human intervention or assistance and adjust actions accordingly.

So, how does one achieves this learning process?
using various ML algorithms. There are a lot, but here are a few:

*   [KNN ](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm)- K nearest neighbors

*   [Support Vector Machine](https://en.wikipedia.org/wiki/Support-vector_machine)

*   [Logistic Regression](https://en.wikipedia.org/wiki/Logistic_regression)

*   [**Artificial Neural Networks**](https://en.wikipedia.org/wiki/Artificial_neural_network) 

and many more.

So, now that we know a bit about what is machine learning (and if not, there is a ton of knowledge online) - I prefer not to get into too much theory and practice behind it, I just want you to have a sense of what I did here.  
So, what did I do? I created a "machine"(let's call it... a Brain?) that knows how to perform some tasks, by learning from direct experience.

# What are Neural Networks&#xA;&#xA;
