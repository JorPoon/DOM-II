// Your code goes here


const signBtn = document.querySelectorAll(".btn");

console.log(signBtn.length);
console.log(signBtn[0]);

signBtn[0].addEventListener("click", event => {
    signBtn[0].innerHTML = `Click count ${event.detail}`;
})

signBtn[1].addEventListener("click", event => {
    console.log("hello");
})

signBtn[2].addEventListener("click", event => {
    console.log("hello");
})