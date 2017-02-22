$(function(){
	//图片悬停动画效果
	$('img').hover(function(){
		$(this).stop().animate({
			opacity:.5
		}).animate({opacity:.8})
	},function(){
		$(this).stop().animate({opacity:1})
	});
	
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
		
		
		//订单页开始
		
		var oChose=$('.order-news ul li');
			oChose.click(function(){
				oChose.removeClass('active');
				$(this).addClass('active');
			});

			
		var aCookie = getCookie('goodsNews');
			if(aCookie==undefined){
				return false;
			}else{
			var oNews=JSON.parse(getCookie('goodsNews'));
//					console.log(oNews[0].src);
			oNews.forEach(function(v){
//				console.log(v.name);
			$('#order').append('<div class="order-order"><div style="display: flex;"><div><p>订单编号：<br />14747573838575</p><p>下单时间：<br />2017-2-19 <br />14:23:30</p></div><img src='+v.src+' alt="" /><p>'+v.name+'<br />尺码M:'+v.size+' 颜色：'+v.color+'<br />￥79 x 1</p></div><div class="buy-now"><p>￥'+v.price+' <br /><a href="#">等待支付</a><br /><a href="#">支付宝</a><br />宋佳伟</p><p class="buy-now-1"><a href="#">立即支付</a><br /><a href="#">订单详情</a></p></div></div>');

			});
			}
			
		
	
	
})