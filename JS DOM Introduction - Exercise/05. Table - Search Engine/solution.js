function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const searchFieldEl = document.getElementById('searchField');
   const tableRowEls = document.querySelectorAll('table.container tbody tr');

   function getMatchEls(input) {
      return [...tableRowEls].filter((x) => x.textContent.toLowerCase().includes(input.toLowerCase()));
   }

   function clearPrevious() {
      [...tableRowEls].forEach((x) => { x.classList.remove('select'); });
   }
   function onClick() {
      clearPrevious();

      getMatchEls(searchFieldEl.value).forEach((x) => { x.classList.add('select'); });
      searchFieldEl.value = '';

   }
}
