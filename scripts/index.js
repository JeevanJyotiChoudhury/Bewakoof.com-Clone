document.querySelector("#menPage").addEventListener("click",menPage)
document.querySelector("#womenPage").addEventListener("click", womenPage);
// document.querySelector("#imgDiv").addEventListener("click", homePage);

function menPage(){
    window.location.href='./menHomePage.html'
}
function womenPage() {
  window.location.href = "./womenHomePage.html";
}
// function homePage() {
//   window.location.href = "./index.html";
// }