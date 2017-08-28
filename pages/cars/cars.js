var app = getApp();
Page({
	data: {
		isShow: false,	// 查看显示隐藏
		isModel: true,	// model
		isQues: true,	// 问题model
		isConsult: true,	// 提问model
		isBid: true,	// 出价model
		isShare: true,	// 分享model
		scrollheight: 0,
		scrollTop: 0,
		setNum: 1,	// 默认台数
		imgUrls: [
			'http://img1.nongjigou.com/FpNfYbMb2uWTYJ7bBGSwUWk7l7Le?imageView2/1/w/640/h/480/q/88|watermark/1/image/aHR0cDovL3d3dy5ub25namlnb3UuY29tL3N0YXRpYy9pbWcvMjAxNy0zLXcucG5n/dissolve/100/gravity/SouthEast/dx/10/dy/10/ws/0.1',
			'http://img1.nongjigou.com/Fgiujs26O_wVQKwLglbtYwO92-4G?imageView2/1/w/640/h/480/q/88|watermark/1/image/aHR0cDovL3d3dy5ub25namlnb3UuY29tL3N0YXRpYy9pbWcvMjAxNy0zLXcucG5n/dissolve/100/gravity/SouthEast/dx/10/dy/10/ws/0.1',
			'http://img1.nongjigou.com/FpKEBHaN2AVBYaqjUNCqX8XEy1dq?imageView2/1/w/640/h/480/q/88|watermark/1/image/aHR0cDovL3d3dy5ub25namlnb3UuY29tL3N0YXRpYy9pbWcvMjAxNy0zLXcucG5n/dissolve/100/gravity/SouthEast/dx/10/dy/10/ws/0.1'
		]
	},
	// 首屏渲染
	onLoad (params) {
		var that = this;
		wx.getSystemInfo({
			success: function(res) {
				that.setData({
					scrollheight: res.windowHeight
				})
			}
		})
	},
	// 返回
	goBack: function() {
		wx.navigateBack({
		  delta: 1
		})
	},
	goHome: function() {
		wx.switchTab({
		  url: '/pages/list/list'
		})
	},
	// 滚动事件
	scroll: function(e) {
		var event = e;
		this.setData({
			scrollTop: event.detail.scrollTop
		})
	},
	// 查看出价
	clickLook: function() {
		var that = this;
		that.setData({
			isShow: (!that.data.isShow)
		})
	},
	// 举报
	clickReport: function() {
		wx.navigateTo({
		  url: '../report/report'
		})
	},
	// 模态框关闭
	closeModel: function() {
		this.setData({
			isModel: true,
			isConsult: true,
			isQues: true,
			isBid: true,
			isShare: true
		})
	},
	openQues: function() {
		this.setData({
			isModel: false,
			isQues: false
		})
	},
	openConsult: function() {
		this.setData({
			isModel: false,
			isConsult: false
		})
	},
	openBid: function() {
		this.setData({
			isModel: false,
			isBid: false
		})
	},
	openShare: function() {
		this.setData({
			isModel: false,
			isShare: false
		})
	},
	// 加减台数
	clickDel: function() {
		var that = this;
		that.setData({
			setNum: (that.data.setNum - 1 > 0 ? that.data.setNum - 1 : 1)
		})
	},
	clickAdd: function() {
		var that = this;
		that.setData({
			setNum: (that.data.setNum + 1)
		})
	},
	// 分享
	onShareAppMessage: function () {
	    return {
	      title: '福田雷沃 M1100-D 轮式拖拉机',
	      path: 'pages/cars/cars?id=12'
	    }
  	}
})