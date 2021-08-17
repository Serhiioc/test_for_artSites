let mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    // centeredSlides: true,
    // centerInsufficientSlides: true,
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 4000,
      }
});
const $swiper = document.querySelector('.slider');
  
const $slide = document.querySelectorAll('.swiper-img');

const slideShow = () => {
    $slide.forEach(element => {
        if (element.clientWidth > window.innerWidth) {
          console.log('good');
          $swiper.style.display = "none";
        } 
        });
}

slideShow();


//* Отправка формы


let phoneFields = document.querySelector(".phone");
let im = new Inputmask("+38 (099) 999-99-99");
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

const $modale = document.querySelector(".modale");
const $feedback = document.querySelector(".contact__button");
    
$feedback.addEventListener("click", function () {
    $modale.classList.add("modale--active");  
});

const $formClose = document.querySelector(".form__close");

window.addEventListener("click", function (evt) {
    if(evt.target === $modale || evt.target === $formClose) {
        $modale.classList.remove("modale--active");
    } 
});

  
const $burgerButton = document.querySelector(".humburger-menu__button");
const $burgerMenu = document.querySelector(".menu");
const $header = document.querySelector(".header-top");
  
  
$burgerButton.addEventListener("click", function () {
       $burgerMenu.classList.toggle("menu--active");
       $header.classList.toggle("menu--active"); 
    });
  

