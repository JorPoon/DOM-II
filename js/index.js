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