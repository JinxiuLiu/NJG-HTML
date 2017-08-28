// list.js
var http_util = require('../../utils/util.js');

Page({
	data: {
		city: "全国",
		isCars: true,	// 选择车源开关
		isSort: true,	// 选择排序开关
		isPrice: true,	// 选择价格开关
		loadMore: '',
		list: []
	},
	// 首屏渲染
	onLoad (params) {
		// 获取当前时间
		var nowDate = http_util.getNowFormatDate('.');
		console.log(nowDate);
	},
	// 下拉加载
	onReachBottom (params) {
		var that = this;
		that.setData({
			loadMore: '正在加载中...'
		})
		http_util.httpReq('/v2/movie/top250', {}, 'GET', 
			function(res) {
				that.setData({
					list: that.data.list,
					loadMore: ''
				})
			}
		);
	},
	// 点击搜索
	clickSearch: function(e) {
		wx.switchTab({
		  url: '/pages/search/search'
		})
	},
	// 点击列表
	clickList: function() {
		wx.navigateTo({
		  url: '../cars/cars'
		})
	},
	// 选择排序方式
	selectCars: function(e) {
		var that = this;
		that.setData({
			isSort: true,
			isPrice: true,
			isCars: (!that.data.isCars)
		})
	},
	selectPrice: function() {
		var that = this;
		that.setData({
			isSort: true,
			isCars: true,
			isPrice: (!that.data.isPrice)
		})
	},
	selectSort: function() {
		var that = this;
		that.setData({
			isCars: true,
			isPrice: true,
			isSort: (!that.data.isSort)
		})
	},
	selectBrand: function() {
		wx.navigateTo({
		  url: '../brand/brand'
		})
	},
	// 分享
	onShareAppMessage: function () {
	    return {
	      title: '农机狗-买卖二手农机,就上农机狗',
	      path: 'pages/list/list'
	    }
  	}
})