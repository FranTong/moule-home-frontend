/**
 * Created by MOUle on 2017/10/21.
 */
(function(){
    require ('./footer.less');
    var footerModule = function(obj){
        var tpl = require('./footer.html');
        $(obj).prepend(tpl)
    }
    module.exports = footerModule;

}())