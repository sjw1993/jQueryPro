$(function(){
	//图片悬停动画效果
	//登录成功
	
	//登录成功
	
		var logA    = $('.log-success li').eq(0).children('a'),
			logSpan = $('.log-success li').eq(0).children('span');
		var aCookie = getCookie('user');
			if(aCookie==undefined){
				return false;
			}else{
				var oCookie=JSON.parse(getCookie('user'));
				logSpan.text(oCookie[0].name+',欢迎您');
				logA.css({
					display:'none'
				});
			}

				
				
})
