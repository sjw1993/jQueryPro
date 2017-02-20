
$(function(){
	var oName   = $('input[name=username]'),
		oPhone  = $('input[name=phone]'),
		oCheck  = $('input[name=chk]');
		var nChk=false;
		var pChk=false;
		var cChk=false;
		//账户验证

		oName.bind('blur',function(){
			var oText = $(this)[0].value,
				onameNull = $('.namenotnull span');
			var reg=/^[a-z0-9A-Z_-]{4,20}$/;
			
			if(!oText){
						onameNull.eq(0).css({
							display:'block'
						});
			}else{
				onameNull.eq(0).css({
							display:'none'
						});
			if(!oText.match(reg)){
				onameNull.eq(0).css({
							display:'none'
						});
				onameNull.eq(1).css({
							display:'block'
						});
			}else{
				onameNull.eq(1).css({
							display:'none'
						});
						nChk=true;
						onameNull.eq(2).css({
							display:'block'
						});
			}
			}
		});
		
		//手机验证
		
		oPhone.bind('blur',function(){
			var oText = $(this)[0].value,
				ophoneNull = $('.phonenotnull span');
			var reg=/^[1][0-9]{10}$/;
			
			if(!oText){
						ophoneNull.eq(0).css({
							display:'block'
						});
			}else{
			if(!oText.match(reg)){
				ophoneNull.eq(0).css({
							display:'none'
						});
				ophoneNull.eq(1).css({
							display:'block'
						});
			}else{
				ophoneNull.eq(1).css({
							display:'none'
						});
						pChk=true;
						ophoneNull.eq(2).css({
							display:'block'
						});
						
			}
			}
		});
		
		//验证码验证
		
		oCheck.bind('blur',function(){
			var oText = $(this)[0].value,
				ocheckNull = $('.checknotnull span');
			var reg=/^[0-9]{4}$/;
			
			if(!oText){
						ocheckNull.eq(0).css({
							display:'block'
						});
			}else{
			if(!oText.match(reg)){
				ocheckNull.eq(0).css({
							display:'none'
						});
				ocheckNull.eq(1).css({
							display:'block'
						});
			}else{
				ocheckNull.eq(1).css({
							display:'none'
						});
						cChk=true;
						ocheckNull.eq(2).css({
							display:'block'
						});
			}
			}
		});

		//提交
		
		var oSend=$('.send');
			oSend.click(function(){
				if(cChk&&nChk&&pChk){
					var cookieName=oName[0].value,
						cookiePhone=oPhone[0].value;
					var cookieObj={
						name:cookieName,
						phone:cookiePhone
					}
					var aCookie=[];
						aCookie.push(cookieObj);
					setCookie('username',JSON.stringify(aCookie));
					
					location.href='do-register.html';
				}else{
					alert('请正确填写表单！')
				}
			});

})
