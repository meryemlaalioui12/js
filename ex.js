// let products = [];

// let productInput = document.getElementById('productInput');
// let productList = document.getElementById('productList');
// let showBtn = document.getElementById('showBtn');

// showBtn.addEventListener("click", function(){

//     let product = productInput.value;

//     products.push(product);

//     let item = document.createElement('li');

//     item.textContent = product;

//     productList.appendChild(item);

//     productInput.value = "";
// });
let First = document.getElementById('First');
let Second = document.getElementById('Second');
let Third = document.getElementById('Third');
let Fourth = document.getElementById('Fourth');
let F = document.querySelector('.First');
let S = document.querySelector('.Second');
let T = document.querySelector('.Third');
let Fo = document.querySelector('.Fourth')
First.addEventListener("click", function(){
    F.style.display = "block";
    S.style.display = "none";
    T.style.display = "none";
    Fo.style.display = "none";

    First.classList.add("active");
    Second.classList.remove("active");
    Third.classList.remove("active");
    Fourth.classList.remove("active");

});
Second.addEventListener("click", function(){
    F.style.display = "none";
    S.style.display = "block";
    T.style.display = "none";
    Fo.style.display = "none";

    First.classList.remove("active");
    Second.classList.add("active");
    Third.classList.remove("active");
    Fourth.classList.remove("active");
});
Third.addEventListener("click", function(){
    F.style.display = "none";
    S.style.display = "none";
    T.style.display = "block";
    Fo.style.display = "none";

    First.classList.remove("active");
    Second.classList.remove("active");
    Third.classList.add("active");
    Fourth.classList.remove("active");
});
Fourth.addEventListener("click", function(){
    F.style.display = "none";
    S.style.display = "none";
    T.style.display = "none";
    Fo.style.display = "block";

    First.classList.remove("active");
    Second.classList.remove("active");
    Third.classList.remove("active");
    Fourth.classList.add("active");
});