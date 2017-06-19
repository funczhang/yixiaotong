(function(win, $) {
	win.dao = {};
	dao.getStudentList = function() {
		return utils.get('../../json/list-data.json',function(data) {
			return data;
		});
	};
	dao.getFuritsList = function() {
		return utils.get('../../json/list-include.json',function(data) {
			return data;
		});
	};
	dao.getStudentListTmpl = function(){
		return utils.get('../../../tmpl.html',function(data) {
			return data;
		},'text');
	}
})(window, jQuery);