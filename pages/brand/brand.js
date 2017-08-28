Page({
	data: {
		isSeries: true,
		isType: true,
		scrollHeight: '',
		toView: '#'
	},
	// 首屏渲染
	onLoad (params) {
		var that = this;
		wx.getSystemInfo({
			success: function(res) {
				that.setData({
					scrollHeight: res.windowHeight
				})
			}
		})
	},
	goBack: function() {
		wx.navigateBack({
		  delta: 1
		})
	},
	// 选择型号
	selectSeries: function() {
		this.setData({
			isSeries: false,
		})
	},
	// 选择车系
	selectType: function() {
		this.setData({
			isType: false,
		})
	},
	// 选择字母 返回指定索引
	choiceWordindex: function(e) {
		let wordindex = e.target.dataset.wordindex;
    this.setData({
      toView: wordindex
    })
	}
})