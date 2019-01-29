// Your code goes here


const signBtn = document.querySelectorAll(".btn");

console.log(signBtn.length);
console.log(signBtn[0]);

signBtn[0].addEventListener("click", event => {
    signBtn[0].innerHTML = `Click count ${event.detail}`;
})

signBtn[1].addEventListener("mouseover", event => {
   alert("SIGNING UP WOOT WOOT");
})

signBtn[2].addEventListener("dblclick", event => {
    confirm("ARE YOU SURE????");
})


const headerTwo = document.querySelectorAll("h2");

console.log(headerTwo.length);

headerTwo[0].addEventListener("mouseover", event => {
    event.target.style.color = "orange";
})

headerTwo[0].addEventListener("mouseout", event => {
    event.target.style.color = "black"
})

headerTwo[1].addEventListener("mousedown", event => {
    event.target.style.color = "red";
})

headerTwo[2].addEventListener("mouseup", event => {
    event.target.style.color = "blue";
})

// headerTwo[3].addEventListener("keydown", event =>{
//     alert("hi");  
//   });

const allP = document.querySelectorAll("p");

window.addEventListener("load", event => {
    alert("PRESS OK")
})

const imageBus = document.querySelector('.img1');

window.addEventListener("keyup", event => {
    alert("woah woah");
})

window.addEventListener("keypress", event => {
    headerTwo[3].style.color = "pink"
})

allP[1].addEventListener("click" , event => {
    event.stopPropagation();
    event.target.style.color = "green";
})

allP[1].addEventListener("mouseover" , event => {
    event.stopPropagation();
    event.target.style.color = "yellow";
})

