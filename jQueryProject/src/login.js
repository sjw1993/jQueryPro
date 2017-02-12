$(function(){
	
	var log   = $('#login-way'),
		oli   = log.children('li'),
		oShow = $('.account');

		var oChose=oShow.find('input');
		
		oli.bind('click',function(){
			
		var iIndex=$(this).index();
//			console.log(iIndex);
			oli.removeClass('active');
		
			$(this).addClass('active');
		
			oShow.removeClass('active').eq(iIndex).addClass('active');
		
	});
	
	oChose.bind('focus',function(){
		
		var s=$(this).attr('index');
		console.log($('.err-name'));
		if(s==='1'){
			$('.err-name').css({
				display:'block'
			})
		}else{
			$('.err-pass').css({
				display:'block'
			})
		}	
	});
	
	oChose.bind('blur',function(){
		$('span').css({
				display:'none'
			})
	})
})
