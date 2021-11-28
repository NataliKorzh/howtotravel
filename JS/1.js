function testWebP(i){
    var t=new Image;
    t.onload=t.onerror=function(){
        i(2==t.height)
    },
    t.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP((function(i){
        1==i?document.querySelector("body").classList.add("webp"):document.querySelector("body").classList.add("no-webp")})),$(document).ready((function(){$(".logo").click(()=>{$("html, body").animate({
            scrollTop:$("body").offset().top})
        })})),
$(document).ready((function(){
    $(".block-intro__arrow").click(()=>{$("html, body").animate({scrollTop:$("#properties").offset().top})})})),
    $(document).ready((function(){
        $(".js-tab-trigger").click((function(){
            const i=$(this).attr("data-tab"),
            t=$('.js-tab-content[data-tab="'+i+'"]');
            $(".js-tab-content").hide(),t.fadeIn().css({display:"flex"}),
            $(".js-tab-trigger.active").removeClass("active"),$(this).addClass("active"),
            $(".js-tab-content.active").removeClass("active"),t.addClass("active")}))})),
$(document).ready((function(){
    $(".js-menu-toggler").click((function(){
        $(this).toggleClass("toggler--open"),
            console.log($(this)),$(".js-menu").fadeToggle(),$(".block-nav__header").toggleClass("toggled")}))})),$(document).ready((function(){document.querySelectorAll(".nav__nav-item").forEach(i=>{i.addEventListener("click",i=>{const t=i.target.getAttribute("data-tab");i.target.classList.add("active"),"products"===t||"faqs"===t?$("html, body").animate({scrollTop:$("#"+t).offset().top-100},1e3):$("html, body").animate({scrollTop:$("#"+t).offset().top},1e3)})})}));

const testimonials=[{
    rating:5,
    description:"I have tried another product after using this one successfully, <br> and I am Back for good! The flavour, the lightness of the oil and <br> the health benefits I have gotten with this oil are amazing!",
    author:"Mark J.",
    image:"Images/dear.jpg"
},{
    rating:5,
    description:"I have tried another product after using this one successfully, <br> and I am Back for good! The flavour, the lightness of the oil and <br> the health benefits I have gotten with this oil are amazing!",
    author:"Mark J.",
    image:"Images/lake.jpg"
},{
    rating:5,
    description:"I have tried another product after using this one successfully, <br> and I am Back for good! The flavour, the lightness of the oil and <br> the health benefits I have gotten with this oil are amazing!",
    author:"Mark J.",
    image:"Images/green.jpg"
},{
    rating:5,
    description:"I have tried another product after using this one successfully, <br> and I am Back for good! The flavour, the lightness of the oil and <br> the health benefits I have gotten with this oil are amazing!",
    author:"Mark J.",
    image:"Images/me.jpg"
}],

feedbackSlider=$(".feedback");
class Testimonial{
    constructor(i){
        this.rating=i.rating,
        this.description=i.description,
        this.author=i.author,
        this.image=i.image
    }
    print(){
        let i='<div class="feedback__item">';
        i+='<div class="img-slides">',
        i+=`<div class="img-slides__slide"><img src="${this.image}" alt=""></div>`,
        i+="</div>",
        i+='<div class="testimonial">',
        i+='<div class="testimonial__rating">';
        for(let t=0;t<this.rating;t++)
        
        i+='<svg class="star"><use xlink:href="#star"></use></svg>';
        i+="</div>",
        i+=`<div class="testimonial__description">${this.description}</div>`,
        i+=`<div class="testimonial__author"><svg class="line"><use xlink:href="#line"></use></svg>${this.author}</div>`,
        i+="</div>",
        i+="</div>",
    
        feedbackSlider.append(i)}}
        
class TestimonialsList{constructor(i){
    this.data=i
}
    print(){
        this.data.forEach(i=>{new Testimonial(i).print()})}}
        
    
    testimonialList=new TestimonialsList(testimonials),
    testimonialList.print(),

$(document).ready((function(){
    $(".feedback").slick({
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:!0,
        dots:!1,
        autoplaySpeed:3500,
        fade:!0,
        nextArrow:'<svg class="btn-arrow btn-arrow-right testimonials"><use xlink:href="#arrow"></use></svg>',
        prevArrow:'<svg class="btn-arrow btn-arrow-left testimonials"><use xlink:href="#arrow"></use></svg>',
    
        responsive:[
            {
                breakpoint:1500,
                settings:{
                    arrows:!0,
                    slidesToShow:1
                }
            },{
                breakpoint:1035,
                settings:{arrows:!1,
                slidesToShow:1
            }
        }
    ]
})
})
),
    $(document).ready((function(){
        $(".block-question").click((function(){
            $(".block-question__minus").css({display:"none"}),
            $(".block-question__plus").css({display:"block"}),
            $(this).hasClass("active")?($(".block-question").removeClass("active"),
            $(this).removeClass("active"),
            $(this).children(".block-question__plus").css({display:"block"}),
            $(this).children(".block-question__minus").css({display:"none"}),$(".block-answer").not($(this).next()).slideUp(),
            $(this).next(".block-answer").slideToggle()):($(".block-question").removeClass("active"),
            $(this).addClass("active"),
            $(this).children(".block-question__minus").css({display:"block"}),
            $(this).children(".block-question__plus").css({display:"none"}),$(".block-answer").not($(this).next()).slideUp(),
            $(this).next(".block-answer").slideToggle())}))}));

