function attachGradientEvents() {
const resultEl = document.getElementById('result');
const gradientEl = document.getElementById('gradient');

gradientEl.addEventListener('mousemove', (e) =>{
    const currentPosition = e.offsetX;
    const elWidth = e.currentTarget.clientWidth;

    const percent = Math.floor((currentPosition / elWidth)*100);

    resultEl.textContent = `${percent}%`
})
}
