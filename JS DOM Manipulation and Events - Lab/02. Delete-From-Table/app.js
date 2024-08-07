function deleteByEmail() {
const emailEls = document.querySelectorAll('tbody tr td:nth-child(2)');
const text = document.querySelector('input[name="email"]');
const resultEl = document.getElementById('result');
const tr = document.querySelectorAll('tbody tr');

let emailFound = false;

emailEls.forEach(td => {
    if (td.textContent === text.value) {
        td.parentElement.remove();
      emailFound = true;
    }
  });
  
  if (emailFound) {
    resultEl.textContent = 'Deleted.'
    console.log(resultEl);
  } else {
    resultEl.textContent = 'Not found.'

    console.log(resultEl);
  }
  text.value = ''

}

