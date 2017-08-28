Page ({
	data: {
		reportItem: [
			{id:"1", name:"价格异常", changeColor: true},
			{id:"2", name:"此车已售", changeColor: true},
			{id:"3", name:"虚假车源", changeColor: true},
			{id:"4", name:"联系不上", changeColor: true},
			{id:"5", name:"车型不符", changeColor: true},
			{id:"99", name:"其他原因", changeColor: true}
		]
	},
	onLoad (params) {
		// console.log(this.data.reportItem);
	},
	goBack: function() {
		wx.navigateBack({
		  delta: 1
		})
	},
	// 反向选择
	selectAct: function(e) {
		var that = this;
		for (var i = 0; i < that.data.reportItem.length; i++) {
	        if (e.target.dataset.id == that.data.reportItem[i].id) {
	        	that.data.reportItem[i] = {
	        		id: that.data.reportItem[i].id,
	        		name: that.data.reportItem[i].name,
	        		changeColor: !that.data.reportItem[i].changeColor
	        	}
	        } else {
	        	that.data.reportItem[i] = {
	        		id: that.data.reportItem[i].id,
	        		name: that.data.reportItem[i].name,
	        		changeColor: true
	        	}
	        }
      	}
      	that.setData({
      		reportItem: that.data.reportItem
      	})
	}
})