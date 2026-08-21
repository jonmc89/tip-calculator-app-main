// Bill Input

const billInput = document.getElementById('bill');

let billValue = 0;

billInput.addEventListener('input', () => {
  let billAmount = parseFloat(billInput.value);

  if (isNaN(billAmount)) {
    billValue = 0;
  } else {
    billValue = billAmount;
  }
});

// Tip Buttons

const tipBtns = document.querySelectorAll('.tipBtn');

let tipValue = 0;

tipBtns.forEach((button) => {
  button.addEventListener('click', () => {
    tipValue = parseFloat(button.value);
    console.log(tipValue);
  });
});

// Custom Tip Amount

const customInput = document.getElementById('customInput');

customInput.addEventListener('input', () => {
  let customTipAmount = parseFloat(customInput.value);
  if (isNaN(customTipAmount)) {
    tipValue = 0;
    console.log(tipValue);
  } else {
    tipValue = customTipAmount;
    console.log(tipValue);
  }
});

// People Amount

const peopleInput = document.getElementById('peopleInput');

let peopleValue = 0;

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
    console.log(peopleAmount);
    console.log(Number.isInteger(peopleValue));
  }
});
