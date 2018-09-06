var DataCorrect = false;
//关闭我要报名遮罩层
function closeSuswind(){
    var obj = document.getElementById("Suswind");
    obj.style.display= "none";
}
//返回到顶部
function toTop(){
     $('body,html').animate({scrollTop:0});
}

//点击我要报名
function moveToSign(){
    // $('body,html').animate({scrollTop:5200});
    $('html, body').animate({
        scrollTop: $("#signUp").offset().top-70
    }, 1000);
}

//点击关于先之岗位胜任能力研习社
function about(){
    $('body,html').animate({scrollTop:9000});
}
//校验用户输入的数据
function onInputChange(args){
        var name = document.getElementById("name").value;
        var company = document.getElementById("company").value;
        var number = document.getElementById("phoneNumber").value;
        var obj = document.getElementById("submit");
        var numberEffective = false;

        var reg=/^1[1|2|3|4|5|6|7|8|9][0-9]\d{4,8}$/i;//验证手机正则
        if(!reg.test(number) || number.length != 11){
            numberEffective = false;
        }else{
            numberEffective = true;
        }

        if(name != "" && company != "" && numberEffective){
            DataCorrect = true;
            obj.style.backgroundImage = "url(https://f3-xz.veimg.cn/activity/2018/07/ihma/pc/img/btn2.png)";
            obj.style.color = "#fff";
            obj.style.cursor = "pointer";
        }else{
            DataCorrect = false;
            obj.style.backgroundImage = "url(https://f3-xz.veimg.cn/activity/2018/07/ihma/pc/img/btn3.png)";
            obj.style.color = "#000";
            obj.style.cursor = "not-allowed";
        }
}

//提交报名数据
function onSubmit(){
    if(DataCorrect){
        this.ajaxData();
    }else{
        return;
    }
}

//aJax请求
function ajaxData(){
    var name = document.getElementById("name").value;
    var company_name = document.getElementById("company").value;
    var tel = document.getElementById("phoneNumber").value;
    var resource_name = $('#isVip input[name="isVip"]:checked ').val();
    var data={
        name:name,
        company_name:company_name,
        tel:tel,
        resource_name:resource_name,
        type:22,
        format:'jsonp'
    }
    $.ajax({
       async:true,
       url:'http://api.9first.com/mv1/apply/apply',
       type:'get',
       data:data,
       dataType:'jsonp',
       jsonp: "callback",
       jsonpCallback:"flightHandler",
       success: function(json){
         if(json.status==1){
           alert('报名成功！先之岗位胜任能力研习社将在1-3个工作日与您联系，谢谢您的支持。')
           document.getElementById("name").value = "";
           document.getElementById("company").value = "";
           document.getElementById("phoneNumber").value = "";
           setTimeout(function(){
               window.location.reload()
           },1000)
         }else{
           alert('您已经提交过报名信息！工作人员将在1-3个工作日内联系您。谢谢支持！')
         }
       },
       error: function(){
         alert('报名失败！');
       }
     })
}

$(document).ready(function () {
    $("ul#menus").on("click","li",function(){
        // $(this).addClass("green").siblings().removeClass("green");
        $("ul#menus").find('.green').removeClass("green");
        $(this).find('a').addClass("green");
        // $(this).children("ul:eq(0)").children("li:eq(0)").find("a").addClass("green").siblings().removeClass("green");
        switch($(this).index()){
            case 0:
                {
                    window.location.reload();
                }
                break;
            case 1:
                {
                     $('html, body').animate({
                         scrollTop: $("#topic").offset().top-100
                     }, 1000);
                }
                break;
            case 2:
                {
                     $('html, body').animate({
                         scrollTop: $("#allSupervisor").offset().top-100
                     }, 1000);
                }
                break;
            case 3:
                {
                     $('html, body').animate({
                         scrollTop: $("#signUp").offset().top-70
                     }, 1000);

                }
                break;
            case 4:
                {
                    $('html, body').animate({
                        scrollTop: $("#lookBack").offset().top-100
                    }, 1000);
                }
                break;
            case 5:
                {
                    $('html, body').animate({
                        scrollTop: $("#bepartner").offset().top-70
                    }, 1000);
                }
                break;
            case 6:
                {
                    $('html, body').animate({
                        scrollTop: $("#aboutxz").offset().top-100
                    }, 1000);
                }
                break;
        }
 });

 $(window).scroll(function(){
     var srollPos = $(window).scrollTop();    //滚动条距顶部距离(页面超出窗口的高度)
     var obj = document.getElementById("top");
    if(srollPos>300){
        obj.style.display = "block";
    }else{
        obj.style.display = "none";
    }
 });

});
