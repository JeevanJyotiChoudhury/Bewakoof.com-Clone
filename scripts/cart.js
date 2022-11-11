

let cartArr = JSON.parse(localStorage.getItem("cartItem"));
console.log(cartArr);

displayCartData(cartArr);
function displayCartData(cartArr) {
  document.querySelector("#cart").innerHTML = "";
  cartArr.map((el) => {
    let fullDiv = document.createElement("div");
    let detailsDiv = document.createElement("div");
    detailsDiv.setAttribute("id", "detailsDiv");
    let imageDiv = document.createElement("div");
    imageDiv.setAttribute("id", "imageDiv");
    let img = document.createElement("img");
    img.src = el.image;
    let desc = document.createElement("p");
    desc.innerText = el.description;
    let prc = document.createElement("span");
    prc.innerText = "₹" + el.price;
    let qnty = document.createElement("S");
    qnty.innerText = "₹" + el.strike_price;
    let br = document.createElement("br");
    let btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.addEventListener("click", function () {
      removeItem(el);
    });
    detailsDiv.append(desc, prc, qnty, br, btn);
    imageDiv.append(img);
    fullDiv.append(detailsDiv, imageDiv);
    document.querySelector("#cart").append(fullDiv);
  });
}

function removeItem(data) {
  cartArr = cartArr.filter(function (elem) {
    return elem != data;
  });
  localStorage.setItem("cartItem", JSON.stringify(cartArr));
  displayCartData(cartArr);
}

let totalPrice = cartArr.reduce((acc, elem) => {
  return acc + Number(elem.price);
}, 0);
document.querySelector("#totalPrice").innerText = "₹" + totalPrice;
document.querySelector("#subTotal").innerText = "₹" + (totalPrice - 270);
document.querySelector("#prc").innerText = "₹" + (totalPrice - 270);
document.querySelector("#cartTotal").innerText =
  "My Bag: " + cartArr.length + " Items";
console.log(totalPrice);

