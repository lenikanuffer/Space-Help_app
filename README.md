# Space Help concept

Decluttering can be an overwhelming process, especially for people who own too many things or struggle with their mental health.
Being one of those people, I have spent hours trying to find methods that allow me to clean my home sustainably, creating new habits and letting go of the idea of perfection that many decluttering celebrities promote.

In this context, I crossed an inspiring video based on the _'30 day minimalism challenge'_, modified to be less overwhelming.
In these videos, the main idea is to eliminate items you own in 30 days, in which each day is a challenge with a number of items to remove (as well, from 1 to 30). The only difference is the order in which you complete those challenges.

Based on these ideas, I created a single-page application that allows users to divide their decluttering process while tracking their progress. My version of the challenge counts of 15 days which can be completed in any order, encouraging users to find what works best for them.

I aim to make the process fun with a game-like interface that plays with the idea of space (as in having more space after decluttering), and the space in the galaxy. For this reason, all illustrations are related to such topics, with meteors, aliens, satellites, and rockets.

This project is designed for all people who need a little support and motivation to declutter. It aims to help divide the task into smaller parts, while showing the user their global results.

---

## Technologies used in this project

- Vite
- React
- JavaScript
- Html
- Css
- Tailwind

Design

- Figma
- Adobe Photoshop

---

## About this version

In this first version, the user accesses directly into the **Welcome component**, where there are 15 challenges to select. The **Challenge component** renders an equal number of items to be removed as shown on the **Welcome component**. All items are rendered in an _initial state_ showing an icon, representing a _meteor_. By clicking, the user can change the state of the item to _'recycle', 'donate'_ or _'sell'_, displaying different icons for each state.

The states are saved on the local storage, and accessed by different components to render specific results. In the **Challenge component**, a counter renders all the items in state _initial_, showing the user the items to be eliminated. When this counter is **0**, the status of the _challenge icon_ displayed in the **Welcome component** changes to _complete_, rendering a new icon.

In the **Welcome component** as well as in the **Progress component**, the stored status of the single items is fetched from the local storage to display several progress bars, allowing the user to know the total of days completed, the items eliminated, and the percentage of items recycled, donated or for sale.

### Future developments

**User login:** In the future, I would like to develop the possibility to log in and out, storing the user information with the possibility for them to access from different devices.

**Modes:** In this first version, the user decides freely which challenge to select. Future development will implement a Welcome component with different modes: in _crescent_ order, _decreasing_ order, and _random_.

**Design:** In this version, the user needs to read the instructions to understand how to use the app. This will be improved by creating a more intuitive design that guides the user more interactively.

**Other features:** I would like to add the possibility of using a timer, more information, and better tips to declutter and maintain organised spaces (related to mental health, and environmental impact, for example). Other features are the possibility to share the result with others, challenge other users, and create achievements.
