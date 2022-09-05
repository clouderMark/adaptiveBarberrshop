export function mainMenu() {
    let btnOppen = document.querySelector('.toggle__button');
    let mainMenu = document.querySelector('.main-nav');
    let mainTitle = document.querySelector('.toggle__title');
    let modalLogin = document.querySelector('.modal__login');

    btnOppen.classList.remove('toggle__button--oppened');
    mainMenu.classList.remove('main-nav--oppened');
    mainTitle.classList.remove('toggle__title--oppened');



    btnOppen.addEventListener('click', function () {
        mainMenu.classList.toggle('main-nav--oppened');
        btnOppen.classList.toggle('toggle__button--oppened');
        mainTitle.classList.toggle('toggle__title--oppened');
        if (modalLogin.classList.contains('modal__show')) {
            modalLogin.classList.remove('modal__show')
        }
    })

    window.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 27) {
            if (mainMenu.classList.contains('main-nav--oppened')) {
                evt.preventDefault();
                mainMenu.classList.remove('main-nav--oppened');
                btnOppen.classList.remove('toggle__button--oppened');
                mainTitle.classList.remove('toggle__title--oppened');
            }
        }
    })
}