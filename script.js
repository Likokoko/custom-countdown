const countdownForm = document.getElementById('countdownForm');
const inputContainer = document.getElementById('input-container');
const dateEl = document.getElementById('date-picker');
const submit = document.querySelector(".submit");
const input = document.querySelector("input")

const countdownEl = document.querySelector('.countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

const completeForm = document.getElementById('complete');
const completeElInfo = document.getElementById('complete-info');
const completeBtn = document.getElementById('complete-button');

const days= document.querySelector(".days")
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");


submit.addEventListener("click", ()=>{
    inputContainer.classList.add("hidden")
    countdownEl.classList.remove("hidden")
    console.log("jh2")
  }
)

