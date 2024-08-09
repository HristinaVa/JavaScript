function lockedProfile() {
    const profileEls = document.getElementById('main');

    profileEls.addEventListener('click', (e) =>{
        if (e.target.tagName !== 'BUTTON') {
                return;
        }
        
        const profile = e.target.parentElement; 
        const hiddenFields = profile.querySelector('div');
        const isUnlocked = profile.querySelector('input[value="unlock"]').checked; 
        if (!isUnlocked) {
            return;
        }
        if (hiddenFields.style.display === 'none' || hiddenFields.style.display === '') {
            hiddenFields.style.display = 'block';
            e.target.textContent = 'Hide it';
        } else {
            hiddenFields.style.display = 'none';
            e.target.textContent = 'Show more';
        } 
    })
}
