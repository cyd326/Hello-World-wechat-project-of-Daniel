// pages/index/index.js
Page({
  data: {
    message: 'Hello World',
    imageUrl: '/assets/sample.jpg'
    apiData: null 
  }，

 onLoad: function() {
    this.fetchApiData();
  },

  fetchApiData: function() {
    const that = this;
    wx.request({
      url: 'https://api.example.com/data', // 假设 API 端点为 https://api.example.com/data
      method: 'GET',
      success(res) {
        if (res.statusCode === 200) {
          that.setData({
            apiData: res.data // 假设响应是直接可用的
          });
        } else {
          console.error('Failed to fetch data:', res.statusCode);
        }
      },
      fail(err) {
        console.error('Request failed:', err);
      }
    });
  }
});
