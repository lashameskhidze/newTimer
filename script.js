
let daysitem = document.querySelector("#days");
let hoursitem = document.querySelector("#hours");
let minitem = document.querySelector("#min");
let secitem = document.querySelector("#sec");
let domyear = document.querySelector(".Year");

let year = prompt("შეიყვანეთ წელი (რიცხვი)");
let month = prompt("შეიყვანეთ თვე (რიცხვის სახით)");
let day = prompt("შეიყვანეთ დღე (რიცხვი)");

function countDown() {
  let futureDate = new Date(year, month - 1, day);
  let currentDate = new Date();
  const diff = futureDate - currentDate;

  domyear.textContent = year;

  if (diff <= 0) {
    document.body.innerHTML = "<h1>დრო ამოიწურა!</h1>";
    clearInterval(countdownInterval);
    return;
  }

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  daysitem.innerHTML = d;
  hoursitem.innerHTML = h < 10 ? "0" + h : h;
  minitem.innerHTML = m < 10 ? "0" + m : m;
  secitem.innerHTML = s < 10 ? "0" + s : s;
}

let countdownInterval = setInterval(countDown, 1000);
countDown();