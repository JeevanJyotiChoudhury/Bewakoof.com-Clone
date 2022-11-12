document.querySelector("#continueBtn").addEventListener("click", go);
function go() {
  let x = document.querySelector("#mobile").value;

  var array = [];
  array.push(x);
  console.log(x.length);
  if (x.length == 10) {
    console.log("yes");
    localStorage.setItem("beakoof_login_data", JSON.stringify(array));
    window.location.href = "signup.html";
  } else {
    alert("invalid number");
  }
}
