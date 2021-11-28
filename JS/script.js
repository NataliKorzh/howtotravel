//Test webp

function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  
  testWebP(function (support) {
    if (support == true) {
      document.querySelector("body").classList.add("webp");
    } else {
      document.querySelector("body").classList.add("no-webp");
    }
  });
  ;

// scroll
$(document).ready(function () {
    $('.logo').click(() => {
        $('html, body').animate(
            {
                scrollTop: $('body').offset().top
            })
    });
});

$(document).ready(function () {
    $('.block-intro__arrow').click(() => {
        $('html, body').animate(
            {
                scrollTop: $('#properties').offset().top
            })
    });
});

$(document).ready(function () {
    $('.js-tab-trigger').click(function () {
        const id = $(this).attr('data-tab'),
            content = $('.js-tab-content[data-tab="' + id + '"]');
        $('.js-tab-content').hide();
        content.fadeIn().css({ 'display': 'flex' });


        $('.js-tab-trigger.active').removeClass('active');
        $(this).addClass('active');

        $('.js-tab-content.active').removeClass('active');
        content.addClass('active');

    });
});

//slider 

const testimonials = [{
    rating: 5,
    description: 'Есть в этом что-то волшебное: уезжаешь одним человеком, <br> а возвращаешься совершенно другим.',
    author:"Кейт Дуглас Уигген",
    image: 'Images/dears.jpg'
}, {
    rating: 5,
    description: 'Жить необязательно. <br> Путешествовать — необходимо!',
    author:"Уильям Берроуз",
    image: 'Images/lake.jpg'
}, {
    rating: 5,
    description: 'Каждый мечтатель знает, что абсолютно реально скучать по месту, <br>где ты никогда не был даже больше, <br>чем по тому, где был.',
    author:"Джудит Турман",
    image: 'Images/irland.jpg'
}, {
    rating: 5,
    description: 'Путешествия учат больше, <br>чем что бы то ни было. Иногда один день, <br>проведенный в других местах, дает больше,<br> чем десять лет жизни дома.',
    author:"Анатоль Франс",
    image: 'Images/tenefife.jpg'
}]

const feedbackSlider = $('.feedback');
class Testimonial {
    constructor(data) {
        this.rating = data.rating;
        this.description = data.description;
        this.image = data.image;
    }
    print() {
        let result = `<div class="feedback__item">`;

        result += `<div class="img-slides">`;
        result += `<div class="img-slides__slide"><img src="${this.image}" alt=""></div>`;
        result += `</div>`;

        result += `<div class="testimonial">`;
        result += `<div class="testimonial__rating">`;
        for (let i = 0; i < this.rating; i++) {
            result += `<svg class="star"><use xlink:href="#star"></use></svg>`
        }
        result += `</div>`;
        result += `<div class="testimonial__description">${this.description}</div>`;
        result += `<div class="testimonial__author"><svg class="line"><use xlink:href="#line"></use></svg>${this.author}</div>`;
        result += `</div>`;


        result += `</div>`;



        feedbackSlider.append(result);
    }
}


class TestimonialsList {
    constructor(data) {
        this.data = data;
    }

    print() {
        this.data.forEach(element => {
            const testimonial = new Testimonial(element);
            testimonial.print();
        })
    }
}

testimonialList = new TestimonialsList(testimonials);
testimonialList.print();


$(document).ready(function () {
    $('.feedback').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        autoplaySpeed: 2500,
        fade: true,
        nextArrow: '<svg class="btn-arrow btn-arrow-right testimonials"><use xlink:href="#arrow"></use></svg>',
        prevArrow: '<svg class="btn-arrow btn-arrow-left testimonials"><use xlink:href="#arrow"></use></svg>',
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    arrows: true,
                    slidesToShow: 1,

                }
            }, {
                breakpoint: 1035,
                settings: {
                    arrows: false,
                    slidesToShow: 1,

                }
            }
        ]
    });
});

//frequently asked questions

$(document).ready(function () {
    $('.block-question').click(function () {
        $('.block-question__minus').css({ 'display': 'none' });
        $('.block-question__plus').css({ 'display': 'block' });
        if ($(this).hasClass('active')) {
            $('.block-question').removeClass('active');
            $(this).removeClass('active');
            $(this).children('.block-question__plus').css({ 'display': 'block' });
            $(this).children('.block-question__minus').css({ 'display': 'none' });
            $('.block-answer').not($(this).next()).slideUp();
            $(this).next('.block-answer').slideToggle();
        } else {
            $('.block-question').removeClass('active');
            $(this).addClass('active');
            $(this).children('.block-question__minus').css({ 'display': 'block' });
            $(this).children('.block-question__plus').css({ 'display': 'none' });
            $('.block-answer').not($(this).next()).slideUp();
            $(this).next('.block-answer').slideToggle();
        }
    });
});

