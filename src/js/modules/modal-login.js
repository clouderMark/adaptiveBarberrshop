export function modalLoginForm() {
    let btnEnter = document.querySelector('.user-list__login');
    let modalLogin = document.querySelector('.modal__login');
    let btnClose = modalLogin.querySelector('.login__button--close');
    let inputLogin = modalLogin.querySelector('.form__login');
    let inputPassword = modalLogin.querySelector('.form__password');
    let loginForm = modalLogin.querySelector('.login__form');
    let btnCloseCross = modalLogin.querySelector('.modal__close');
    let storage = '';
    let isStorageSupport = true;
    let rememberMe = modalLogin.querySelector('.checkbox__input');

    try {
        storage = localStorage.getItem('login');
    } catch (err) {
        isStorageSupport = false;
    }

    btnEnter.addEventListener('click', function (evt) {
        evt.preventDefault();
        modalLogin.classList.toggle('modal__show');
        if (storage) {
            inputLogin.value = storage;
            inputPassword.focus();
        } else {
            inputLogin.focus(); 
        }
    })


    btnEnter.addEventListener('keydown', function (evt) {
        if (evt.code == 'Space') {
            evt.preventDefault();
            modalLogin.classList.toggle('modal__show');
            if (storage) {
                inputLogin.value = storage;
                inputPassword.focus();
            } else {
                inputLogin.focus();
            }
        }
    })

    loginForm.addEventListener('submit', function (evt) {
        if (!inputLogin.value || !inputPassword.value) {
            evt.preventDefault();
            if (!inputLogin.value) {
                inputLogin.classList.add('form__input--forgoten');
            }
            if (!inputPassword.value) {
                inputPassword.classList.add('form__input--forgoten');
            }
        } else {
            if (rememberMe.checked) {
                localStorage.setItem('login', inputLogin.value);
            }
        }
    })

    inputLogin.addEventListener('keydown', function () {
        inputLogin.classList.remove('form__input--forgoten');
    })

    inputPassword.addEventListener('keydown', function () {
        inputPassword.classList.remove('form__input--forgoten');
    })

    btnClose.addEventListener('click', function () {
        modalLogin.classList.remove('modal__show');
        btnEnter.focus();
    })

    btnCloseCross.addEventListener('click', function () {
        modalLogin.classList.remove('modal__show');
        btnEnter.focus();
    })

    window.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 27) {
            if (modalLogin.classList.contains('modal__show')) {
                evt.preventDefault();
                modalLogin.classList.remove('modal__show');
                btnEnter.focus();
            }
        }
    })
}
