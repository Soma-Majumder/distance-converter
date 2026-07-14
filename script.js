const KM_PER_MILE = 1.609344;

const kmInput = document.getElementById('km');
const milesInput = document.getElementById('miles');

function round(value) {
  return Math.round(value * 1e6) / 1e6;
}

kmInput.addEventListener('input', () => {
  const km = parseFloat(kmInput.value);
  milesInput.value = Number.isFinite(km) ? round(km / KM_PER_MILE) : '';
});

milesInput.addEventListener('input', () => {
  const miles = parseFloat(milesInput.value);
  kmInput.value = Number.isFinite(miles) ? round(miles * KM_PER_MILE) : '';
});
