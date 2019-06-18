// Your code goes here

// Mouseover Event
const mouseOver = document.querySelector('.main-navigation');
mouseOver.addEventListener('mouseenter', event => {
    event.target.style.backgroundColor = 'maroon';
    event.target.style.color = 'white';
});

// Mouseleave Event
const mouseLeave = document.querySelector('.main-navigation');
mouseLeave.addEventListener('mouseleave', event => {
    event.target.style.backgroundColor = 'white';
    event.target.style.color = 'black';
});

// Dblclick Event 
const btnClick = document.querySelector('.btn');
btnClick.addEventListener('dblclick', event => {
    alert('Sign up today!');
    event.preventDefault();
});

// Click Event
const clickEvent = document.querySelector('h2');
clickEvent.addEventListener('click', event => {
    event.target.style.fontSize = "40px";
});
