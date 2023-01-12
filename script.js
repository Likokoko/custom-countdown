const countdownForm = document.getElementById("countdownForm");
const inputContainer = document.getElementById("input-container");
const dateEl = document.getElementById("date-picker");
const submit = document.querySelector(".submit");
const input = document.querySelector("input");
const title = document.querySelector("#title");

const countdownEl = document.querySelector(".countdown");
const countdownElTitle = document.getElementById("countdown-title");
const reset = document.getElementById("countdown-button");
const timeElements = document.querySelectorAll("span");

const completeForm = document.getElementById("complete");
const completeElInfo = document.getElementById("complete-info");
const completeBtn = document.getElementById("complete-button");

const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

function getTheTime() {
  if (dateEl.value === "" || title.value === "") {
    alert("please fill in all the info");
  } else {
    let time = dateEl.valueAsNumber - new Date().getTime();
    var date = new Date(time);
    var day = Math.floor(time / (1000 * 60 * 60 * 24));
    var hour = date.getUTCHours();
    var minute = date.getUTCMinutes();
    var second = date.getUTCSeconds();
    let dateString =
      day +
      " days " +
      hour +
      " hours " +
      minute +
      " minutes " +
      second +
      " seconds";
    days.innerText = day;
    hours.innerText = hour;
    minutes.innerText = minute;
    seconds.innerText = second;
    console.log(dateString);
    inputContainer.classList.add("hidden");
    countdownEl.classList.remove("hidden");
    completeFinal();
  }
}

function resetIt() {
  console.log("hi");
  countdownEl.classList.add("hidden");
  inputContainer.classList.remove("hidden");
}

function completeFinal() {
  let time = dateEl.valueAsNumber - new Date().getTime();
  if (time === 0 || time < 0) {
    inputContainer.classList.add("hidden");
    countdownEl.classList.add("hidden");
    completeForm.classList.remove("hidden");
  }
}

function done() {
  inputContainer.classList.remove("hidden");
  countdownEl.classList.add("hidden");
  completeForm.classList.add("hidden");
  title.value= ""
  dateEl.value= ""
}
