// Your code goes here

//changing header background to blue when mouse enters header &&
// yellow when mouse leave header unless clicked
// back to white on click event
headBackgroundColor = document.querySelector('.main-navigation');
headBackgroundColor.addEventListener('mouseenter', (evt)=>{
    evt.target.style.backgroundColor = "blue";
})
headBackgroundColor.addEventListener('mouseleave', (evt)=>{
    if (evt.target.style.backgroundColor != "white"){
        evt.target.style.backgroundColor = "yellow";
    }
})
headBackgroundColor.addEventListener('click', (evt) => {
    evt.target.style.backgroundColor = "white";
})

//triggers alert when page is fully loaded
window.addEventListener('load', ()=>{
    alert('page is loaded, very cool. Push ok.');
})

//on mousedown, changes text and background
textBoxes = document.querySelector('.text-content');
textBoxes.addEventListener('mousedown', (e)=>{
    e.preventDefault();
    e.target.style.backgroundColor = "black";
    e.target.style.color = "red";
})

//on mouseup, reverts text and background back to original
textBoxes.addEventListener('mouseup', (e) => {
    e.target.style.backgroundColor = "white";
    e.target.style.color = "black";
})

//selects all instances of class ".btn" and when 'dblclick' 
// is triggered, will change display to none 
buttons = document.querySelectorAll('.btn');
buttons.forEach(btn =>{
    btn.addEventListener('dblclick', (e)=>{
        e.target.style.display = 'none';
    })
})

destinationTitles = document.querySelectorAll('.destination h4');
destinationTitles.forEach(d => {
    d.addEventListener('click', (e)=> {
        e.preventDefault();
        e.target.style.fontSize = "40px";
    })
})
destinationTitles[0].addEventListener('dblclick', (e)=>{
    e.preventDefault();
    e.target.style.backgroundColor = "black";
    e.target.style.color = "red";
})

destinationTitles[1].addEventListener('dblclick', (e)=>{
    e.preventDefault();
    e.target.style.backgroundColor = "black";
    e.target.style.color = "yellow";
})

destinationTitles[2].addEventListener('dblclick', (e)=>{
    e.preventDefault();
    e.target.style.backgroundColor = "black";
    e.target.style.color = "green";
})


