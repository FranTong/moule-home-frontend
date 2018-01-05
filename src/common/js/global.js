/**
 * Created by bk on 2017/11/14.
 */
var global = {
    /*头部滚动，下拉渐变*/
    scroll : {
    startOpacity : 1,//透明度
    bkH : 0,
    headH : 50,
    step : 0,
    singleStep : 0,
    finaOpacity : 0,
    awayTop : 0,
    starOpacity : 0.2,
    init : function(elem){
      this.bkH = $(elem).height();
      this.step = this.bkH - this.headH;
      this.singleStep = 0.8/this.step;
      this.finaOpacity = this.singleStep*window.scrollY+this.starOpacity;
      if(this.finaOpacity>1){
        this.finaOpacity = 1;
      }
      $('#headBk').css({'opacity':this.finaOpacity});
      $(window).scroll(function(){
        this.awayTop = window.scrollY;//$(document).scrollTop()
        this.finaOpacity = this.singleStep*this.awayTop+this.starOpacity;
        if(this.finaOpacity > 1.0 ||  this.finaOpacity == 1.0){
          this.finaOpacity = 1;
        }
        $('#headBk').css({'opacity':this.finaOpacity});
      }.bind(this));
    }
  }

};
module.exports = global;