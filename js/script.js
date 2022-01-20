
const $prevSlideBtn = document.querySelector('.button__prev');
const $nextSlideBtn = document.querySelector('.button__next');
const $sliderWrap = document.querySelector('.slider__wrapper');
// const $sliderContainer = document.querySelector('.slider');

let phoneFields = document.querySelector(".phone");
let im = new Inputmask("+38 (099) 999-99-99");

const $modaleForm = document.querySelector(".modale");
const $contactBtn = document.querySelector(".contact__button");
const $formClose = document.querySelector(".form__close");
const $burgerButton = document.querySelector(".humburger-menu__button");
const $burgerMenu = document.querySelector(".menu");
const $header = document.querySelector(".header-top");

// * Slider

let activeSlideIndex = 0;

$prevSlideBtn.addEventListener('click', () => {
    changeSlide('prev')
})

$nextSlideBtn.addEventListener('click', () => {
    changeSlide('next')
})

function changeSlide(direction) {
    const $counterSlide = $sliderWrap.querySelectorAll('img').length;
    const width = $sliderWrap.querySelector('img').clientWidth;
    
    if(direction === 'prev') {
        activeSlideIndex++
        if(activeSlideIndex === $counterSlide) {
            activeSlideIndex = 0
        }
    } else if(direction === 'next'){
        activeSlideIndex--;
        if(activeSlideIndex < 0) {
            activeSlideIndex = $counterSlide - 1
        }
    }
    $sliderWrap.style.transform = `translateX(-${activeSlideIndex * width}px)`;
}

setInterval(() => {
    $nextSlideBtn.click()
}, 4000)

//* Отправка формы



im.mask(phoneFields);

new JustValidate('.js-form', {
    tooltip: {
        fadeOutTime: 6000, // default value - 5000 
    },
    focusWrongField: false,
    colorWrong: '#dc7f7f',

    rules: {
        name: {
            required: true,
            minLength: 2
        },
        email: {
            required: true,
            email: true
        },
        phone: {
            required: true
        }
    },
    messages: {
        name: {
            required: "Поле обязательно для заполнения",
            minLength: "Очень короткое имя"
        },
        email: {
            required: "Поле обязательно для заполнения",
            email: "Неправильный ввод"
        },
        phone: {
            required: "Поле обязательно для заполнения"
        }
    },

    submitHandler: function (form) {
        let xhr = new XMLHttpRequest();

        xhr.open("POST", "mail.php", true);

        let FormData = new FormData(form);

        xhr.addEventListener("load", function() {
            if( xhr.readyState === 4) {
                switch (xhr.status) {
                    case 200:
                        console.log("Form send");
                        form.reset();
                        break;
                    case 404:
                        console.log("Warning");
                        break;
                    default:
                    console.log("Error server");
                    break;
                }
            }
        });

        xhr.send(FormData);
    },
});

// * modale window
    
$contactBtn.addEventListener("click", function () {
    $modale.classList.add("modale--active");  
});

window.addEventListener("click", function (evt) {
    if(evt.target === $modaleForm || evt.target === $formClose) {
        $modaleForm.classList.remove("modale--active");
    } 
});
  

// * burger menu
$burgerButton.addEventListener("click", function () {
       $burgerMenu.classList.toggle("menu--active");
       $header.classList.toggle("menu--active"); 
    });
  

