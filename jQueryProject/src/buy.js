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
		
		
		
		//购买页代码开始
		
		
		//将cookie中的值写入页面
		var choseImg = $('.mirror-chose li'),
			mirrorShow = $('.mirror-show').children('img'),
			choseBigImg = $('.big-mirror-img').children('img');
			
			var oNews=JSON.parse(getCookie('goods'));
//					console.log(JSON.parse(getCookie('goods')));
					//写姓名
					var oName=$('.buy-right h1');
						oName.text(oNews[0].name);
						//写价格
						var oPrice=$('.buy-r-1 span').eq(0);
							oPrice.text(oNews[0].price);
//						console.log(oNews[0].name);
						var arrUrl=oNews[0].url;
						
							console.log(arrUrl);
							
							choseBigImg.attr('src',arrUrl[0]);
							mirrorShow.attr('src',arrUrl[0]);
							var oList=$('.mirror-chose ul');
//								oList.children('li').eq(0).addClass('active');
						for(var i=0;i<arrUrl.length;i++){
							var oli=oList.append('<li><img src='+arrUrl[i]+'></li>');
							;
						};
		
		
		
		
		//放大镜js代码开始
		
		var choseImg = $('.mirror-chose li'),
			mirrorShow = $('.mirror-show').children('img'),
			choseBigImg = $('.big-mirror-img').children('img');
//		console.log(choseImg);
			choseImg.click(function(){
				
				var imgUrl = $(this).children('img').attr('src'),
					iIndex = $(this).index();
					console.log(1);
				choseImg.removeClass('active');
				choseImg.eq(iIndex).addClass('active');
				choseBigImg.attr('src',imgUrl);
				mirrorShow.attr('src',imgUrl);
			});
			
			
			
			var oTopImg = $('.big-mirror-img'),
				oZoom   = $('#zoom'),
				miShow  = $('.mirror-show');
			//添加mouseover事件 显示放大镜
				oTopImg.hover(function(){
					oZoom.css({
						display:'block'
					});
					miShow.css({
						display:'block'
					});
				},function(){
					oZoom.css({
						display:'none'
					});
					miShow.css({
						display:'none'
					});
				});
				
				var oTop=document.getElementById('topImg'),
					oZooms=document.getElementById('zoom'),
					oBigimg=document.getElementById('bigImg'),
					oBox=document.getElementById('box');
					oTop.onmousemove=function(ev){
//						console.log()
						var ev=ev||window.event;
							iL=ev.clientX-oTop.offsetLeft-oZooms.offsetWidth/2+window.scrollX;
							iT=ev.clientY-oTop.offsetTop-oZooms.offsetHeight/2+window.scrollY;												
							//边界判断
							if(iL < 0) {
								iL = 0;
							}
							if(iT < 0) {
								iT = 0;
							}
							if(iL > oTop.offsetWidth - oZooms.offsetWidth) {
								iL = oTop.offsetWidth - oZooms.offsetWidth;
							}
							if(iT > oTop.offsetHeight - oZooms.offsetHeight) {
								iT = oTop.offsetHeight - oZooms.offsetHeight;
							}
//							console.log(iT)
							//遮罩层位置变化
							oZooms.style.left=iL+'px';
							oZooms.style.top=iT+'px';
							//大的图片位置变化
							oBigimg.style.top  = -iT * 2 + 'px';
							oBigimg.style.left = -iL * 2 + 'px';

					}
			
			var gyanse=$('.yanse li').eq(0).children('img').attr('alt');
			//放大镜右边颜色 下面的几件小衣服
				var oyanse=$('.yanse li');
					oyanse.click(function(){
						var imgUrl = $(this).children('img').attr('src'),
					iIndex = $(this).index();
					
					gyanse=$(this).children('img').attr('alt');
					oyanse.removeClass('active');
					oyanse.eq(iIndex).addClass('active');
				choseBigImg.attr('src',imgUrl);
				mirrorShow.attr('src',imgUrl);
					});
					
					
					//购买数量
					var buyNum=1;
					var jian=$('.num i').eq(0),
						jia =$('.num i').eq(1),
						num =$('.num input');
						var nums;
//						num.attr('value',nums);
						jian.click(function(){
							if(num[0].value<=0){
								nums=0;
							}else{
								nums=Number(num[0].value)-1;
							}
							num[0].value=nums;
							buyNum=num[0].value;
						});
					
					jia.click(function(){
//						console.log(num.attr('value'));
							//大于库存时该怎么做
							if(num[0].value>=121){
								nums=121;
							}else{
								nums=Number(num[0].value)+1;
							}
							num[0].value=nums;
							buyNum=num[0].value;
						});
					//cookie
					var gsize;
					$('.chimadaxiao li').click(function(){
						$('.chimadaxiao li').removeClass('active');
						$(this).addClass('active');
						gsize=$(this).text();
					});
					
					//加入购物车时的js代码
					
					
					
					var joinGoods=$('.join');
						
						joinGoods.click(function(){
							var goodsName=$('.buy-right h1').text();
							var goodsPrice=$('.goodsprice').text();
							var goodsNum  =buyNum;
							var goodsSize =gsize;
							var goodsColor =gyanse;
							var src      =mirrorShow.attr('src');
//							console.log(goodsName);
//							console.log(goodsPrice);
//							console.log(goodsNum);
//							console.log(goodsSize);
//							console.log(goodsColor);
							var aGoods=getCookie('goodsNews');
//							console.log(aGoods);
							if(aGoods === undefined) {
							var aGoods = []; // aGoods相当于购物车
							} else {
								aGoods = JSON.parse(aGoods);
							}
							var goodsNews={
								name:goodsName,
								price:goodsPrice,
								num:goodsNum,
								size:goodsSize,
								color:goodsColor,
								src:src
							}
							aGoods.push(goodsNews);
								setCookie('goodsNews',JSON.stringify(aGoods));
								location.href='balance.html';
						});
					
				
})