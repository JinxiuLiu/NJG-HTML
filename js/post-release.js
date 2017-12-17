/**
 * Created by LJX on 2017-12-17 12:51:34
 */

(function(global, $, doc) {
	'use strict';
	
	var postDetailsJs = function() {
		this.config = {}
		this.eventsMap = {
			"click #showCircle": "showCircle",
            "click #releaseBtn": "clickRelease",
            "click #mask": "closeMask",
		}
        this.initializeElements()
		this.initialization()
	}

    postDetailsJs.Eles = {
        circleList: "#circleList",
        showMask: "#mask",
        showPopup: "#popup",
    };

	postDetailsJs.prototype = {
		constructor: postDetailsJs,
        clickRelease: function() {
            var $showPopup = this.showPopup;
            var $showMask = this.showMask;
            $showPopup.addClass('popup-show');
            $showMask.addClass('show-mask').css('z-index', '1500');
        },
        showCircle: function() {
            var $circleList = this.circleList;
            var $mask = this.showMask;
            var isShow = $circleList.hasClass('isShowCircle')
            if(isShow) {
                $circleList.removeClass('isShowCircle')
                $mask.addClass('show-mask')
            } else {
                $circleList.addClass('isShowCircle')
                $mask.removeClass('show-mask')
            }
        },
        closeMask: function() {
            var $circleList = this.circleList;
            var $mask = this.showMask;
            var $popup = this.showPopup;
            $circleList.addClass('isShowCircle');
            $popup.removeClass('popup-show');
            $mask.removeClass('show-mask').css('z-index', '1009');
        },
		initialization: function() {	// 初始化
			var maps = this.eventsMap;
            this._scanEventsMap(maps, true);
        },
        initializeElements: function() {
            var eles = postDetailsJs.Eles;
            for (var name in eles) {
                if (eles.hasOwnProperty(name)) {
                    this[name] = $(eles[name]);
                }
            }
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