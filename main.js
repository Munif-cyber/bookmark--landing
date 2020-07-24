const menu=document.querySelector(".menu");
const close = document.querySelector("#close");
const normal = document.querySelector("#normal");
const ul = document.querySelector("header ul");

const arrow = document.querySelectorAll(".arro");
// const ar = document.querySelector(".arro");
// const answer = document.querySelector(".answer");
arrow.forEach(function (butt){
    butt.addEventListener("click", function(e){
        butt.classList.toggle("open");
        const question = e.currentTarget.parentElement.parentElement;
        const answer = question.querySelector(".answer");
        answer.classList.toggle("open");
        // if (question==e){
        // butt.classList.remove("open"); 
        // answer.classList.remove("open");
        // }
        // question.forEach(function (b){
        //     if (b!==butt){
                
        //         answer.classList.remove("open");
        //     }
        // });
                       
    });
    // ar.classList.toggle("open");
});

// arrow.addEventListener("click", function(){
//     answer.classList.toggle("open");
//     arrow.classList.toggle("open");
// });
// const speedy = document.querySelector(".speedy");
// const simple = document.querySelector(".simple");
// const easy = document.querySelector(".easy");
// const tabone = document.querySelector("#tabone");
// const tabtwo = document.querySelector("#tabtwo");
// const tab = document.querySelector("#tab");

// simple.addEventListener("click", function(){
//     tabone.classList.toggle("open");
// });
// speedy.addEventListener("click", function(){
//     tabtwo.classList.toggle("open");
// });
// easy.addEventListener("click", function(){
//     tab.classList.toggle("open");
// });
menu.addEventListener("click", function(){
ul.classList.toggle("open");
close.classList.toggle("open");
normal.classList.toggle("open");

});
// const clink= document.querySelectorAll("#clink");
