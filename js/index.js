/**
 * Created by Administrator on 2016/9/1 0001.
 */
$(function(){

    /*tab�л��¼�*/
    $(".commodity-kinds ul li").eq(0).addClass("active");
    $(".commodity-box .commodities").eq(0).show().siblings(".commodities").hide();
    $(".commodity-kinds ul li").click(function(){

        $(this).addClass("active").siblings("li").removeClass("active");

        $(".commodity-box .commodities").eq($(this).index()).show().siblings(".commodities").hide();

    });




    /*var height = $(".leftPart").height();
    $(".rightPart").css({
        'min-height': height
    });

    $(".toTop").click(function(){
        $("body,html").animate({
              'scrollTop':0
        })
    })*/

    /*��������*/
    $('.fixed_fd').css({'width': '100%','height':'100%'});
    $('#navList').click(function(){
        var title = $(this).attr("title");
        if(title == 'off'){
            $('.fixed_fd').animate({
                'left': 0
            }).css({
                'display':'block'
            });
            $(this).attr("title","on");
            $('body').css({"overflow":"hidden"});
        }else{
            $('.fixed_fd').animate({
                'left': '100%'
            }).css({

            });
            $(this).attr("title","off");
            $('body').css({"overflow":"auto"});
        }
    });

    $('.fix_bg').click(function(){
        $('.fixed_fd').animate({
            'left': '100%'
        });
        $("#navList").attr("title","off");
        $('body').css({"overflow":"auto"});
    });
    $('.fixed_cont').children().click(function(e){
        e.stopPropagation();
    });
    /*�������� end*/
    /*�ղ�*/

    $('.collect').click(function(){
        $(this).toggleClass('on');
        if($(this).hasClass('on'))
        {
            $(this).addClass('active')
                   .find('input').prop("checked",true);

        }else
        {
            $(this).removeClass('active')
                   .find('input').prop("checked",false);
        }
    });

    /*�ղ� end*/

    /*��Ʒѡ����*/
    $('.standard li').eq(0).addClass("active");
    $('.standard li').click(function(){

        $(this).addClass('active').siblings('li').removeClass('active');

    });


    $(".product-tab ul li").eq(0).addClass("active");
    $(".product-tab-box .tab-box").eq(0).show().siblings(".tab-box").hide();
    $(".product-tab ul li").click(function(){

        $(this).addClass("active").siblings("li").removeClass("active");

        $(".product-tab-box .tab-box").eq($(this).index()).show().siblings(".tab-box").hide();

    });
    /*��Ʒѡ���� end*/



    /*����ѡ�񵯴�*/
   /* var bodyw = $(window).width();
    var bodyh = $(window).height();
    $('.fixed_fd').css({'width':bodyw,'height':bodyh});
    var fw = $('.fixed_cont').width();
    var fh = $('.fixed_cont').height();
    $('.fixed_cont').css({'left':(bodyw-fw)/2+'px','top':(bodyh-fh)/2});

    $('.form-submit-btn').click(function(){
        $('.fixed_fd').show();
    });
    $('.i-know .know-btn').click(function(){
        $('.fixed_fd').hide();
    });
    $('.close').click(function(){
        $(".fixed_fd").hide();
    });

    $('.fixed_cont').children().click(function(e){
        e.stopPropagation();
    });*/

    /*��ַ����*/
    $(".my-addressBox .my-address .opera").click(function(){

            $(this).addClass('active')
                .find('input').prop("checked",true);

            $(this).parents(".my-address").siblings('.my-address').find('.opera').removeClass('active')
                .find('input').prop("checked",false);

    });

    /*����µ�ַ*/
    $('.address-import .default').click(function(){
        $(this).toggleClass('on');
        if($(this).hasClass('on'))
        {
            $(this).addClass('active')
                .find('input').prop("checked",true);

        }else
        {
            $(this).removeClass('active')
                .find('input').prop("checked",false);
        }
    });

    /*��������*/

    $('.goods-stars ul li').click(function(){

        $('.goods-stars ul li').each(function(){
            $(this).removeClass("active");
        });
        var index = $(this).index();
        for(var i = 0; i<=index; i++){

            $('.goods-stars ul li').eq(i).addClass('active');
        }
		/*var star-num = $('.goods-stars ul li.active').length;
		alert(star-num);*/
    });


    /*�ҵ��Ż�ȯ*/

    $(".ticket-kinds ul li").eq(0).addClass("active");
    $(".ticket-box .ticket").eq(0).show().siblings(".ticket").hide();
    $(".ticket-kinds ul li").click(function(){

        $(this).addClass("active").siblings("li").removeClass("active");

        $(".ticket-box .ticket").eq($(this).index()).show().siblings(".ticket").hide();

    });

    /*��ȡ�豸�߶Ȳ���ֵ*/

    $(".commodity").css({
        'min-height': $(window).height()-$(".header").height()-$(".height").height()
    });
    $(".commodity-kinds").css({
        'min-height': $(window).height()-$(".header").height()-$(".height").height()
    });
    $(".commodity-box").css({
        'min-height': $(window).height()-$(".header").height()-$(".height").height()
    })

});
//�Ӽ����
function updatedProduct(num){
    var ret_num ='';
    var num = parseInt(num);
    var numObj = $('.num');
    var buyNum = parseInt(numObj.val());
    if( num == -1) {
        ret_num = buyNum+num < 1 ? 1 : buyNum+num;
    } else {
        ret_num = buyNum+num;
    }
    numObj.val(ret_num);                  //���������Ʒ����
}