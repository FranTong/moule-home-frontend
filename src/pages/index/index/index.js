/**
 * Created by MOUle on 2017/11/14.
 */

(function(){
    require ('../../../common/js/common');
    require ('./index.less')
    require('../../../images/banner.jpg');
    require('../../../images/b-banner.jpg');

    require('../../../images/m-banner.jpg')

    //添加头部
    var headerModule = require('../../../components/header/header.js');
    new headerModule('#header');

    //添加底部
    var footerModule = require('../../../components/footer/footer.js');
    new footerModule('#footer');
    //主体内容
    var tpl = require('./index.html')
    $('#main-container').append(tpl);

    //背景滚动
    var bg_tpl = require('../../../components/bg/bg.js')
    new bg_tpl('#bg')

    var carousel=require('../../../components/carousel/carousel')
    new carousel('#carousel')

    //地图点击
    var map_tpl = require('../../../components/map/map.js')
    new map_tpl('#main-map')
    var global = require('../../../common/js/global');
    $(document).ready(function () {
        global.scroll.init('#homeTitle');
        var $hrefName = location.hash;
        if($hrefName){
            $hrefName = $hrefName.substr(1);
            scrollAnimate($hrefName);
        }
        $("[href *= '-section']").click(function(e){
            //e.preventDefault();
            var href = $(this).attr("href");
            var idName = href.match(/#.+$/);
            if(idName && idName[0]){
                idName = idName[0].substr(1);
                scrollAnimate(idName);
            }
        })
    })

    function scrollAnimate(idName){
        var objOffsetTop = $('.' + idName).offset().top-50;
        $('html,body').animate({scrollTop:objOffsetTop + 'px'},500);
    }
})()


