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
		
		
		
		
			
					//将cookie中的值写入页面

			var oNews=JSON.parse(getCookie('goodsNews'));
//					console.log(oNews[0].src);
			oNews.forEach(function(v){
//				console.log(v.name);
			$('#goods').append('<div class="a1"><i></i><dl><dt><a href="#"><img src='+v.src+'/></a></dt><dd><p ><a href="#">'+v.name+'</a></p><em>商品编号：246371</em> <div class="mbshop_cart_1127_b"><b class="icon_grey">不可用红包</b></div></dd></dl><div style="margin-left: 100px;"><p>颜色：'+v.color+'</p><p>尺码：'+v.size+'</p></div><div style="margin-left: 100px;"><del>￥169</del><p>'+v.price+'</p></div><div class="a2"><span>-</span><input type="text" value='+v.num+'><span>+</span></div><div style="display: flex;">￥<p class="money">'+v.price+'</p></div><div class="del"><a href="javascript:;">删除</a></div></div>');

			});
			
			
			//购物袋页代码开始 不完善！！！！！！！！！！！！！！！！！
			$('#goods .a1').bind('mouseover',function(){
				var btnSpan1 = $(this).children('.a2').children('span').eq(0),
					btnSpan2  = $(this).children('.a2').children('span').eq(1);
				var inputs   =$(this).children('.a2').children('input');
				var oSum   =$(this).find('.money');
				var aSum  =Number($(this).find('.money').text());
//				console.log(typeof aSum);
//			console.log(inputs);
				//减
			btnSpan1.click(function(){
				var oInp    =Number(inputs.attr('value'));
				if(oInp<=0){
					inputs.attr('value',0);
				}else{
					oInp=oInp-1;
					inputs.attr('value',oInp);
					var sum=aSum*oInp;
					
					$(this).find('.money');
					
					oSum.text(sum);
				}
			});
			//加
			btnSpan2.click(function(){
				var oInp    =Number(inputs.attr('value'));
				if(oInp>=121){
					inputs.attr('value',121);
				}else{
					oInp=oInp+1;
					inputs.attr('value',oInp);
					var sum=aSum*oInp;
					oSum.text(sum);
				}
			});
				
				
			});

			
					
					
					
})