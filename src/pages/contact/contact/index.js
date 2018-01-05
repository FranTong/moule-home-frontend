/**
 * Created by MOUle on 2017/11/14.
 */
require('./index.less')
require ('../../../common/js/common');

require('../../../images/banner.jpg');
require('../../../images/site-banner-1.jpg');

//添加头部
var headerModule = require('../../../components/header/header.js');
new headerModule('#header');

//添加底部
var footerModule = require('../../../components/footer/footer.js');
new footerModule('#footer');
var html=require('./index.html')
$('#main-container').append(html)
var global = require('../../../common/js/global');
$(document).ready(function () {

  var title = "有问题的标签\" onclick=alert(11)"
  $('#xss').append('<span title=\"' + title + '>有问题的标签</span>')


  global.scroll.init('#banner');
  //获取验证码
  var countdown = 60;
  $('#getCode').click(function(obj){
    var myObj = $('#getCode')[0];
    var data = {
      mobile:$('#phone').val().trim()
    }
    if(data.mobile == '' || data.mobile.length != 11){
      return $('#message').html('填写手机号')
    }
    $.ajax({
      url:'/api/verifymobile',
      data:data,
      type:'POST',
      success:function(data){
        function down(myObj){
          if(countdown == 0){
            myObj.removeAttribute("disabled");
            myObj.innerHTML="获取验证码";
            countdown = 60;
            return;
          }else{
            myObj.setAttribute("disabled",true);
            myObj.innerHTML = "再次发送(" + countdown + ")";
            countdown--;
          }
          setTimeout(function(){
                down(myObj)}
              ,1000)
        }
        down(myObj)
      },
      error:function(xhr){
        var myXhr = JSON.parse(xhr.responseText);
        $('#message').html('请求过多，请稍后再试')
      }
    })

  })

  //发送申请
  $('#sendApply').click(function(){
    $('#message').html('')
    var data = {
      name:$('#name').val().trim(),
      phone:$('#phone').val(),
      verify:$('#code').val(),
      company:$('#company').val(),
      type:$('#type').val(),
      source:$('#channel').val()
    }
    if(data.name.length){
      var reg=/^[\u4E00-\u9FA5\w]{1,20}$/;
      var isok=reg.test(data.name);
      if(!isok){
        return $('#message').html('姓名格式不正确，请输入1-20位中文或字母');
      }
    }else{
      return $('#message').html('姓名格式不正确，请输入1-20位中文或字母');
    }
    if(data.phone == ''){
      return $('#message').html('请填写手机号')
    }
    if(data.phone.length){
      var reg=/^\d{2,20}$/;
      var isok=reg.test(data.phone);
      if(!isok){;
        return $('#message').html('手机号格式不正确');
      }
    }
    if(data.verify == ''){
      return $('#message').html('请填写验证码')
    }
    if(data.company ==''){
      return $('#message').html('请填写公司名')
    }
    if(data.type == '-1'){
      return $('#message').html('请选择咨询内容')
    }
    if(data.source == '-1'){
      return $('#message').html('请选择如何得知我们')
    }
    $.ajax({
      url:'/api/firm_contact',
      type:'POST',
      data:data,
      success:function(data){
        alert('提交申请成功，我们的安全顾问会在5个工作日内与您联系，请耐心等待。')
      },
      error:function(xhr){
        var myXhr = JSON.parse(xhr.responseText);
        $('#message').html(myXhr.err_msg)
      }
    })

  })


});



