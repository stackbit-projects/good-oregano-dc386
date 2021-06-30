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

*   **Evolution** - Survival of the fittest

*   **Combining Evolution with Neural Networks**

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

# What are Artificial Neural Networks?

They are computing systems vaguely inspired by the **biological neural networks** that constitute our brains. Such systems "learn" to perform tasks by considering **examples**, generally without being programmed with task-specific rules
For example, in image recognition(Image classifier), they might learn to identify images that contain cats by analyzing example images that have been manually labeled as "cat" or "no cat" and using the results to identify cats in other images

## The structure of Artificial Neural Networks

An ANN is based on a collection of connected units (nodes) called **artificial neurons**, which loosely model the neurons in a biological brain. Each connection, like the synapse in a biological brain, can transmit a “signal” to other neurons. An artificial neuron that receives a signal, processes it, and can signal neurons connected to it.

an artificial neural network:

![](/\_static/app-assets/images/512px-Multi-Layer_Neural_Network-Vector-Blank.svg.png)

Each synapse (connection) has a \*\*weight, \*\*that weight represents its relative importance.
Some neurons have a \*\*Bias \*\*value, which is a constant value we add to signals passing through it.
The value of each neuron is updated using something called an **Activation Function.**
This Activation function receives inputs and weights and passes on a value to the next neuron.

![](https://lh5.googleusercontent.com/zV269kpv4z8b4xFY5Gmfs9h5SGDR66dD7X3Bgus39OXUFjbW1fIOuLKBVDD0QvQPw8whMBEfvjyHhyyuR-00Wvd-dgYdzoW6-XFijk2dl5YiA\_1TavGtVy97x5u5xVuqXFWD4HACgXg)

## Activation Function

Without going into too much detail, the activation function of a \*\*node \*\*defines the output of that node given an input or set of inputs. So, in our case, the activation function receives the Neuron's data and decides what should be the “signal” to the Next layer. The last layer (output) passes the activation function's “signal” to the output.

the Hyperbolic tangent ([tanh](https://en.wikipedia.org/wiki/Hyperbolic_function#Hyperbolic_tangent)) activation function:

![](https://lh3.googleusercontent.com/gf4SvrmE-Vs\_6yOhlhDMv_Y7vvLgOv3lu5PO-e8IJLHQ5OIJ9EARt3CjYIG7Eo7SmJXi026mlmbzuq6KrgLI0w3LLdKin1wvGSEZGvQpRUHesHrmNpGyJip5vryWAfluQIAnxxiwcVY)

So, we now know what are Artificial Neural Networks, and we can talk a bit about Survival of the fittest and how it all connects.

# Evolution - Survival of the fittest

So, what is Survival of the fittest? in short, It is a phrase that originated from Darwinian evolutionary theory as a way of describing the mechanism of Natural Selection. Natural Selection is a key mechanism of evolution, it is the process where organisms with favorable **traits** are more likely to reproduce and flourish. In other words, the organisms with the best **Fitness**(the most fitted) are more likely to flourish.

for instance, a population of mice has moved into a new area, where the rocks are very dark. Due to natural genetic variation, some mice are black, while others are tan.
Tan mice are more visible to predatory birds than black mice. Thus, Tan mice are eaten at a higher frequency than black mice.  of course, only surviving mice reach reproducibility. Because black mice have a higher chance of surviving, the next generation contains **more** black mice than the previous generation, Thus examining the rule of **Survival of the fittest.**

***

# Combining Evolution with Neural Networks

So, what does Evolution have to do with Neural Networks? Well, as I said before, an ANN needs to learn in order to evolve. How does a neural network learn?
This is a big subject, so let's talk a bit about the "classic" way of neural network learning, and then talk about what I did here.

## How do Neural Networks learn?

So, one of the ways that neural networks learn, is by something called [Backpropagation](https://en.wikipedia.org/wiki/Backpropagation). It is short for "backward propagation of errors," which is an algorithm using [gradient descent](https://en.wikipedia.org/wiki/Gradient_descent). I won't get into too much detail, but in short, by using an error function (something like [mean squared error](https://en.wikipedia.org/wiki/Mean_squared_error)) we calculate the gradient of the **error** function(local minimum) with respect to the neural network's weights. We want to **minimize** that error, so the "backward" part of the name comes from the fact that the calculation of the gradient proceeds backward through the network, with the gradient of the final layer of weights being calculated first and the gradient of the first layer of weights being calculated last.

So, that's all good and well, but I "minimized" the error in a different way.

## How did my Neural Network learn?

Basically, my neural network’s learning process required me to “**evolve”** the network each time, in order to reach its full potential. I'll divide it to small steps, so it would be clear.

### Step 1

Create several ANNs with weights and biases, and choose their input at random, letting them compute whatever result.

![](https://lh3.googleusercontent.com/MuY8RrRp-DJLdvAJjtRfOtB1BkGLtPTXyOjdOCt5\_vkuzrRmYcOL-K-fWH3HN7h60Et2j2Bc2UZsOzKrMLUHV9Fc_td591PI8GWPaGri-VPi3FqZdlv4hgoWYjdp8TEha0YMR8FMwrM)

### Step 2

After they were all done computing their result, rank them, using a **fitness function**. The fitness dictated who was the “best” ANN out of all of those ANNs.

![](https://lh4.googleusercontent.com/ohOzJrcOzngLMghwLJAiVnwqDfXm80ZXpXjzh4hOIiJXffKwbepwusHOtaj21tx8PPiq-2p4dSPGMjXsKt8mNh_pOOjPeVvSwT5cOXK4ledc-KCmtfsC0gdpm7evLh6\_p60TlsjviLo)

The best one was the 95 score

![](/\_static/app-assets/images/3.PNG)

### Step 3

**Combine Evolution** - Since the ANN with a score of 95 was the best, I simply chose it as an example for the rest. I deleted half of the created ANN (those with the lowest score), and \*\*copied \*\*the best ANN, instead of the half I deleted.

![](/\_static/app-assets/images/4.PNG)

And now copy

![](/\_static/app-assets/images/5.PNG)



I “mutated” something in each of the new networks by a 10% chance. Meaning, that for each new network I copied, there was a slight chance of it being a bit “different” from the “father” it was copied from. The mutation only affected the weights and biases of each node.

After the copy and mutation, I gave them new random input and again chose the best. This process continues until I reach the most satisfying score/state. In the end, I simply take the best Neural Network.



# So, what’s that have to do with an AI that knows how to play games?

Join in for part II, and everything will be more clear.

That's it for today, thanks for reading this far!

Tzur
