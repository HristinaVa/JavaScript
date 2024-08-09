function attachEventsListeners() {

    const dayEl = document.getElementById('days');
    const hourEl = document.getElementById('hours');
    const minEl = document.getElementById('minutes');
    const secEl = document.getElementById('seconds');
    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', (e) =>{
        dayEl.value= Number(dayEl.value);
        hourEl.value = Number(dayEl.value) * 24;
        minEl.value = Number(dayEl.value) * 1440;
        secEl.value = Number(dayEl.value) * 86400;

    })
    hoursBtn.addEventListener('click', (e) =>{
        hourEl.value= Number(hourEl.value);
        dayEl.value = Number(hourEl.value) / 24;
        minEl.value = Number(hourEl.value) * 60;
        secEl.value = Number(hourEl.value) * 3600;

    })
    minutesBtn.addEventListener('click', (e) =>{
        minEl.value= Number(minEl.value);
        hourEl.value = Number(minEl.value) / 60;
        dayEl.value = Number(minEl.value) / 1440;
        secEl.value = Number(minEl.value) * 60;

    })
    secondsBtn.addEventListener('click', (e) =>{
        secEl.value= Number(secEl.value);
        hourEl.value = Number(secEl.value) / 3600;
        minEl.value = Number(secEl.value) / 60;
        dayEl.value = Number(secEl.value) / 86400;

    })
    // convertButtons.forEach(button => {
    //     button.addEventListener('click', (e) => {
    //         if (daysBtn) {
    //             console.log('haha');

    //         }
    //         else{
    //             console.log('no')
    //         }

    //     })
    // })


    // const secondsToMinutes = (seconds) => seconds / 60;
    // const secondsToHours = (seconds) => seconds / 3600;
    // const secondsToDays = (seconds) => seconds / 86400;

    // const minutesToSeconds = (minutes) => minutes * 60;
    // const minutesToHours = (minutes) => minutes / 60;
    // const minutesToDays = (minutes) => minutes / 1440;

    // const hoursToSeconds = (hours) => hours * 3600;
    // const hoursToMinutes = (hours) => hours * 60;
    // const hoursToDays = (hours) => hours / 24;

    // const daysToSeconds = (days) => days * 86400;
    // const daysToMinutes = (days) => days * 1440;
    // const daysToHours = (days) => days * 24;




}
