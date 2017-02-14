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
		
		
		//点击左侧树形目录时 小图标变化
		
		var oEm=$('.classify-man em');
		//男装
		var jia=$('.classify-man').find('b'),
		oDdshow= $('.classify-left dl');
		
		oEm.click(function(){
			var emIndex=$(this).attr('index'),//自定义属性
				oEmIndex = $(this).index();
				console.log(emIndex);
			if(emIndex=='0'){
				oDdshow.css({
					display:'block'
				});
				$(this).attr('index','1');
			}else{
				oDdshow.css({
					display:'none'
				});
				$(this).attr('index','0');
				
			}
		});
		jia.bind('click',function(){
			var oJia=$(this).text(),
				iIndex=jia.index($(this));
			if(oJia=='+'){
				$(this).text('-');
				oDdshow.eq(iIndex).find('dd').css({
					display:'block'
				});
			};
			if(oJia=='-'){
				$(this).text('+');
				oDdshow.eq(iIndex).find('dd').css({
					display:'none'
				});
			};
		});
		
		//女装
		var oEm=$('.classify-woman em');
		var jia=$('.classify-woman').find('b'),
		oDdshow= $('.classify-left dl');
		oEm.click(function(){
			var emIndex=$(this).attr('index'),//自定义属性
				oEmIndex = $(this).index();
				console.log(emIndex);
			if(emIndex=='0'){
				oDdshow.css({
					display:'block'
				});
				$(this).attr('index','1');
			}else{
				oDdshow.css({
					display:'none'
				});
				$(this).attr('index','0');
				
			}
		});
		jia.bind('click',function(){
			var oJia=$(this).text(),
				iIndex=jia.index($(this));
			if(oJia=='+'){
				$(this).text('-');
				oDdshow.eq(iIndex).find('dd').css({
					display:'block'
				});
			};
			if(oJia=='-'){
				$(this).text('+');
				oDdshow.eq(iIndex).find('dd').css({
					display:'none'
				});
			};
		});
		
		//童装
		var oEm=$('.classify-child em');
		var jia=$('.classify-child').find('b'),
		oDdshow= $('.classify-left dl');
		oEm.click(function(){
			var emIndex=$(this).attr('index'),//自定义属性
				oEmIndex = $(this).index();
				console.log(emIndex);
			if(emIndex=='0'){
				oDdshow.css({
					display:'block'
				});
				$(this).attr('index','1');
			}else{
				oDdshow.css({
					display:'none'
				});
				$(this).attr('index','0');
				
			}
		});
		jia.bind('click',function(){
			var oJia=$(this).text(),
				iIndex=jia.index($(this));
			if(oJia=='+'){
				$(this).text('-');
				oDdshow.eq(iIndex).find('dd').css({
					display:'block'
				});
			};
			if(oJia=='-'){
				$(this).text('+');
				oDdshow.eq(iIndex).find('dd').css({
					display:'none'
				});
			};
		});
		
		//鞋
		var oEm=$('.classify-xie em');
		var jia=$('.classify-xie').find('b'),
		oDdshow= $('.classify-left dl');
		oEm.click(function(){
			var emIndex=$(this).attr('index'),//自定义属性
				oEmIndex = $(this).index();
				console.log(emIndex);
			if(emIndex=='0'){
				oDdshow.css({
					display:'block'
				});
				$(this).attr('index','1');
			}else{
				oDdshow.css({
					display:'none'
				});
				$(this).attr('index','0');
				
			}
		});
		jia.bind('click',function(){
			var oJia=$(this).text(),
				iIndex=jia.index($(this));
			if(oJia=='+'){
				$(this).text('-');
				oDdshow.eq(iIndex).find('dd').css({
					display:'block'
				});
			};
			if(oJia=='-'){
				$(this).text('+');
				oDdshow.eq(iIndex).find('dd').css({
					display:'none'
				});
			};
		});
		
		//箱包
		var oEm=$('.classify-bao em');
		var jia=$('.classify-bao').find('b'),
		oDdshow= $('.classify-left dl');
		oEm.click(function(){
			var emIndex=$(this).attr('index'),//自定义属性
				oEmIndex = $(this).index();
				console.log(emIndex);
			if(emIndex=='0'){
				oDdshow.css({
					display:'block'
				});
				$(this).attr('index','1');
			}else{
				oDdshow.css({
					display:'none'
				});
				$(this).attr('index','0');
				
			}
		});
		jia.bind('click',function(){
			var oJia=$(this).text(),
				iIndex=jia.index($(this));
			if(oJia=='+'){
				$(this).text('-');
				oDdshow.eq(iIndex).find('dd').css({
					display:'block'
				});
			};
			if(oJia=='-'){
				$(this).text('+');
				oDdshow.eq(iIndex).find('dd').css({
					display:'none'
				});
			};
		});
		
		//内衣
		var oEm=$('.classify-yi em');
		var jia=$('.classify-yi').find('b'),
		oDdshow= $('.classify-left dl');
		oEm.click(function(){
			var emIndex=$(this).attr('index'),//自定义属性
				oEmIndex = $(this).index();
				console.log(emIndex);
			if(emIndex=='0'){
				oDdshow.css({
					display:'block'
				});
				$(this).attr('index','1');
			}else{
				oDdshow.css({
					display:'none'
				});
				$(this).attr('index','0');
				
			}
		});
		jia.bind('click',function(){
			var oJia=$(this).text(),
				iIndex=jia.index($(this));
			if(oJia=='+'){
				$(this).text('-');
				oDdshow.eq(iIndex).find('dd').css({
					display:'block'
				});
			};
			if(oJia=='-'){
				$(this).text('+');
				oDdshow.eq(iIndex).find('dd').css({
					display:'none'
				});
			};
		});
		
		//配饰
		var oEm=$('.classify-pei em');
		var jia=$('.classify-pei').find('b'),
		oDdshow= $('.classify-left dl');
		oEm.click(function(){
			var emIndex=$(this).attr('index'),//自定义属性
				oEmIndex = $(this).index();
				console.log(emIndex);
			if(emIndex=='0'){
				oDdshow.css({
					display:'block'
				});
				$(this).attr('index','1');
			}else{
				oDdshow.css({
					display:'none'
				});
				$(this).attr('index','0');
				
			}
		});
		jia.bind('click',function(){
			var oJia=$(this).text(),
				iIndex=jia.index($(this));
			if(oJia=='+'){
				$(this).text('-');
				oDdshow.eq(iIndex).find('dd').css({
					display:'block'
				});
			};
			if(oJia=='-'){
				$(this).text('+');
				oDdshow.eq(iIndex).find('dd').css({
					display:'none'
				});
			};
		});
		
		//生活
		var oEm=$('.classify-life em');
		var jia=$('.classify-life').find('b'),
		oDdshow= $('.classify-left dl');
		oEm.click(function(){
			var emIndex=$(this).attr('index'),//自定义属性
				oEmIndex = $(this).index();
				console.log(emIndex);
			if(emIndex=='0'){
				oDdshow.css({
					display:'block'
				});
				$(this).attr('index','1');
			}else{
				oDdshow.css({
					display:'none'
				});
				$(this).attr('index','0');
				
			}
		});
		jia.bind('click',function(){
			var oJia=$(this).text(),
				iIndex=jia.index($(this));
			if(oJia=='+'){
				$(this).text('-');
				oDdshow.eq(iIndex).find('dd').css({
					display:'block'
				});
			};
			if(oJia=='-'){
				$(this).text('+');
				oDdshow.eq(iIndex).find('dd').css({
					display:'none'
				});
			};
		});
		
		
	
	
})