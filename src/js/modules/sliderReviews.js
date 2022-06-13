export function sliferReviews() {
    let reviewsToggle = document.querySelectorAll('.reviews__toggle');
    let reviewsItem = document.querySelectorAll('.reviews__item');

    let value = 0;

    for (let reviewToggle of reviewsToggle) {
        reviewToggle.addEventListener('click', function () {
            value = reviewToggle.value;
            if (value == 0) {
                btnNext.disabled = false;
                reviewsItem[1].style.display = 'none';
                reviewsItem[0].style.display = 'flex';
                reviewsItem[2].style.display = 'none';
            }
            if (value == 1) {
                btnBack.disabled = false;
                btnNext.disabled = false;
                reviewsItem[1].style.display = 'flex';
                reviewsItem[0].style.display = 'none';
                reviewsItem[2].style.display = 'none';
            }
            if (value == 2) {
                btnBack.disabled = false;
                reviewsItem[2].style.display = 'flex';
                reviewsItem[0].style.display = 'none';
                reviewsItem[1].style.display = 'none';
            }
        })
    }

    let btnBack = document.querySelector('.reviews__button--back');
    let btnNext = document.querySelector('.reviews__button--next');

    btnBack.addEventListener('click', function () {
        btnNext.disabled = false;
        if (value == 0) {
            btnBack.disabled = true;
        } else {
            value--
            reviewsToggle[value].checked = true;
        }

        if (value == 0) {
            reviewsItem[1].style.display = 'none';
            reviewsItem[0].style.display = 'flex';
            reviewsItem[2].style.display = 'none';
        }
        if (value == 1) {
            reviewsItem[1].style.display = 'flex';
            reviewsItem[0].style.display = 'none';
            reviewsItem[2].style.display = 'none';
        }
        if (value == 2) {
            reviewsItem[2].style.display = 'flex';
            reviewsItem[0].style.display = 'none';
            reviewsItem[1].style.display = 'none';
        }
    })

    btnNext.addEventListener('click', function () {
        btnBack.disabled = false;
        if (value == reviewsItem.length - 1) {
            btnNext.disabled = true;
        } else {
            value++
            reviewsToggle[value].checked = true;
        }
        if (value == 0) {
            reviewsItem[1].style.display = 'none';
            reviewsItem[0].style.display = 'flex';
            reviewsItem[2].style.display = 'none';
        }
        if (value == 1) {
            reviewsItem[1].style.display = 'flex';
            reviewsItem[0].style.display = 'none';
            reviewsItem[2].style.display = 'none';
        }
        if (value == 2) {
            reviewsItem[2].style.display = 'flex';
            reviewsItem[0].style.display = 'none';
            reviewsItem[1].style.display = 'none';
        }
    })
}