/**
 * url 请求地址
 * data 传递参数
 * method 请求方式
 * success 成功的回调
 * fail 失败的回调
 */
var API_URl = 'https://api.douban.com';

function httpReq( url, data, method, success, fail ) {
    wx.showLoading({
      title: '加载中',
    })

    wx.request( {
        url: API_URl + url,
        data: data,
        method: method,
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        success: function( res ) {
            success( res );
            wx.hideLoading();
        },
        fail: function( res ) {
            fail( res );
        }
    });
}

/**
 * 获取当前时间
 * str 时间分割符
 */
function getNowFormatDate(str) {
    var day = new Date();
    var Year = 0;
    var Month = 0;
    var Day = 0;
    var CurrentDate = "";
    //初始化时间 
    Year = day.getFullYear();
    Month = day.getMonth() + 1;
    Day = day.getDate();
    CurrentDate += Year + str;
    if (Month >= 10) {
        CurrentDate += Month + str;
    } else {
        CurrentDate += "0" + Month + str;
    }
    if (Day >= 10) {
        CurrentDate += Day;
    } else {
        CurrentDate += "0" + Day;
    }
    return CurrentDate;
}

module.exports = {
  getNowFormatDate: getNowFormatDate,
  httpReq: httpReq
}