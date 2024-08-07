function focused() {
const items = document.querySelectorAll('input[type="text"]');

items.forEach(el => el.addEventListener('focus', (e) =>{
    e.currentTarget.parentElement.classList.add('focused')}))


items.forEach(el => el.addEventListener('blur', (e) =>{
    e.currentTarget.parentElement.classList.remove('focused')}))
}


