;(function(win){
// ---------------------------按钮之间的切换---------------------------------------
			$('.login-ways-btn').click(function(){
				$('.login-ways-btn').removeClass('btn-selected');
				$(this).addClass('btn-selected');
			});
			$('.item-selected').click(function(){
				$('.item-selected').removeClass('nav-item-selected');
				$(this).addClass('nav-item-selected');
			});
			$('.edu-link').click(function(){
				$(this).children('ul.link-select-menu').removeClass('link-select-menu');
			});
//------------------------- 定时器结合淡入淡出函数实现图片淡入淡出切换---------------------------
			$('#obj').fadeIn(1500).fadeOut(1000);//第一张图片实现淡入淡出
			var curIndex = 0;
			var arr = new Array();
			arr[0] = "../images/pic_button.png";
			arr[1] = "../images/spring.png";
			arr[2] = "../images/and_more.png";
			arr[3] = "../images/no_more.png";
			// $('body').everyTime('2.5s',function(){
			// 	 if (curIndex==arr.length-1) 
			// 	    {
			// 	        curIndex=0;
			// 	    }
			// 	    else
			// 	    {
			// 	        curIndex+=1;
			// 	    }
			// 	$('#obj').attr('src',arr[curIndex]).fadeIn(1500).fadeOut(1000);
			// });


})(window);