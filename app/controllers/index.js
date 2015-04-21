function doHajimeru(e) {
	var  tsuchi = Alloy.createController("tsuchi").getView();
	tsuchi.open();
}

//事前処理
$.index.addEventListener('open', function() {
	//Androidのタイトルバー消す
	if (Ti.Platform.osname == "android") {
		$.index.activity.actionBar.hide();
	}
});

$.index.open();
