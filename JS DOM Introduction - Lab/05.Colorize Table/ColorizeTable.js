function colorize() {
const evenRows = document.querySelectorAll('table tr:nth-child(even)');

for (const evenRow of evenRows) {
    evenRow.style.background = 'teal';
}}
