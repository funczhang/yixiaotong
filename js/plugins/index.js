;(function(win){
	$(document).on('click','.nav-list',function(){
		$('.nav-list').removeClass('btn-click');
		$(this).addClass('btn-click');
	});
})(window);