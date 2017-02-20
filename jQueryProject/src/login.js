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
	
	
		//获取cookie中的用户名和密码
	
	var aCookie=JSON.parse(getCookie('user'));
			var chkName=aCookie[0].name;
			var chkPassword=aCookie[0].pass;
			var chk1=false,
				chk2=false;
	
	//判断用户名
		$('.login-name input').bind('blur',function(){
		
		var logName= $('.login-name input')[0].value,
			logPass= $('.login-pass input')[0].value;
//				console.log(logName);
//				console.log(logName==chkName);
				if(!logName){
				$('.err-name').css({
				display:'block'});
			}else{
				$('.err-name').css({
				display:'none'});
			if(logName==chkName){
				chk1=true;
					$('.err-name').css({
						display:'none'});
			$('.err-name1').css({
						display:'none'});
			}else{
					$('.err-name1').css({
						display:'block'});
				}
			};					
	});
	
	//判断密码
			$('.login-pass input').bind('blur',function(){
		
		var logName= $('.login-name input')[0].value,
			logPass= $('.login-pass input')[0].value;
//				console.log(logName);
//				console.log(logName==chkName);
				if(!logPass){
				$('.err-pass').css({
				display:'block'});
			}else{
				$('.err-pass').css({
				display:'none'});
			if(logPass==chkPassword){
				chk2=true;
					$('.err-pass').css({
						display:'none'});
			$('.err-pass1').css({
						display:'none'});
			}else{
					$('.err-pass1').css({
						display:'block'});
				}
			};					
	});
	
	//登录
	
	$('.btn-logo input').click(function(){
		if(chk1&&chk2){
			location.href='index.html';
		}else{
			alert('请输入正确的账号与密码！');
		}
		
	});
//	oChose.bind('blur',function(){
//		$('span').css({
//				display:'none'
//			})
//	});
	
	
	
	


})
