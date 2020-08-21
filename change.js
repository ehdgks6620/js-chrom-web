const btn = document.querySelector("button");
const body = document.querySelector("body");
console.log(btn.value);

function handleChange(event) {
  console.log(event.target);
  if (btn.textContent === "night") {
    body.style.backgroundColor = "black";
    btn.innerText = "white";
  } else {
    body.style.backgroundColor = "white";
    btn.innerText = "night";
  }
}
function handleSize(event) {
  console.log(event.target);
  console.log(2);
}

btn.addEventListener("click", handleChange);
window.addEventListener("resize", handleSize);
