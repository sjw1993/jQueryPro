$(function(){
	$('img').hover(function(){
		$(this).stop().animate({
			opacity:.5
		}).animate({opacity:.8})
	},function(){
		$(this).animate({opacity:1})
	})
})
