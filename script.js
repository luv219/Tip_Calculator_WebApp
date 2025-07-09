const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');
const peopleInput = document.getElementById('people');
const tipAmountEl = document.getElementById('tipAmount');
const totalEl = document.getElementById('total');
const perPersonEl = document.getElementById('perPerson');

function calculate() {
  const bill = parseFloat(billInput.value) || 0;
  const tipPercent = parseFloat(tipInput.value) || 0;
  const people = parseInt(peopleInput.value) || 1;

  const tip = bill * (tipPercent / 100);
  const total = bill + tip;
  const perPerson = total / people;

  tipAmountEl.textContent = `₹${tip.toFixed(2)}`;
  totalEl.textContent = `₹${total.toFixed(2)}`;
  perPersonEl.textContent = `₹${perPerson.toFixed(2)}`;
}

billInput.addEventListener('input', calculate);
tipInput.addEventListener('input', calculate);
peopleInput.addEventListener('input', calculate);
