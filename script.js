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
const resetBtn = document.getElementById('resetBtn');

// Bill Input

billInput.addEventListener('input', () => {
  let billAmount = parseFloat(billInput.value);

  if (isNaN(billAmount)) {
    billValue = 0;
  } else {
    billValue = billAmount;
  }

  getTipAmount();
});

// Tip Buttons

tipBtns.forEach((button) => {
  button.addEventListener('click', () => {
    tipValue = parseFloat(button.value);
    getTipAmount(billValue, tipValue, peopleValue);
  });
});

// Custom Tip Amount

customInput.addEventListener('input', () => {
  let customTipAmount = parseFloat(customInput.value);
  if (isNaN(customTipAmount)) {
    tipValue = 0;
  } else {
    tipValue = customTipAmount;
  }
  getTipAmount(billValue, tipValue, peopleValue);
});

// People Amount

peopleInput.addEventListener('input', () => {
  let peopleAmount = parseFloat(peopleInput.value);

  if (peopleAmount <= 0 || isNaN(peopleAmount)) {
    peopleValue = 0;
  } else {
    peopleValue = peopleAmount;
  }

  getTipAmount();
});

function getTipAmount(billValue, tipValue, peopleValue) {
  if (peopleValue <= 0) {
    totalBillEl.textContent = '';
    totalTipEl.textContent = '';
    return;
  }
  let tipPercentage = tipValue / 100;
  let finalTipValue = billValue * tipPercentage;

  let totalTipValue = finalTipValue / peopleValue;
  let totalBillValue = (billValue + finalTipValue) / peopleValue;

  totalBillEl.textContent = totalBillValue.toFixed(2);
  totalTipEl.textContent = totalTipValue.toFixed(2);
}

// Reset Form

resetBtn.addEventListener('click', () => {
  billInput.value = '';
  customInput.value = '';
  peopleInput.value = '';
  totalBillEl.textContent = '';
  totalTipEl.textContent = '';

  billValue = 0;
  tipValue = 0;
  peopleValue = 0;
});
