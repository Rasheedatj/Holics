# Payload UI

Thia is a collaboration with a designer to bring his design to life

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

Payload UI is a brand that allow flexible payment wherever you are around the globe

## The challenge

Users should be able to
- View the optima layout depending on thier devics's screen size.
- See hover states for interactive elements
- Have good experince while using the website

### Screenshots
![](./src/images/Payload%20mobile.png)

![](./src/images/Payload%20laptop.png)

- Solution URL : (https://github.com/Rasheedatj/Payload-UI)
- Live Site URL : (https://rasheedatj.github.io/Payload-UI/)

## My process
 I started customizing my colors and screen sizes, I then creted the mobile view, the desktop view and lastly the desktop view. The last process was hosting it on github

 ### Built with 
 - Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Tailwind

### What i learned
- There are various ways of using a background image but writig them in your custom css is not one.
- To always pay attention to the content of my projects

## Code snippet
```html
<div class="flex flex-col space-y-6  items-start mb-6 md:flex-row md:items-center md:space-y-0 md:space-x-3 sm:space-x-6 sm:mb-12  sm:items-center sm:flex-row">
               <p class= " bg-brown hover:bg-lightBrown cursor-pointer uppercase px-6 py-3 sm:text-xl text-base text-white rounded-full">
                     new!
               </p>
               <p class="font-medium text-base  sm:text-xl">Introducing the all new documentation for developers <a href="#" class="text-lightBlue capitalize ">read more</a></p>
           </div>
           ```
           ```css  
@keyframes slideIn{
    0%{
      transform: translateX(100%);
      opacity: 0;
    }
    75%{
      opacity: .7;
    }
    100%{
      transform: translateX(0%);
      opacity: 1;
    }
  }
  ```

```js
btn.addEventListener('click', () =>{
    btn.classList.toggle('open');
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})
```

### Useful resources
- Example 1 (https://tailwindcss.com/docs/installation)


### Author
- Github [https://github.com/Rasheedatj]
- Twitter - [@Rashedatj](https://www.twitter.com/Rashedatj)

### Acknowledgement
- Ayodeji Omonijo designed the page
- - Twitter - [@AyodejiOmonijo1](https://www.twitter.com/AyodejiOmonijo1)