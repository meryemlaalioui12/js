let products = [];

let productInput = document.getElementById('productInput');
let productList = document.getElementById('productList');
let showBtn = document.getElementById('showBtn');

showBtn.addEventListener("click", function(){

    let product = productInput.value;

    products.push(product);

    let item = document.createElement('li');

    item.textContent = product;

    productList.appendChild(item);

    productInput.value = "";
});