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
