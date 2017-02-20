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
		
	
		//潮牌馆开始
		
		var change=$('.small-img-1 li');
		var oBig  =$('.big-img-1');
			
			change.hover(function(){
				var oSrc=$(this).children('img').attr('src');
//				console.log(oSrc);
				oBig.attr('src',oSrc);
			},function(){
				oBig.attr('src','images/cc1.jpg');
			});
	
	
	
	
	
		//点击商品 跳转到购买页面 写Cookie
		
		var toBuyLi=$('.to-buy').children('li');
//		var oP     =$('');
		toBuyLi.click(function(){
			var iIndex=toBuyLi.index($(this));
				var oText=$(this).children('p').eq(1).text();
				var oPrice=$(this).find('span').text();
				var oUrl  =$(this).children('ul').children('li').children('img');
				var oUrls =[];
				var aGoods=[];
				
				oUrl.each(function(k){
					oUrls.push($(this).attr('src'));
					
				});
				
				var oGoodsNews={
//							id:goodsId,
							url:oUrls,
							name:oText,
							price:oPrice,
				};
				aGoods.push(oGoodsNews);
				setCookie('goods',JSON.stringify(aGoods));
				location.href='buy.html';
//				console.log(oUrls);
				console.log(oUrl);
//				console.log(oPrice);
//				console.log(oText);
		});
		
	
})