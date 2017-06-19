(function(win,$) {
    
	win.utils = {};
	 /**
     * ajax post request
     * @param  {String} url      请求的url
     * @param  {Object} data     请求参数
     * @param  {Function} model    请求到的数据处理
     * @param  {String} dataType 请求类型
     * @return {Object}
     */
    utils.post = function(url,data,handler,dataType) {
        var dtd = $.Deferred(),
            datas;
        $.ajax({
            url: url,
            data: data || {},
            dataType: dataType || 'json',
            type: 'POST'
        }).done(function(data) {
            datas = handler ? handler(data) : data;
            dtd.resolve(datas);
        }).fail(function() {
            dtd.reject(datas);
        });
        return dtd.promise();
    };

     /**
     * ajax get request
     * @param  {String} url      请求的url
     * @param  {Function} model    请求到的数据处理
     * @param  {String} dataType 请求类型
     * @return {Object}
     */
    utils.get = function(url,handler,dataType,data) {
        var dtd = $.Deferred(),
            datas;
        $.ajax({
            url: url,
            data: data || {},
            dataType: dataType || 'json',
            type: 'GET'
        }).done(function(data) {
            datas = handler ? handler(data) : data;
            dtd.resolve(datas);
        }).fail(function(a,b,c) {
            dtd.reject(datas);
        });
        return dtd.promise();
    };

      /**
     * 将json转换为object
     * 部分请求得到的是标准json字符串，需要做一步转换
     * @method toObj
     * @namespace Util
     */
    utils.toJsonObj = function(json) {
        var data = json;
        if (typeof(data) == "string" &&
            (data.indexOf('{') == 0 || data.indexOf('[') == 0)) {
            data = eval('(' + data + ')');
        }
        return data;
    };

})(window,jQuery);

