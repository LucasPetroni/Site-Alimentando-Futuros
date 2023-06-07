var myButton = document.getElementById("myButton");

myButton.addEventListener("mouseover", function () {
  myButton.style.cursor = "pointer";
});

myButton.addEventListener("mouseout", function () {
  myButton.style.cursor = "auto";
});

myButton.addEventListener("click", function () {
  window.location.href = "./pages/login.html";
});
