// Variables
const billInput = document.getElementById('bill');
let billValue = 0;
const tipBtns = document.querySelectorAll('.tipBtn');
let tipValue = 0;
const customInput = document.getElementById('customInput');
const peopleInput = document.getElementById('peopleInput');
let peopleValue = 0;
const totalTipEl = document.getElementById('totalTip');
const totalBillEl = document.getElementById('totalBill');

// Bill Input

billInput.addEventListener('input', () => {
  let billAmount = parseFloat(billInput.value);

  if (isNaN(billAmount)) {
    billValue = 0;
  } else {
    billValue = billAmount;
    getTipAmount(billValue, tipValue, peopleValue);
  }
});

// Tip Buttons

tipBtns.forEach((button) => {
  button.addEventListener('click', () => {
    tipValue = parseFloat(button.value);
    getTipAmount(billValue, tipValue, peopleValue);
    console.log(tipValue);
  });
});

// Custom Tip Amount

customInput.addEventListener('input', () => {
  let customTipAmount = parseFloat(customInput.value);
  if (isNaN(customTipAmount)) {
    tipValue = 0;
    console.log(tipValue);
  } else {
    tipValue = customTipAmount;
    console.log(tipValue);
  }
  getTipAmount(billValue, tipValue, peopleValue);
});

// People Amount

peopleInput.addEventListener('input', () => {
  let peopleAmount = parseFloat(peopleInput.value);
  if (
    peopleAmount <= 0 ||
    isNaN(peopleAmount) ||
    !Number.isInteger(peopleAmount)
  ) {
    console.log('Needs to be a whole number');
  } else {
    peopleValue = peopleAmount;
    getTipAmount(billValue, tipValue, peopleValue);
  }
});

function getTipAmount(billValue, tipValue, peopleValue) {
  if (peopleValue <= 0) {
    totalBillEl.textContent = '';
    totalTipEl.textContent = '';
    return;
  }
  let tipPercentage = tipValue / 100;
  console.log(tipPercentage);
  let finalTipValue = billValue * tipPercentage;

  let totalTipValue = finalTipValue / peopleValue;
  let totalBillValue = (billValue + finalTipValue) / peopleValue;
  console.log(totalTipValue);
  console.log(totalBillValue);

  totalBillEl.textContent = totalBillValue.toFixed(2);
  totalTipEl.textContent = totalTipValue.toFixed(2);
}
