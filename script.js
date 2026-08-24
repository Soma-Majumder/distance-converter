const KM_PER_MILE = 1.609344;

const form = document.getElementById('converter-form');
const valueInput = document.getElementById('value');
const directionSelect = document.getElementById('direction');
const result = document.getElementById('result');
const needle = document.getElementById('needle');
const inputUnit = document.getElementById('input-unit');

function round(value) {
  return Math.round(value * 1e6) / 1e6;
}

function setNeedle(value) {
  const normalized = Math.min(Math.abs(value) / 100, 1);
  needle.style.transform = `rotate(${-67 + normalized * 134}deg)`;
}

directionSelect.addEventListener('change', () => {
  inputUnit.textContent = directionSelect.value === 'km-to-mi' ? 'km' : 'mi';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const value = parseFloat(valueInput.value);
  if (!Number.isFinite(value)) {
    result.textContent = 'Enter a valid reading';
    setNeedle(0);
    return;
  }

  const isKmToMi = directionSelect.value === 'km-to-mi';
  const converted = round(isKmToMi ? value / KM_PER_MILE : value * KM_PER_MILE);
  const sourceUnit = isKmToMi ? 'km' : 'mi';
  const targetUnit = isKmToMi ? 'mi' : 'km';
  result.textContent = `${value} ${sourceUnit} = ${converted} ${targetUnit}`;
  setNeedle(converted);
});
