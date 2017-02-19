$(function(){
	//图片悬停动画效果
//	$('img').hover(function(){
//		$(this).stop().animate({
//			opacity:.5
//		}).animate({opacity:.8})
//	},function(){
//		$(this).stop().animate({opacity:1})
//	});
	
	//回到顶部效果
	
	var goBack=$('.go-back').children('p');
	            $(window).scroll(function(){  
                if ($(window).scrollTop()>300){  
                	goBack.css({
                		display:'block'
                	}) 
                }  
                else  
                {  
                    goBack.fadeOut(1000);  
                }  
            });  
            //当点击跳转链接后，回到页面顶部位置  
            goBack.click(function(){  
                //$('body,html').animate({scrollTop:0},1000);  
        if ($('html').scrollTop()) {  
                $('html').animate({ scrollTop: 0 }, 500);  
                return false;  
            }  
            $('body').animate({ scrollTop: 0 }, 500);  
                 return false;              
           });
	//搜索栏 简单效果---未完成自动补全。。。。。！！！
		var oSearch = $('input[name=top-search]');
		//失去焦点时获得
		oSearch.bind('focus',function(){
			$(this).removeAttr('placeholder');
		});
		
		oSearch.bind('blur',function(){
				if($(this)[0].value===''){
					$(this).attr('placeholder','请输入关键词或商品编号');
				}
		});
		
		//鼠标悬停在商品分类上出现左侧菜单
		
		var oClassiFy = $('.classify'),
		oClassifyShow   = $('.banner-left');
		
		oClassiFy.hover(function(){
			oClassifyShow.css({
				display:'block'
			});
		},function(){
			oClassifyShow.css({
				display:'none'
			});
		});	
			//侧栏菜单栏 悬停出现右侧菜单效果
	var oList      = $('.list-1'),
		oBannershow= $('.banner-show');
		oList.hover(function(){
		var iIndex = oList.index($(this));
			oBannershow.eq(iIndex).css({
				display:'block',
			})						
		},function(){
				oBannershow.css({
				display:'none'
			})	

		});				
		
		
		
		//购物袋页代码开始
		var btnSpan1=$('.a2 span').eq(0),
			btnSpan2=$('.a2 span').eq(1);
			console.log(btnSpan1);
			//减
			btnSpan1.click(function(){
				var oInp    =Number($('.a2 input').attr('value'));
				if(oInp<=0){
					$('.a2 input').attr('value',0);
				}else{
					oInp=oInp-1;
					$('.a2 input').attr('value',oInp);
					var sum=79*oInp;
					$('.money').text(sum);
				}
			});
			//加
			btnSpan2.click(function(){
				var oInp    =Number($('.a2 input').attr('value'));
				if(oInp>=121){
					$('.a2 input').attr('value',121);
				}else{
					oInp=oInp+1;
					$('.a2 input').attr('value',oInp);
					var sum=79*oInp;
					$('.money').text(sum);
				}
			});

})