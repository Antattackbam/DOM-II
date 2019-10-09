// Your code goes here
// Manipulating the "Fun Bus" header -1
headText = document.querySelector('.logo-heading');
headText.addEventListener('mouseover', (e)=>{
    e.target.style.color = "blue";
})


//manipulating the body color on keydown -2
body = document.querySelector('body');
body.addEventListener('keydown', (e)=>{
    e.target.style.backgroundColor = "green";
})

//manipulating the header on 'wheel' -3

mainNav = document.querySelector('.nav-container');
mainNav.addEventListener('wheel', (e)=>{
    console.log(mainNav);
    mainNav.style.backgroundColor = "purple";
})

//load event turns background red -4
window.addEventListener('load', (e)=>{
    body.style.backgroundColor = "red";
})

//dbl click turns body teal -5
body.addEventListener('dblclick', (e)=>{
    e.target.style.backgroundColor = 'teal';
})

//focus on contact form turns background color purple -6
funbusH2 = document.querySelectorAll('#form input');
funbusH2.forEach(data => {

    data.addEventListener('focus', (e)=>{
        e.target.style.backgroundColor = "purple";
    })
})

//body turns yellow on scroll -7
document.addEventListener('scroll', (e)=>{
    body.style.backgroundColor = 'yellow';
})

//funbus logo changes color on mouseleave -8
headText.addEventListener('mouseleave', (e)=>{
    e.target.style.color = "yellow";
})

//makes intro p display none on click -9
introP = document.querySelector('.intro p');
introP.addEventListener('click', (e)=>{
    e.target.style.display = 'none';
})

//makes all buttons disappear on mouseenter -10
buttons = document.querySelectorAll('.btn');
buttons.forEach(btn =>{
    btn.addEventListener('mouseenter', (e)=>{
        e.target.style.display = 'none';
    })
})

test = document.querySelector('#test-div');
test.addEventListener('click', (e)=>{
    e.target.style.backgroundColor = 'green';
})
testbtn = document.querySelector('#test-div button');
testbtn.addEventListener('click', (e)=>{
    e.stopPropagation();
    e.target.style.fontSize = "20px";
})












