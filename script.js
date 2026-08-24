const KM_PER_MILE = 1.609344;

const form = document.getElementById('converter-form');
const valueInput = document.getElementById('value');
const directionSelect = document.getElementById('direction');
const result = document.getElementById('result');

function round(value) {
  return Math.round(value * 1e6) / 1e6;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const value = parseFloat(valueInput.value);
  if (!Number.isFinite(value)) {
    result.textContent = 'Please enter a valid number.';
    return;
  }

  const direction = directionSelect.value;

  if (direction === 'km-to-mi') {
    const miles = round(value / KM_PER_MILE);
    result.textContent = `${value} km = ${miles} mi`;
  } else {
    const km = round(value * KM_PER_MILE);
    result.textContent = `${value} mi = ${km} km`;
  }
});
