---
title: 'Devlog #5 - Talent Tree!'
subtitle: >-
  We've added a cool new gameplay mechanic - A Talent Tree! This Tree unlocks
  new Doctor's guide pages, adds active skills such as Blood tests, Family
  history research, and some cool perks!
date: '2021-09-05'
content_img_alt: lorem-ipsum
excerpt: >-
  We've added a cool new gameplay mechanic - A Talent Tree! This Tree unlocks
  new Doctor's guide pages, adds active skills such as Blood tests, Family
  history research, and some cool perks!
seo:
  title: ''
  description: ''
  robots: []
  extra: []
category: diagnoseme_devlog
Sections: []
layout: post
thumb_img_path: /images/skill tree.PNG
content_img_path: /images/skill tree-9b9d306f.PNG
---
Talents! They provide such a fun game mechanic, we knew we just had to add them to our game!

In order to provide a sense of progression, we decided to add the **Skill Tree** feature to our game.

The reason is simple enough - A skill tree will not only give every run a unique experience, but it will also present fairly different gameplay in regards to the choices you make.

Currently, there are 3 main skill tree branches and another "Perks" branch. By choosing to specialize in the "Tests" branch, you will gain active skills you can use in each case, in order to get more information out of a patient. By choosing to unlock the "Specialization" branch or "Investigation" branch, you will receive a completely different set of skills - the "Specialization" branch will give you passive insight on cases related to the specialties you've unlocked, while "Investigation" will actually allow you to research into a patient's family history and much more stuff!

It's important to note that the skill tree UI is mostly in the alpha stage - meaning it will change and update to look a lot better. Right now, we're testing functionality and learning how to improves the gameplay.

By the time you collect 150 exp points, you've unlocked your first level of optional talents. Let's take a closer look at each of them and understand how will they help us diagnose better

![](/images/skill%20tree%20open.PNG)

## Testing branch - Blood Tests

**This skill's immediate effect will give you a new button in the patient's UI, and 2 new pages in the Doctor's Guide.**

This button will allow you to send a patient to some blood tests. When the results come back, you will be required to open up the Doctor's Guide and read up on the possible implications of the noted values, in order to understand what's going on and choose a good option for your patient.

The new UI button -

![](/images/blood%20tests%20ui-c48d6704.PNG)

After you click the new button, this is an example result -

![](/images/blood%20tests%20result.PNG)

We get a result! Now we need to understand the meaning!

We can open up the Doctor's Guide, and try and understand what type of result this is, and how does it affect us.

![](/images/blood_tests_guide-02e0b546.PNG)

Basically, the guide says that normal values of RBC (Red blood cell count) are between 4.5 to 5.3 pellets per microliter.

And the patient's value is **below** that scale - it's 4.3

Therefore, she should be admitted for further testing.

## Investigation Branch - Family History

The skill produces a UI button that allows you to run a quick family background check.

Two options are available - either the research yields results, or no meaningful results exist.

In this case, for example, the family history check returns no interesting results

![](/images/Family%20History1-0ca54118.PNG)

Or, there could be some results.

But notice that - not always will the family history research will be beneficial. Sometimes it could be just some information that doesn't actually relate to the case. You need to decide if it's meaningful enough or not.

![](/images/Family%20History2.PNG)

## Specialization Branch - Common Diseases

"Common Disease" is a passive ability, that automatically adds information on common diseases such as the flu.

For instance, in "obvious" cases for doctors who have this passive ability, you will have more information from the start.

![](/images/Common%20Diseases.PNG)

Here, you can see that since the player has unlocked this skill, he can now get an automated line each time a new patient comes, which explains that these symptoms look very familiar.



## Perks Branch

This branch is the most "experimental". We're not sure it will make it to the final version of the game, but it does present some interesting ideas. Since the game will be getting very hard on later levels, getting some talents that will make the game more forgiving.



The talents are pretty straightforward, hopefully, the alpha version will provide some basic gameplay options and you'll be able to get to know this new mechanic and give some feedback.

Anyway, this is it for now!

Your's truly - the GeekyOwls - Tzur & Nofar



