let product = JSON.parse(localStorage.getItem("product"));
let cartArr = JSON.parse(localStorage.getItem("cartItem")) || [];

function displayProduct(product) {
  let image = document.createElement("img");
  image.src = product[0].image;
  let data = document.createElement("div");
  data.setAttribute("id", "sizeDiv");
  let btn1 = document.createElement("div");
  btn1.innerText = "XS";
  let btn2 = document.createElement("div");
  btn2.innerText = "S";
  let btn3 = document.createElement("div");
  btn3.innerText = "M";
  let btn4 = document.createElement("div");
  btn4.innerText = "L";
  let btn5 = document.createElement("div");
  btn5.innerText = "XL";
  let btn6 = document.createElement("div");
  btn6.innerText = "2XL";
  let btn7 = document.createElement("div");
  btn7.innerText = "3XL";
  data.append(btn1, btn2, btn3, btn4, btn5, btn6, btn7);
  let brand = document.createElement("h2");
  brand.innerText = product[0].brand;
  let desc = document.createElement("p");
  desc.innerText = product[0].description;
  let price = document.createElement("h3");
  price.innerText = "₹ " + product[0].price;
  let btn = document.createElement("button");
  btn.innerText = "Add to Bag";
  btn.addEventListener("click", function () {
    addToCart(elem);
  });
  document.querySelector("#imageDiv").append(image);
  document.querySelector("#dataDiv").append(brand, desc, price, data, btn);
}

function addToCart(elem) {
  cartArr.push(elem);
  localStorage.setItem("cartItem", JSON.stringify(cartArr));
}
displayProduct(product);
