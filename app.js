const steps = document.querySelectorAll(".step");
const contents = document.querySelectorAll(".warp");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const success = document.querySelector(".success");
const btns = document.querySelector(".btns");
const form = document.querySelector("#form");
const circlebox = document.querySelector(".circlebox");

let active = 1;
btnLeft.addEventListener("click", (e) => {
  e.preventDefault();

  if (active === 1) return;
  steps[active - 1].classList.remove("active");
  contents[active - 1].classList.remove("active");
  active--;
  steps[active - 1].classList.add("active");
  contents[active - 1].classList.add("active");
  btnRight.innerHTML = "Next Step";
  btnRight.classList.remove("confirm");
  if (active === 1) {
    btnLeft.style.opacity = 0;
    btnLeft.style.cursor = "default";
  } else {
    btnLeft.style.opacity = 1;
    btnLeft.style.cursor = "pointer";
  }
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  goNext();
});
btnRight.addEventListener("click", (e) => {
  // goNext();
});
function goNext() {
  contents[active - 1].classList.remove("active");
  if (active === 4) {
    success.style.display = "flex";
    btns.style.display = "none";
    return;
  }

  steps[active - 1].classList.remove("active");

  active++;
  steps[active - 1].classList.add("active");
  contents[active - 1].classList.add("active");
  btnLeft.style.opacity = 1;
  btnLeft.style.cursor = "pointer";
  if (active === 4) {
    btnRight.innerHTML = "confirm";
    btnRight.classList.add("confirm");
  } else {
    btnRight.innerHTML = "Next Step";
    btnRight.classList.remove("confirm");
  }
}
circlebox.addEventListener("click", () => {
  circlebox.classList.toggle("toggle");
});
