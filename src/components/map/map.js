/**
 * Created by MOUle on 2017/11/14.
 */
(function(){
    require ('./map.less')

    require('../../images/earth.png')


    var mapModule = function(obj){
        var seter;
        var tpl = require('./map.html');
        $(obj).prepend(tpl);
        //地图点击;
        $('.city').on('click',function(){
            $('.city').removeClass('city-color')              //先移除全部的样式
            if(!$(this).hasClass('city-color')){              //改变当前的样式
                $(this).addClass('city-color')
            }
            var target = $(this).attr('data-city');
            $(".map-city:not(#target)").hide()                //显示地图上的坐标
            $('#'+target).show()
            var num = $(this).attr('num');
            clearInterval(seter);
            if( parseInt(num) === 9){
                timer(1)
            }else{
                timer(parseInt(num)+1)
            }
        })
        //轮播效果
        var timer = function(obj){
            seter=setInterval(function(){
                //从头开始
                var length = $('.city').length;
                $('.city').removeClass('city-color')              //先移除全部的样式
                $('#city-'+obj).removeClass('city-color').addClass('city-color');
                var tar = $('#city-'+obj).attr('data-city');
                $(".map-city:not(#target)").hide();
                $('#'+tar).show()
                obj++;
                if(obj > length){
                    obj = 1
                }
            },2500)
        };
        timer(2)



    }
    module.exports = mapModule;

}())