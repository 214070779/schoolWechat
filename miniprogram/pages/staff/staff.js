Page({
	userdata:function(){
        wx.navigateTo({
	      url: '/pages/worker/worker'
	    });
	},
	timetable:function(){
		wx.navigateTo({
	      url: '/pages/changeInfomation/changeInfomation'
	    });
	},
	record:function(){
		wx.navigateTo({
	      url: '/pages/total/total'
	    });
	},
	toast:function(){
		wx.navigateTo({
	      url: '/pages/staff/staff'
	    });
	}
})