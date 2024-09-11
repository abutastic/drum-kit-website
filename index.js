let w = document.querySelector(".w");
let a = document.querySelector(".a");
let s = document.querySelector(".s");
let d = document.querySelector(".d");
let j = document.querySelector(".j");
let k = document.querySelector(".k");
let l = document.querySelector(".l");

w.addEventListener("click", function (event) {
  new Audio("/sounds/crash.mp3").play();
});

a.addEventListener("click", function () {
  new Audio("/sounds/kick-bass.mp3").play();
});

s.addEventListener("click", function () {
  new Audio("/sounds/snare.mp3").play();
});

d.addEventListener("click", function () {
  new Audio("/sounds/tom-1.mp3").play();
});

j.addEventListener("click", function () {
  new Audio("/sounds/tom-2.mp3").play();
});

k.addEventListener("click", function () {
  new Audio("/sounds/tom-3.mp3").play();
});

l.addEventListener("click", function () {
  new Audio("/sounds/tom-4.mp3").play();
});


// Sounds using Keyboard Listeners

document.addEventListener("keydown", function(a){
    if(a.key === "w"){
        new Audio("/sounds/crash.mp3").play();
    }
})

document.addEventListener("keydown", function(a){
    if(a.key === "a"){
        new Audio("/sounds/kick-bass.mp3").play();
    }
})

document.addEventListener("keydown", function(a){
    if(a.key === "s"){
        new Audio("/sounds/snare.mp3").play();
    }
})

document.addEventListener("keydown", function(a){
    if(a.key === "d"){
        new Audio("/sounds/tom-1.mp3").play();
    }
})
document.addEventListener("keydown", function(a){
    if(a.key === "j"){
        new Audio("/sounds/tom-2.mp3").play();
    }
})
document.addEventListener("keydown", function(a){
    if(a.key === "k"){
        new Audio("/sounds/tom-3.mp3").play();
    }
})
document.addEventListener("keydown", function(a){
    if(a.key === "l"){
        new Audio("/sounds/tom-4.mp3").play();
    }
})
