
$(function(){
	var oName   = $('input[name=username]'),
		oPhone  = $('input[name=phone]'),
		oPass   =$('input[name=pass]'),
		oJihuoma   =$('input[name=jihuoma]'),
		oRepass  = $('input[name=repass]');
		var nChk=false;
		var pChk=false;
		var cChk=false;
		
		
		//获取cookie中的账户 电话
		
		var aCookie=JSON.parse(getCookie('username'));
			oName.attr('value',aCookie[0].name);
			oPhone.attr('value',aCookie[0].phone);

		
		
		//密码格式验证

		oPass.bind('blur',function(){
			var oText = $(this)[0].value,
				opassNull = $('.passnotnull span');
			var reg=/^[a-z0-9A-Z_-]{6,16}$/;
			
			if(!oText){
						opassNull.eq(0).css({
							display:'block'
						});
			}else{
				opassNull.eq(0).css({
							display:'none'
						});
			if(!oText.match(reg)){
				opassNull.eq(0).css({
							display:'none'
						});
				opassNull.eq(1).css({
							display:'block'
						});
			}else{
				opassNull.eq(1).css({
							display:'none'
						});
						nChk=true;
						opassNull.eq(2).css({
							display:'block'
						});
			}
			}
		});
		
		//密码再次验证
		
		oRepass.bind('blur',function(){
			var oText = $(this)[0].value,
				reOtext=oPass[0].value,
				orepassNull = $('.repassnotnull span');
			
			if(!oText){
						orepassNull.eq(0).css({
							display:'block'
						});
			}else{
			if(oText!==reOtext){
				orepassNull.eq(0).css({
							display:'none'
						});
				orepassNull.eq(1).css({
							display:'block'
						});
			}else{
				orepassNull.eq(1).css({
							display:'none'
						});
						pChk=true;
						orepassNull.eq(2).css({
							display:'block'
						});
						
			}
			}
		});
		
		//激活码验证
		
		oJihuoma.bind('blur',function(){
			var oText = $(this)[0].value,
				ojihuomaNull = $('.jihuomanotnull span');
			var reg=/^[0-9]{4}$/;
			
			if(!oText){
						ojihuomaNull.eq(0).css({
							display:'block'
						});
			}else{
			if(!oText.match(reg)){
				ojihuomaNull.eq(0).css({
							display:'none'
						});
				ojihuomaNull.eq(1).css({
							display:'block'
						});
			}else{
				ojihuomaNull.eq(1).css({
							display:'none'
						});
						cChk=true;
						ojihuomaNull.eq(2).css({
							display:'block'
						});
			}
			}
		});

		//提交
		
		var oSend=$('.send');
			oSend.click(function(){
				if(cChk&&nChk&&pChk){
					
					//将用户名和密码存入cookie中
					var cookieName=oName[0].value,
						cookiePass=oPass[0].value;
					var cookieObj={
						name:cookieName,
						pass:cookiePass
					}
					var aCookie=[];
						aCookie.push(cookieObj);
					setCookie('user',JSON.stringify(aCookie));
					
					
					
					location.href='login.html';
				}else{
					alert('请正确填写表单！')
				}
			});

})
