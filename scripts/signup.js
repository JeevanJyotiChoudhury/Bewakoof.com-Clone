var customer_mobile_data = JSON.parse(
  localStorage.getItem("beakoof_login_data")
);
console.log(customer_mobile_data);
document.querySelector(".Mobile_input").value = customer_mobile_data;

document.querySelector("#signup-btn").addEventListener("click", function () {
  var obj = {
    fullname: document.querySelector(".fullname_input").value,
    Mobile_input: document.querySelector(".Mobile_input").value,
    email_input: document.querySelector(".email_input").value,
    password: document.querySelector(".password").value,
  };

  localStorage.setItem("customer_whole_data", JSON.stringify(obj));

  window.location.href = "./otp.html";
});
