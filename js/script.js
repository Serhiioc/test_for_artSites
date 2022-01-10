
const $prevBtn = document.querySelector('.button__prev');
const $nextBtn = document.querySelector('.button__next');
const $slider = document.querySelector('.slider__wrapper');
const $container = document.querySelector('.slider');
const $counterSlide = $slider.querySelectorAll('img').length;

let activeSlideIndex = 0;

let phoneFields = document.querySelector(".phone");
let im = new Inputmask("+38 (099) 999-99-99");

const $modale = document.querySelector(".modale");
const $feedback = document.querySelector(".contact__button");
const $formClose = document.querySelector(".form__close");
const $burgerButton = document.querySelector(".humburger-menu__button");
const $burgerMenu = document.querySelector(".menu");
const $header = document.querySelector(".header-top");

// * Slider

$prevBtn.addEventListener('click', () => {
    changeSlide('prev')
})

$nextBtn.addEventListener('click', () => {
    changeSlide('next')
})

function changeSlide(direction) {
    if(direction === 'prev') {
        activeSlideIndex++
        console.log($counterSlide);
        if(activeSlideIndex === $counterSlide) {
            activeSlideIndex = 0
        }
    } else if(direction === 'next'){
        activeSlideIndex--;
        if(activeSlideIndex < 0) {
            activeSlideIndex = $counterSlide - 1
        }
    }
    const width = $slider.querySelector('img').clientWidth;
    $slider.style.transform = `translateX(-${activeSlideIndex * width}px)`;
}

setInterval(function() {
    $nextBtn.click()
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
    
$feedback.addEventListener("click", function () {
    $modale.classList.add("modale--active");  
});

window.addEventListener("click", function (evt) {
    if(evt.target === $modale || evt.target === $formClose) {
        $modale.classList.remove("modale--active");
    } 
});
  
$burgerButton.addEventListener("click", function () {
       $burgerMenu.classList.toggle("menu--active");
       $header.classList.toggle("menu--active"); 
    });
  

