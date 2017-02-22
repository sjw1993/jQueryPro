$(function(){
	//图片悬停动画效果
	$('img').hover(function(){
		$(this).stop().animate({
			opacity:.5
		}).animate({opacity:.8})
	},function(){
		$(this).stop().animate({opacity:1})
	});
	
	
	
	//登录成功
	
//		var logA    = $('.log-success li').eq(0).children('a'),
//			logSpan = $('.log-success li').eq(0).children('span');
//		var aCookie = getCookie('user');
//			if(aCookie==undefined){
//				return false;
//			}else{
//				var oCookie=JSON.parse(getCookie('user'));
//				logSpan.text(oCookie[0].name+',欢迎您');
//				logA.css({
//					display:'none'
//				});
//			}
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
	
	//main------
	//主页菜单栏 悬停出现右侧菜单效果
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
		
		//轮播图js代码
		var oLi   = $('#img-lun-list').children('li'),
			oImg  = $('#img-lunbo').children('img'),
			iIndex= 0,
			iTimer= null,
			oFlash= $('.flash-img'),
			btnLeft  = $('.img-left'),
			btnRight = $('.img-right');
			//轮播图下面的按钮
			
			//自动切换
			autoMove();
			//鼠标悬停 停止自动切换
		oFlash.hover(function(){
			clearInterval(iTimer);	
				btnLeft.css({display:'block'});
				btnRight.css({display:'block'});
			},function(){
				autoMove();
				btnLeft.css({display:'none'});
				btnRight.css({display:'none'});
			})
		
			oLi.bind('mouseenter',function(){
					iIndex = $(this).index();
					oLi.removeClass('active');
					oLi.eq(iIndex).addClass('active');
					//图片切换
					oImg.removeClass('active');
					oImg.eq(iIndex).addClass('active');
//					console.log(iIndex);
		});
		

			//点击轮播图向左切换按钮
			btnLeft.bind('click',function(){
				iIndex = iIndex-1;
				chk();
//				console.log('执行前'+iIndex);
				Move()
			});
			//点击轮播图向右切换按钮
			btnRight.bind('click',function(){
				chk();
				iIndex = iIndex+1;
				Move()
			});
			//点击边界判断
			function chk(){
//				console.log('边界判断'+iIndex);
				if(iIndex >= 4)
				{
					iIndex = -1;
				}
				if(iIndex <- 1)
				{
					iIndex = 3;
				}

			};
			//图片切换 及按钮效果
			function Move(){
				oLi.removeClass('active');
				oLi.eq(iIndex).addClass('active');
			
				oImg.removeClass('active');
				oImg.eq(iIndex).addClass('active');

			}
			//自动播放函数
			function autoMove(){
				iTimer = setInterval(function(){
				iIndex = iIndex+1;
				chk();
				Move();
//				console.log(iIndex);
				},3000);
			};
			//轮播图结束
			
			//main-1 左右移动----
			var  oMain1Left = $('.main-1-left'),
				oMain1Right = $('.main-1-right'),
				oMain1List  = $('.main-1-list');
				
				oMain1Right.bind('click',function(){
					oMain1List.animate({
						left:-1230
					})
				});
				oMain1Left.bind('click',function(){
					oMain1List.animate({
						left:0
					})
				});
			
			//main-2js代码
		
			//男生馆 单击切换代码
			var ommtListMan = $('.man .m-m-t-list').children('li'),
				omainlistMan=$('.man .main-lists');//下部图片切换
	
				ommtListMan.click(function(){
					var iIndex=0;
					iIndex=$(this).index(); 
				
					ommtListMan.removeClass('active');
					ommtListMan.eq(iIndex).addClass('active');
					omainlistMan.removeClass('active');
					omainlistMan.eq(iIndex).addClass('active');
					
				});
				
				//女生馆单击切换
				var ommtListNv = $('.nv .m-m-t-list').children('li'),
				omainlistNv=$('.nv .main-lists');//下部图片切换
				
				ommtListNv.click(function(){
					var iIndex=0;
					iIndex=$(this).index(); 
					
					ommtListNv.removeClass('active');
					ommtListNv.eq(iIndex).addClass('active');
					
					omainlistNv.removeClass('active');
					omainlistNv.eq(iIndex).addClass('active');
					
				});
			
			//潮牌管单击切换
			
			var ommtListChao = $('.chaopai .m-m-t-list').children('li'),
				omainlistChao=$('.chaopai .main-lists');//下部图片切换
				
				ommtListChao.click(function(){
					var iIndex=0;
					iIndex=$(this).index(); 
					
					ommtListChao.removeClass('active');
					ommtListChao.eq(iIndex).addClass('active');
					
					omainlistChao.removeClass('active');
					omainlistChao.eq(iIndex).addClass('active');
					
				});
				
				
				//运动馆切换
				
			var ommtListYun = $('.yundong .m-m-t-list').children('li'),
				omainlistYun=$('.yundong .main-lists');//下部图片切换
				
				ommtListYun.click(function(){
					var iIndex=0;
					iIndex=$(this).index(); 
					
					ommtListYun.removeClass('active');
					ommtListYun.eq(iIndex).addClass('active');
					
					omainlistYun.removeClass('active');
					omainlistYun.eq(iIndex).addClass('active');
					
				});
				
				//儿童馆切换
				
				var ommtListEr = $('.ertong .m-m-t-list').children('li'),
				omainlistEr=$('.ertong .main-lists');//下部图片切换
				
					ommtListEr.click(function(){
					var iIndex=0;
					iIndex=$(this).index(); 
					
					ommtListEr.removeClass('active');
					ommtListEr.eq(iIndex).addClass('active');
					
					omainlistEr.removeClass('active');
					omainlistEr.eq(iIndex).addClass('active');
					
				});
				
				//生活馆切换
				var ommtListLife = $('.life .m-m-t-list').children('li'),
				omainlistLife=$('.life .main-lists');//下部图片切换
				
					ommtListLife.click(function(){
					var iIndex=0;
					iIndex=$(this).index(); 
					
					ommtListLife.removeClass('active');
					ommtListLife.eq(iIndex).addClass('active');
					
					omainlistLife.removeClass('active');
					omainlistLife.eq(iIndex).addClass('active');
					
				});
				
				
})
