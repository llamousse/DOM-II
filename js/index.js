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
const btnClick = document.querySelectorAll('.btn');
btnClick.forEach(anchor => {
    anchor.addEventListener('dblclick', event => {
        alert('Sign up today!');
    });
});

// Click Event
const clickEvent = document.querySelectorAll('h2');
clickEvent.forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.target.style.fontSize = "40px";
    });
});

const opacImg = document.querySelectorAll('img');
opacImg.forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.target.style.opacity = "0.5";
    });
});

// Copy Event
const selectEvent = document.querySelectorAll('p');
selectEvent.forEach(anchor => {
    anchor.addEventListener('copy', event => {
        alert("Don't copy from us!");
    });
});

// Scroll Event
window.addEventListener('scroll', function() {
    document.body.style.backgroundColor = "lightgrey";
})
