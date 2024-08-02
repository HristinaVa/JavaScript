function search() {
   const townsEl = document.querySelectorAll('#towns li');

   function getMatchEl(input) {
      return [...townsEl].filter((x) => x.textContent.toLowerCase().includes(input.toLowerCase()));
   }
   function clear() {
      townsEl.forEach((el) => {
         el.style.fontWeight = 'normal';
         el.style.textDecoration = 'none';
      })
   }
   clear();

   const [inputEl] = document.getElementsByTagName("input");
   const matchEls = getMatchEl(inputEl.value);
   matchEls.forEach((match) => {
      match.style.fontWeight = 'bold';
      match.style.textDecoration = 'underline';
      
   });
   document.querySelector('div#result').textContent = `${matchEls.length} matches found`
}
