/**
 * Created by LJX on 2017-12-16 21:05:12
 */



(function(global, $, doc, TouchSlide) {
	'use strict';
	
	var indexJs = function() {
		this.config = {}
		this.eventsMap = {
			"click #changeTab a": "changeTab",
		}
		this.initialization()
	}

	indexJs.prototype = {
		constructor: indexJs,
        changeTab: function(e) {
            var item = e.currentTarget.dataset.item;
            $(e.target).addClass('active').siblings().removeClass('active');
            $(item).addClass('active').siblings().removeClass('active');
        },
        touchSlide: function() {
            TouchSlide({
                slideCell: "#slideBox",
                titCell: ".hd ul",
                mainCell: ".bd",
                effect: "leftLoop",
                interTime: 10000,
                autoPage: true,
                autoPlay: true
            })
        },
        addEcentListenerScroll: function() {
            var scrollTop = $('#changeTab').offset().top;
            $(window).scroll(function() {
                if($(document).scrollTop() >= scrollTop){
                    $('.segmented-control').addClass('isFlxed')
                }else{
                    $('.segmented-control').removeClass('isFlxed')
                }
            })
        },
		initialization: function() {	// 初始化
			var maps = this.eventsMap;
            this.touchSlide();
            this.addEcentListenerScroll();
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

	global.indexJs = indexJs;

    $(function() {
        new indexJs();
    });

})(this, this.jQuery, document, TouchSlide);