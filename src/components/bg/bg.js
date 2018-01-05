/**
 * Created by MOUle on 2017/11/14.
 */
(function(){
    require ('./bg.less')

    require('../../images/logo-banner.jpg')


    var bgModule = function(obj){
        var tpl = require('./bg.html');
        $(obj).prepend(tpl)
    }
    module.exports = bgModule;

}())