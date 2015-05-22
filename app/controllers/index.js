var Cloud = require('ti.cloud');
Cloud.debug = true;  // optional; if you add this line, set it to false for production

//Androidのタイトルバー消す
//テーマとして実装しているので不要
// $.index.addEventListener('open', function() {
	// if (Ti.Platform.osname == "android") {
		// $.index.activity.actionBar.hide();
	// }
// });
function showtoast(mes) {
	var toast = Ti.UI.createNotification({
	    message: mes,
	    duration: Ti.UI.NOTIFICATION_DURATION_SHORT
	});
	toast.show();
}

function doHajimeru(e) {
	doRegist();
}

function nextpage() {
	var main = Alloy.createController('main').getView();
	main.open();	
}

function doRegist() {
	showtoast('しばらくおまちください');
	if ($.makegroup.value) {
		// 登録処理
	    Cloud.Users.create({
		  username : $.name.value,
		  password : $.aikotoba.value,
		  password_confirmation : $.aikotoba.value,
		  role : $.group.value,
	    }, function(e) {
	        if (e.success) {
	            showtoast(e.users[0].username + " 作成しました");
	            nextpage();
	        } else {
	            alert('Error:' + ((e.error && e.message) || JSON.stringify(e)));
	        }
	    });
	}
	else {
		// ログイン
		Cloud.Users.login({
		    login: $.name.value,
		    password: $.aikotoba.value,
		}, function (e) {
		    if (e.success) {
	            showtoast(e.users[0].username + " ログインしました");
	            nextpage();
		    } else {
		        alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		    }
		});
	}
}

$.index.open();
