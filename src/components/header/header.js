/**
 * Created by MOUle on 2017/10/21.
 */
(function(){
    require ('./header.less');

    var headerModule = function(obj){
        var tpl = require('./header.html');
        $(obj).prepend(tpl);
    };
    module.exports = headerModule;

})()