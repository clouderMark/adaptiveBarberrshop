export function mistake() {
    let mistake = document.querySelector('.mistake');
    let mistakeClose = mistake.querySelector('.mistake__button');
    let feedback = document.querySelector('.feedback');
    let feedbackInputs = feedback.querySelectorAll('.feedback__input');
    let formRegisterButton = document.querySelector('.form-register__button');

    let success = document.querySelector('.success');
    let successButton = success.querySelector('.success__button');

    successButton.addEventListener('click', function () {
        success.classList.remove('modal__show')
    })

    mistakeClose.addEventListener('click', function (evt) {
        evt.preventDefault();
        mistake.classList.toggle('modal__show');
    })

    formRegisterButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        for (let feedbackInput of feedbackInputs) {
            if (feedbackInput.value.length === 0) {
                evt.preventDefault();
                mistake.classList.add('modal__show');
                feedbackInput.classList.add('feedback__input--empty');
            }
            else {
                success.classList.add('modal__show');
            }

        }
    })

    for (let feedbackInput of feedbackInputs) {
        feedbackInput.addEventListener('keydown', function () {
            feedbackInput.classList.remove('feedback__input--empty');
        })
    }

    window.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 27) {
            if (mistake.classList.contains('modal__show')) {
                evt.preventDefault();
                mistake.classList.toggle('modal__show');
            }
        }
    })
}


