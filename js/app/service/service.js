(function(win, $) {



	/**
	 * 渲染列表(原始渲染方式)
	 * @param  {[object]} data [description]
	 * @return {[type]}      [description]
	 */
	// var renderStudentList = function(data) {
	// $(data).each(function(index, item) {
	// arr.push('<li data-id =')
	// arr.push(item.id)
	// arr.join('');
	// 
	// var x=  '<li data-id =' ;
	// x+= item.id ;
	// var $listItem = $('<li data-id =' + item.id + '>' + item.name + '的年龄是：' + item.age + '</li>');
	// $('#studentList').append($listItem);
	// });
	// };

	/**
	 * 初始化学生列表
	 * @return null
	 */
	// var initStudentList = function() {
	// 	$.when(dao.getStudentListTmpl(), dao.getStudentList())
	// 		.done(function(tmpl, data) {
	// 			if (data.flag) {
	// 				if (data.data.length) {
	// 					$('#studentList').empty();
	// 					$('#studentListTemplate').tmpl(data).appendTo('#studentList');
	// 					var html = template('studentListTemplate', data.data);
	// 					$('#studentList').html(html);
	// 					// var render = template.compile(tmpl);
	// 					// $('#studentList').empty().append(render(data.data));
	// 				} else {
	// 					alert("数据为空");
	// 				}
	// 			} else {
	// 				alert(data.msg);
	// 			}
	// 		}).fail(function() {});
	// };

	var initStudentList = function() {
		dao.getStudentList().done(function(data) {
			if (data.flag) {
				if (data.data.length) {
					// for(var i = 0 ,len = data.data.length;i<len;i++){
					// 	var li = $('<li>'+data.data.title+'</li>');
					// 	li.appendTo('#ul');
					// }
					var html = template('studentListTemplate', data.data);
					$('#studentList').html(html);
				} else {
					alert("数据为空");
				}
			} else {
				alert(data.msg);
			}
		}).fail(function() {});
	};
	// 
	// var xmlhttp;
	// if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
	// 	xmlhttp = new XMLHttpRequest();
	// } else { // code for IE6, IE5
	// 	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	// }
	// xmlhttp.open("GET", "www.baidu/test1.txt", true);
	// //get url+参数  
	// //post send 
	// xmlhttp.send('name=5$gdfg');

	/**
	 * 初始化学生列表
	 * @return null
	 */
	var initFuritsList = function() {
		// xmlhttp.open("GET", "../../json/list-include.json", true);
		// xmlhttp.send("fname=Bill&lname=Gates");

		// xmlhttp.onreadystatechange = function() {
		// 	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		// 		debugger;
		// 		var data = xmlhttp.responseText;
		// 		// var data = json.parse(data);

		// 		$('#furistContent').empty();

		// 		var html = template('furitsTemplate', data);
		// 		$('#furistContent').html(html);
		// 	};
		// };
		// 
		dao.getFuritsList().done(function(data) {
			$('#furistContent').empty();
			var html = template('furitsTemplate', data);
			$('#furistContent').html(html);
		});
	};


	/**
	 * 绑定事件
	 */
	var addEvent = function() {};
	$(function() {
		initStudentList();
		// renderStudentList();
		initFuritsList();
	});
})(window, jQuery);