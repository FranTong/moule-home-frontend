/**
 * Created by MOUle on 2017/11/14.
 */
require('./index.less');
require ('../../../common/js/common');

require('../../../images/banner.jpg');
require('../../../images/site-banner-2.jpg');
require('../../../images/mjob-1.jpg');
require('../../../images/mjob-2.jpg');
require('../../../images/mjob-3.jpg');
require('../../../images/mjob-4.jpg');
require('../../../images/mjob-5.jpg');
require('../../../images/mjob-6.jpg');
require('../../../images/mjob-7.jpg');
require('../../../images/mjob-8.jpg');

//添加头部
var headerModule = require('../../../components/header/header.js');
new headerModule('#header');

//添加底部
var footerModule = require('../../../components/footer/footer.js');
new footerModule('#footer');
var html=require('./index.html');
$('#main-container').append(html);

var global = require('../../../common/js/global');
$(document).ready(function () {
  global.scroll.init('#banner');
});
$('#job').on('click','li>div',function(){
  var id=$(this).attr('data');
  var scroll=$('#'+id).offset().top-120;
  $('html,body').animate({scrollTop:scroll+'px'},1000,function(){})
})

