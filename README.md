# Strictly task & finance Manager

## Table of contents

- [General info](#general-info)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)

## General info

This project grew up pretty quickly from just another React learning process summary to a quite complex application, even though it doesn't connect with a database and storing it's state locally in web browser memory.

It allows users to take control of their finances with tracking every income and expense, as well as scheduling things to do or to remember about. Starting with 'funds' section, it's divided to two boards, let call it like that, with a couple of widgets containing numeric or graphical representation of different data, like current month cashflow, year averages and expenses pie chart. Next to these, of course page includes list of actual incomes or expenses, that gaves the user ability to sort those by value and date or deleting particular elements.

On the other hand, 'tasks' section offers the list of goals, divided into categories, with a functionality of sorting elements by priority level, having no category and no date. Interactive calendar on the right helps the user to locate tasks in time. Every element may be set as 'done', and these can be deleted as a whole.

Live demo: https://superb-madeleine-70fa75.netlify.app

## Screenshots

![Funds page view](./src/assets/view_funds.jpg)
![Tasks page view](./src/assets/view_tasks.jpg)

## Technologies

Project is created with:

- React 18 (hooks, context API, portals)
- ES6+ code standard
- CSS modules

The data is stored in localStorage, there're also pre-defined arrays of objects that are loaded the first time the page is opened on the device, so no need to add incomes, expenses and tasks by yourself.

## Setup

To run this project, clone repository and install it locally using npm or yarn:

```
$ npm install
$ npm start
```
