let billValue = 0;
let tipAmount = 0.0;
let tipValue = 0;
let peopleAmount = 1;
let customTip = 0.0;

const buttons = document.querySelectorAll(".percent");
const billInput = document.getElementById("bill-amount");
const peopleInput = document.getElementById("numberOfPeople");
const resetBtn = document.getElementById("resetBtn");
const tipBaseValue = document.getElementById("tipAmountTotal");
const billBaseValye = document.getElementById("totalAmountTotal");
const customTipInput = document.getElementById("custom");

tipBaseValue.innerHTML = parseFloat(0).toFixed(2);
billBaseValye.innerHTML = parseFloat(0).toFixed(2);

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("percent-active"));
    btn.classList.add("percent-active");
    tipAmount = parseFloat(btn.dataset.percent);
    tipValue = billValue * tipAmount;
    customTipInput.value = "";
    updateDisplay();
  });
});

billInput.addEventListener("blur", () => {
  billValue = parseFloat(document.getElementById("bill-amount").value) || 0;
  if (billValue > 0) {
    billInput.style.outline = "2px solid #26c0abff";
  }
  tipValue = billValue * tipAmount;
  updateDisplay();
});

customTipInput.addEventListener("blur", () => {
  tipAmount = (parseFloat(customTipInput.value) || 0) / 100;
  buttons.forEach((b) => b.classList.remove("percent-active"));

  tipValue = billValue * tipAmount;
  updateDisplay();
});

peopleInput.addEventListener("blur", () => {
  const inputVal = peopleInput.value.trim();

  if (inputVal === "") {
    peopleInput.style.outline = "none";
    return;
  }

  const parsedValue = parseInt(inputVal);

  if (isNaN(parsedValue) || parsedValue < 1) {
    peopleInput.style.outline = "2px solid #ff8686ff";
    document.getElementById("error").style.display = "block";
    return;
  }

  peopleAmount = parsedValue;
  peopleInput.style.outline = "2px solid #26c0abff";
  document.getElementById("error").style.display = "none";

  updateDisplay();
});

resetBtn.addEventListener("click", () => {
  reset();
});

function updateDisplay() {
  const tipPerPerson = tipValue / peopleAmount;
  const billPerPerson = billValue / peopleAmount;
  tipBaseValue.innerHTML = tipPerPerson.toFixed(2);
  billBaseValye.innerHTML = billPerPerson.toFixed(2);
}

function reset() {
  billInput.value = "";
  peopleInput.value = "";
  billValue = parseFloat(0);
  tipAmount = parseFloat(0);
  tipValue = parseFloat(0);
  peopleAmount = 1;
  updateDisplay();
}
