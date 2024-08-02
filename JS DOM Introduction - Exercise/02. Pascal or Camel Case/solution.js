function solve() {
const validNames = ['Pascal Case', 'Camel Case'];

const textValue = document.getElementById('text');
const namingConvention = document.getElementById('naming-convention');
let resultField = document.getElementById('result');

if (!validNames.includes(namingConvention.value)) {
  resultField.textContent = 'Error!';
  return;
}
const pascalCase = textValue.value.toLowerCase()
  .split(' ')
  .filter(x => x) // Filter out any empty strings
  .map((x) => x[0].toUpperCase() + x.slice(1))
  .join('');


resultField.textContent =
namingConvention.value === validNames[1]
  ? pascalCase[0].toLowerCase().concat(pascalCase.slice(1))
  : pascalCase;
}
