/**
 * Created by LJX on 2017-12-17 12:51:34
 */

(function(global, $, doc) {
	'use strict';
	
	var postDetailsJs = function() {
		this.config = {}
		this.eventsMap = {
			
		}
		this.initialization()
	}

	postDetailsJs.prototype = {
		constructor: postDetailsJs,
		initialization: function() {	// 初始化
			var maps = this.eventsMap;
            this._scanEventsMap(maps, true);
        },
		_scanEventsMap: function(maps, isOn) {
            var delegateEventSplitter = /^(\S+)\s*(.*)$/;
            var bind = isOn ? this._delegate : this._undelegate;
            for (var keys in maps) {
                if (maps.hasOwnProperty(keys)) {
                    var matchs = keys.match(delegateEventSplitter);
                    bind(matchs[1], matchs[2], this[maps[keys]].bind(this));
                }
            }
        },
        _delegate: function(name, selector, func) {
            $(doc).on(name, selector, func);
        },
        _undelegate: function(name, selector, func) {
            $(doc).off(name, selector, func);
        }
	}

	global.postDetailsJs = postDetailsJs;

    $(function() {
        new postDetailsJs();
    });

})(this, this.jQuery, document);