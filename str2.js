let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");


let doc1 = document.getElementById("doc1");
let doc2 = document.getElementById("doc2");
let doc3 = document.getElementById("doc3");

btn1.addEventListener("click", function(){
    doc1.classList.toggle("active");
});

btn2.addEventListener("click", function(){
    doc2.classList.toggle("active");
});

btn3.addEventListener("click", function(){
    doc3.classList.toggle("active");
});

