﻿window.share = {}
window.share = {
	title : '年货开抢了！ 土鸡蛋、纸尿裤超低价开售~',
	desc : '皖北土鸡蛋年货特供装开售了，50元顺丰包邮到家！花王、尤妮佳纸尿裤216元起售，单包低至108元~还有更多明星单品等你来，满减优惠多到爆裂~',
	link : 'http://www.yuer24h.com/purchase/index.html?170105',
	imgUrl : 'http://www.yuer24h.com/purchase/images/LOGO.jpg?170105'
}


//alert(window.location.origin + window.location.pathname + window.location.search)
$.ajax({
	url : "http://api.yuer24h.com/wxapi/GetWXJSConfig",
	type : "GET",
	dataType : "jsonp",
	data : {
		url : window.location.origin  + window.location.pathname + encodeURIComponent(window.location.search)
	},
	success : function(response) {
		//alert(response.url)
		//alert(response.url)
		wx.config({
			debug : false,
			appId : response.appid,
			timestamp : response.timestamp,
			nonceStr : response.nonce,
			signature : response.signature,
			jsApiList : ['onMenuShareAppMessage', 'onMenuShareTimeline', 'onMenuShareQQ', 'onMenuShareWeibo', 'showOptionMenu','chooseImage','previewImage','startRecord','stopRecord','uploadVoice','downloadVoice']
		});
		wx.ready(function() {
			// 1 判断当前版本是否支持指定 JS 接口，支持批量判断
			//document.querySelector('#checkJsApi').onclick = function() {
			wx.checkJsApi({
				jsApiList : ['getNetworkType', 'previewImage'],
				success : function(res) {
					console.log(JSON.stringify(res));
				}
			});
			//};

			window.share_wx_api()
			// 2. 分享接口
			// 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
			//document.querySelector('#onMenuShareAppMessage').onclick = function () {

		});

		wx.error(function(res) {
			console.log(res.errMsg);
		});
	}
});
window.share_wx_api = function(fun) {

	wx.onMenuShareAppMessage({
		title : window.share.title,
		desc : window.share.desc,
		link : window.share.link,
		imgUrl : window.share.imgUrl,
		trigger : function(res) {
			console.log('用户点击发送给朋友');
		},
		success : function(res) {
			//alert(window.share.imgUrl.match(/(Wechat_share_){1,}\w/g)[0])
			if(fun){
				fun()
			}
			console.log('已分享');
		},
		cancel : function(res) {
			console.log('已取消');
		},
		fail : function(res) {
			console.log(JSON.stringify(res));
		}
	});
	//console.log('已注册获取“发送给朋友”状态事件');
	// };

	// 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
	//document.querySelector('#onMenuShareTimeline').onclick = function() {
	wx.onMenuShareTimeline({
		title : window.share.title,
		link : window.share.link,
		imgUrl : window.share.imgUrl,
		trigger : function(res) {
			console.log('用户点击分享到朋友圈');
		},
		success : function(res) {
			if(fun){
				fun()
			}

			console.log('已分享');
		},
		cancel : function(res) {
			console.log('已取消');
		},
		fail : function(res) {
			console.log(JSON.stringify(res));
		}
	});
	//console.log('已注册获取“分享到朋友圈”状态事件');
	//};

	// 2.3 监听“分享到QQ”按钮点击、自定义分享内容及分享结果接口
	//document.querySelector('#onMenuShareQQ').onclick = function() {
	wx.onMenuShareQQ({
		title : window.share.title,
		desc : window.share.desc,
		link : window.share.link,
		imgUrl : window.share.imgUrl,
		trigger : function(res) {
			console.log('用户点击分享到QQ');
		},
		complete : function(res) {
			console.log(JSON.stringify(res));
		},
		success : function(res) {
			if(fun){
				fun()
			}
			console.log('已分享');
		},
		cancel : function(res) {
			console.log('已取消');
		},
		fail : function(res) {
			console.log(JSON.stringify(res));
		}
	});
	////console.log('已注册获取“分享到 QQ”状态事件');
	//	};

	// 2.4 监听“分享到微博”按钮点击、自定义分享内容及分享结果接口
	//document.querySelector('#onMenuShareWeibo').onclick = function() {
	wx.onMenuShareWeibo({
		title : window.share.title,
		desc : window.share.desc,
		link : window.share.link,
		imgUrl : window.share.imgUrl,
		trigger : function(res) {
			console.log('用户点击分享到微博');
		},
		complete : function(res) {
			console.log(JSON.stringify(res));
		},
		success : function(res) {
			if(fun){
				fun()
			}
			console.log('已分享');
		},
		cancel : function(res) {
			console.log('已取消');
		},
		fail : function(res) {
			console.log(JSON.stringify(res));
		}
	});
	//console.log('已注册获取“分享到微博”状态事件');
	//};


	//wx.onMenuShareAppMessage(shareData);
	//wx.onMenuShareTimeline(shareData);
	wx.showOptionMenu();
}