function validate() {
const emailInput = document.getElementById('email');
const regex =/[a-z]+@[a-z]+\.[a-z]+/;

emailInput.addEventListener('change', (e) =>{
if (!regex.test(e.currentTarget.value)) {
    return e.currentTarget.classList.add('error')
}

e.currentTarget.classList.remove('error')})

}
