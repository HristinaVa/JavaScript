function create(words) {
const contentEl= document.getElementById('content');

function createWordEl(word){
const pEl = document.createElement('p');
const divEl = document.createElement('div');

pEl.textContent = word;
pEl.style.display = 'none';

divEl.appendChild(pEl);
return divEl;
}

words.forEach(word => {
   const divEl = createWordEl(word);
   divEl.addEventListener('click', (e) => {
      e.target.querySelector('p').style.display = 'block';

   } ) 
   contentEl.appendChild(divEl);
});
}
