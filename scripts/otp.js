let customerData = JSON.parse(localStorage.getItem("customer_whole_data"));
let phoneNumber = JSON.parse(localStorage.getItem("beakoof_login_data"));
document.querySelector("#name").innerText = "Name: " + customerData.fullname;
document.querySelector("#number").innerText = "Mobile Number: " + phoneNumber;
document.querySelector("#login-otp-btn").addEventListener("click", checkotp);
let flag=false;
function checkotp() {
  let otp1 = document.getElementById("otp1").value;
  let otp2 = document.getElementById("otp2").value;
  let otp3 = document.getElementById("otp3").value;
  let otp4 = document.getElementById("otp4").value;
  if (otp1 == 1 && otp2 == 2 && otp3 == 3 && otp4 == 4) {
    alert("Login successful !");
    flag=true;
    localStorage.setItem("loginToken",flag)
    window.location.href = "/address.html";
  } else {
    alert("invalid OTP, please try again !");
  }
}
