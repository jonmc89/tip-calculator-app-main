// To Do
// 1. Capture bill input store in variable.
// 2. Setup variable for each tip amount button.
// 3. Setup variable to capture customer tip amount.
// 4. Capture people amount to stiote in variable.
// 5. Calculate bill Tip = Bill Amount * (Tip % / 100).
// 6. Update innerHTML of total value (tip amount / people) & (total bill / people).

let billValue = 0;
let tipAmount = parseFloat(0.0);
let tipValue = 0;
let peopleAmount = 0;

// Gets Bill amount
document.getElementById("bill-amount").addEventListener("blur", () => {
  billValue = document.getElementById("bill-amount").value;
  console.log(billValue);
});

// Get Tip Amount
document.getElementById("5%Btn").addEventListener("click", () => {
  tipAmount = 0.05;
  tipValue = billValue * (tipAmount / 100);

  console.log(tipAmount);
});
document.getElementById("10%Btn").addEventListener("click", () => {
  tipAmount = 0.1;
  tipValue = billValue * (tipAmount / 100);
  console.log(tipAmount);
});
document.getElementById("15%Btn").addEventListener("click", () => {
  tipAmount = 0.15;
  tipValue = billValue * (tipAmount / 100);
  console.log(tipAmount);
});
document.getElementById("25%Btn").addEventListener("click", () => {
  tipAmount = 0.25;
  tipValue = billValue * (tipAmount / 100);
  console.log(tipAmount);
});
document.getElementById("50%Btn").addEventListener("click", () => {
  tipAmount = 0.5;
  tipValue = billValue * (tipAmount / 100);
  console.log(tipAmount);
});

// Get People Amount & Calculate Totals
document.getElementById("numberOfPeople").addEventListener("blur", () => {
  peopleAmount = document.getElementById("numberOfPeople").value;
  console.log(peopleAmount);
  billValue = billValue / peopleAmount;
  tipValue = tipValue / peopleAmount;
  console.log(billValue);
  console.log(tipValue);
  document.getElementById("tipAmountTotal").innerHTML = tipValue.toFixed(2);
  document.getElementById("totalAmountTotal").innerHTML = billValue.toFixed(2);
});
