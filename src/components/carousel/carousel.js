/**
 * Created by MOUle on 2017/11/14.
 */

    require('./carousel.css')
    require('./swiper.css')

    var Swiper = require('./swiper')
  /*  require('./init')*/
    require('../../images/mini-banner-1.jpg')
    require('../../images/mini-banner-2.jpg')
    require('../../images/mini-banner-3.jpg')
    require('../../images/mini-banner-4.jpg')
    require('../../images/logo-line-1.jpg')
    require('../../images/logo-line-2.jpg')
    require('../../images/logo-line-3.jpg')
    require('../../images/logo-line-4.jpg')

    var carousel=function(obj){
        var html=require('./carousel.html');
        $(obj).prepend(html);
        var swiper = new Swiper('.swiper-container',{
            autoplay: {
                delay: 3000,
               /* disableOnInteraction: false,*/
            },
            speed:200,
            loop:true,
            autoplayDisableOnInteraction : false,
            centeredSlides : true,
            slidesPerView:2,
           /* simulateTouch : false,*/
           allowTouchMove:false,
            preventClicks:true,
           /* paginationClickable:true,*/
         /*   prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',*/
            /* onInit:function(swiper){
             swiper.slides[2].className="swiper-slide swiper-slide-active";//第一次打开不要动画
             },*/
            breakpoints: {
                668: {
                    slidesPerView: 1,
                }
            },
            pagination: {
                el: '.swiper-pagination',
               /* clickable: true,*/
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        $('#carousel').on('click','.swiper-slide-prev',function(){
            swiper.slidePrev();
        })
        $('#carousel').on('click','.swiper-slide-next',function(){
            swiper.slideNext();
        })

    };

    module.exports=carousel;



