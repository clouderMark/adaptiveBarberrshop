export function sliderAdvantages () {

let sliderToggles = document.querySelectorAll('.slider__toggle');
let advantagesItems = document.querySelectorAll('.advantages__item');
let val = 1;
let win = window.matchMedia('(min-width: 768px)');

for (let sliderToggle of sliderToggles) {
    sliderToggle.addEventListener('click', function () {
        val = sliderToggle.value;
        if (val == 1) {
            advantagesItems[0].style.display = 'flex';
            advantagesItems[1].style.display = 'none';
            advantagesItems[2].style.display = 'none';
        }
        if (val == 2) {
            advantagesItems[1].style.display = 'flex';
            advantagesItems[0].style.display = 'none';
            advantagesItems[2].style.display = 'none';
        }
        if (val == 3) {
            advantagesItems[2].style.display = 'flex';
            advantagesItems[0].style.display = 'none';
            advantagesItems[1].style.display = 'none';
        }
    })
}


win.addEventListener('change', function () {
    if (this.matches) {
        advantagesItems[2].style.display = 'flex';
        advantagesItems[1].style.display = 'flex';
        advantagesItems[0].style.display = 'flex';
    }

    if (!this.matches) {
        advantagesItems[2].style.display = 'none';
        advantagesItems[1].style.display = 'none';
        advantagesItems[0].style.display = 'flex';
    }
})
}
