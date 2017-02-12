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
                if ($(window).scrollTop()>100){  
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


	
	//主页菜单栏 悬停出现右侧菜单效果
	var oList      = $('.list-1'),
		oBannershow= $('.banner-show');
		oList.hover(function(){
		var iIndex=oList.index($(this));
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
			oFlash=$('.flash-img'),
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
				iIndex=iIndex-1;
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
				if(iIndex>=4)
				{
					iIndex=-1;
				}
				if(iIndex<-1)
				{
					iIndex=3;
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
				iTimer=setInterval(function(){
				iIndex=iIndex+1;
				chk();
				Move();
//				console.log(iIndex);
				},3000);
			}
			
			

			
})
