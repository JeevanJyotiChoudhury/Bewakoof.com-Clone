let amount = JSON.parse(localStorage.getItem("cartAmount"));
console.log(amount);
if (amount != null) {
    
    document.querySelector("#totalAmount").innerText = "Pay "+"₹ " + amount;
}
else {
    document.querySelector("#totalAmount").innerText = "PAY";
}

document.querySelector("#checkout").addEventListener("click", paymentSucess);

function paymentSucess() {
    window.location.href="./payment.html"
}