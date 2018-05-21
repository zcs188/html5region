// JavaScript Document

$(document).ready(function(e) {
	/* 编辑地址 弹出框 */
	$('.mrdz').click(function(){
		$(this).toggleClass('on');
		if($(this).hasClass('on'))
		{
			$('.mrdz input').prop('checked',true);
		}
		else
		{
			$('.mrdz input').prop('checked',false);
		}
		
	});
	//首页底部高度
	$('.page-pb').height($('.footer').height());
	
	//产品列表分类弹出框
	$('.top-typebtn').click(function(){
		$('.sx_fix').css('display','block').animate({width:'100%'},300);
	});
	
	$('.sx_fix').click(function(){
		$(this).css('display','none').animate({width:'0px'},300);
	});
	$('.sx_fc').click(function(e){
		e.stopPropagation();
	});
	
	/* 评价商品 */
	$('.pinj_bt .t-right').css({'height':$('.pinj_bt .t-left').height(),'line-height':$('.pinj_bt .t-left').height()+'px'});
	$('.pinj_serv dt').click(function(){
		var a = $(this).parents('li').index();
		var i = $(this).index();
		var j = 0;
		var len =$(this).parents('li').children().children().length;
		//alert(len);
		for(j = 0 ; j <= i ; j++)
		{
			$(this).parents('li').children().children().eq(j).addClass('on');
		}
		
		for(j = i+1 ; j <= len ; j++)
		{
			$(this).parents('li').children().children().eq(j).removeClass('on');
		}
	});
	
});

$(window).load(function(){
	//首页底部高度
	$('.page-pb').height($('.footer').height());
	
	//个人中心 头像、积分 上下居中
	var vip_bg = $('.vip_bg').height();
	var vip_tx = $('.vip_tx').height();
	var vipldl = $('.vip_tx .t-left dl').height();
	var viprdl = $('.vip_tx .t-right div').height();
	$('.vip_tx').css('top',(vip_bg-vip_tx)/2);
	$('.vip_tx .t-left dl').css('margin-top',(vip_tx-vipldl)/2);
	$('.vip_tx .t-right div').css('margin-top',(vip_tx-viprdl)/2);
	
});

$(window).resize(function(){
	//首页底部高度
	$('.page-pb').height($('.footer').height());
	
	//个人中心 头像、积分 上下居中
	var vip_bg = $('.vip_bg').height();
	var vip_tx = $('.vip_tx').height();
	var vipldl = $('.vip_tx .t-left dl').height();
	var viprdl = $('.vip_tx .t-right div').height();
	$('.vip_tx').css('top',(vip_bg-vip_tx)/2);
	$('.vip_tx .t-left dl').css('margin-top',(vip_tx-vipldl)/2);
	$('.vip_tx .t-right div').css('margin-top',(vip_tx-viprdl)/2);
	
});