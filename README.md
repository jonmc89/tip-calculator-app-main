# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./Solution%20Screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/jonmc89/tip-calculator-app-main)
- Live Site URL: [Add live site URL here](https://jonmc89.github.io/tip-calculator-app-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript
- Mobile-first workflow

### What I learned

This was the my first attempt at capturing values from the input fields, whilst validating inputs for NaNs etc.

```js
billInput.addEventListener('input', () => {
  let billAmount = parseFloat(billInput.value);

  if (isNaN(billAmount)) {
    billValue = 0;
  } else {
    billValue = billAmount;
    getTipAmount(billValue, tipValue, peopleValue);
  }
});
```

Looping through a collection of elements was another new skill I have learned:

```js
tipBtns.forEach((button) => {
  button.addEventListener('click', () => {
    tipValue = parseFloat(button.value);
    getTipAmount(billValue, tipValue, peopleValue);
    console.log(tipValue);
  });
});
```

### AI Collaboration

I opted to use ChatGPT as a teacher for some of the concepts I was unfamiliar with, initial prompt stricly stated not to provide the answer at any point, responses must be in the form of a lesson.

## Author

- Website - [jonmckenziewebdev.co.uk](https://www.jonmckenziewebdev.co.uk)
- Frontend Mentor - [@jonmc89](https://www.frontendmentor.io/profile/jonmc89)
- GitHub - [@jonmc89](https://github.com/jonmc89)
