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
      url: 'https://api.example.com/data', // Replace with your actual API endpoint
      method: 'GET',
      success(res) {
        if (res.statusCode === 200) {
          that.setData({
            apiData: res.data // assuming the response is directly usable
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
