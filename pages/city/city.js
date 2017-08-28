Page({
	data: {
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
	// 选择字母 返回指定索引
	choiceWordindex: function(e) {
		let wordindex = e.target.dataset.wordindex;
    this.setData({
      toView: wordindex
    })
	}
})