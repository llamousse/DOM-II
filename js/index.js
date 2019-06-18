// Your code goes here

// Mouseover Event
const mouseOver = document.querySelector('.main-navigation');
mouseOver.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'maroon';
    event.target.style.color = 'white';
});

// Dblclick Event 
const btnClick = document.querySelector('.btn');
btnClick.addEventListener('dblclick', event => {
    alert('Sign up today!');
    event.preventDefault();
});


