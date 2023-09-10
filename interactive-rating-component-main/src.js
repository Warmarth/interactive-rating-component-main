let pot = document.getElementById("popi");
let num = document.getElementById("num");
let tio = document.getElementById("tio");

function submit() {
  pot.classList.add("show");
  tio.classList.add("part");
}
function out() {
  pot.classList.remove("show");
  tio.classList.remove("part");
}
function setNumber(value) {
  document.getElementById("num").innerHTML = value;
}

const buttons = document.querySelectorAll("li");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove the "clicked-button" class from all buttons
    buttons.forEach((btn) => {
      btn.classList.remove("clicked-button");
    });

    // Add the "clicked-button" class to the clicked button
    button.classList.add("clicked-button");
  });
});
