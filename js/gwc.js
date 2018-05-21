// JavaScript Document

$(document).ready(function(e) {
	var chknum = 0;  //选项总个数 
	var sp_num = $('.num').val();				//商品数量
	
	$('.shop-car-ul li').each(function() {
		$('.c-box',this).each(function() {
			chknum++;
		});
	});
	
	$('.shop-car-ul li').each(function(){
		$('.c-box',this).each(function() {
			var price  = $(this).find('.price').text();
			$(this).find('.small_j').text(parseFloat(sp_num*price).toFixed(2));
        });
	})
	
    $('.settle_btn').click(function(){
		$(this).toggleClass('on');
		if($(this).hasClass('on'))
		{
			$('.shop-car-ul li .check-01').addClass('check');
			$('.shop-car-ul li').find('input').prop("checked",true);
			$(this).find('input').prop("checked",true);
			
		}else
		{
			$('.shop-car-ul li .check-01').removeClass('check');
			$('.shop-car-ul li').find('input').prop("checked",false);
			$(this).find('input').prop("checked",false);
		}
		//全选时的总价
		var total = total_price();
		$('#count').html(total);
	});
	
	$('.shop-car-ul li .check-01').click(function(){
    	var chk = 0;  //选中数
		var xj = 0;   //小计
		$(this).toggleClass('check');
	 	$('.shop-car-ul li').each(function() {
			$('.c-box',this).each(function() {
				if($('.check-01',this).hasClass('check'))
				{

					$('.check-01',this).find('input').prop("checked","checked");
					chk++;
					unit_price();
				}else
				{
					$('.settle_btn input').prop("checked",false);
					$('.check-01',this).find('input').prop("checked",false);
					$('.settle_btn').removeClass('on');
				}
				//单选时的总价
				var total = total_price();
				$('#count').html(total);
			});
    	});
    if(chknum==chk){//全选 
		$('.settle_btn input').prop("checked","checked");
        $('.settle_btn').addClass('on');
    }else{//不全选 
		$('.settle_btn input').prop("checked",false);
		$('.settle_btn').removeClass('on');
    } 
	});
});

//加减符号
function updatedProducts(num,ev){
	var ret_num ='';
	var num = parseInt(num);
	var numObj = $(ev).parent().find('.num');
	var unit_price_obj = $(ev).parents('.c-box').find('.small_j');
	var price =parseFloat($(ev).parents('.c-box').find('.price').html()).toFixed(2);
	var buyNum = parseInt(numObj.val());
	if( num == -1) {
		ret_num = buyNum+num < 1 ? 1 : buyNum+num;
	} else {
		ret_num = buyNum+num;
	} 
	numObj.val(ret_num);                  //输入框里商品数量
	price = unit_price(ret_num,price);    //计算单价
	unit_price_obj.html(price);           //小计价格
	//单选时的总价
	var total = total_price();
	$('#count').html(total);
}

//计算单价
function unit_price(num,price) {
	return parseFloat(num*price).toFixed(2);
} 

 //统计总价
function total_price() {
	 var total = 0; //初始总价
	$('.shop-car-ul li').each(function(){
		$('.c-box',this).each(function() {
			if($(this).find('.check-01 input').prop("checked") === true)
			{
				total = total + Number(parseFloat($(this).find('.small_j').html()).toFixed(2));
			}
		});
	})
	return total.toFixed(2);
}