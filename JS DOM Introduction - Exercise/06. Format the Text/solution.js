function solve() {
const inputEl = document.getElementById('input');
const outputEl = document.getElementById('output');

const sentences = inputEl.value.split('.')
.filter(Boolean).map((x) => x.trim());

for (let index = 0; index < sentences.length; index+=3) {
  const element = sentences.slice(index, index+3).join('. ').concat('.');
  outputEl.innerHTML += `<p>${element}</p>`;
  
}
}
