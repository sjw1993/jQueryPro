
$(function(){
	var oName   = $('input[name=username]'),
		oPhone  = $('input[name=phone]');
		
		//账户验证
		oName.bind('focus',function(){
			var oText = $(this)[0].value,
				oTip  = $('.usernamechk'),
				onameNull = $('.namenotnull');
			onameNull.css({
							opacity:0
						});
			oTip.css({
							opacity:0
						});
		})
		oName.bind('blur',function(){
			var oText = $(this)[0].value,
				oTip  = $('.usernamechk'),
				onameNull = $('.namenotnull');
			console.log(oText);
			var reg=/^[a-z0-9A-Z_-]{4,20}$/;
			
			if(!oText){
						onameNull.css({
							opacity:1
						});
			}else{
			if(!oText.match(reg)){
				oTip.css({
							opacity:1
						});
			}
			}
		});
		
		//账户验证

})
