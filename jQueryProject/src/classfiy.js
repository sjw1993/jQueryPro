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
		//男装
		//一级目录
		var oEm=$('.classify-left').find('em');
		var oEmIndex=0;//选中点击第几个一级目录
		var jia=$('.classify-left li').find('b');//选择b 也就是‘+’
		oEm.click(function(){
			var emIndex=$(this).attr('index');//自定义属性相当于开关
//				oEmIndex = $(this).index();
				oEmIndex = oEm.index($(this));//选择了第几个一级目录
				var oDdshow= $('.classify-left li').eq(oEmIndex).find('dl');
				jia=$('.classify-left li').eq(oEmIndex).find('b');//重新选择b 在一级目录的基础上
//				console.log(oEmIndex);
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
		//二级目录
		jia.bind('click',function(){
//			console.log(oEmIndex);
//			console.log(jia);
			var oJia=$(this).text(),
				iIndex=jia.index($(this));
				var oDdshow= $('.classify-left li').eq(oEmIndex).find('dl');
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
		
		//收起 缩放功能
		
		var btnDown = $('.pinpai div'),
			oI = $('.pinpai div i'),
			oP= $('.pinpai div p'),
			ulDown  = $('.pinpai ul');
			btnDown.click(function(){
				var indexChk=btnDown.attr('index');
				console.log(indexChk);
				if(indexChk=='0'){
					ulDown.stop().animate({
					height:104
				});
					oI[0].style.backgroundPosition='0 -234px';
					oP.text('收起');
				btnDown.attr('index',1);
				}else{
					ulDown.stop().animate({
					height:25
				});
				oI[0].style.backgroundPosition='0 -259px';
				oP.text('更多');
				btnDown.attr('index',0);
				}
				
				
			});
			
			//高级筛选 鼠标悬停效果
			
			var oGaojiLi   = $('.screen').children('li'),
				oGaojiShow = $('.gaojishow');
				
				oGaojiLi.hover(function(){
					console.log(oGaojiLi);
					var iIndex=oGaojiLi.index($(this));
						oGaojiShow.eq(iIndex).css({
							display:'block'
						});
				},function(){
					var iIndex=oGaojiLi.index($(this));
						oGaojiShow.eq(iIndex).css({
							display:'none'
						});
				});
			
		
	
	
})