/**
 * Created by MOUle on 2017/11/14.
 */
(function(){
    var Swiper=require('./swiper');
    window.onload=function(){
        var swiper = new Swiper('.swiper-container',{
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            speed:1000,
            loop:true,
            autoplayDisableOnInteraction : false,
            centeredSlides : true,
            slidesPerView:2,
            paginationClickable:true,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
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
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

  /*  module.exports=swiper;*/
})()


