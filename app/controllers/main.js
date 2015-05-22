var args = arguments[0] || {};

setInterval(function(){
	var d = new Date();
	var t = {};
	t.hour =  ( "0" + d.getHours() ).slice(-2);
	t.minute = ( "0" + d.getMinutes() ).slice(-2);
	t.second = ( "0" + d.getSeconds() ).slice(-2);
	$.watch.text = t.hour + ":" + t.minute + ":" + t.second;
} , 100 );

function doTsuchi(e) {
        var intent = Ti.Android.createIntent({
            flags : Ti.Android.FLAG_ACTIVITY_CLEAR_TOP | Ti.Android.FLAG_ACTIVITY_NEW_TASK,
            className: 'jp.ne.litcity.ks.tsuchi.TsuchiActivity'        
        });
        var pending = Ti.Android.createPendingIntent({
            intent: intent,
            flags: Titanium.Android.FLAG_UPDATE_CURRENT 
        });
        var notification = Ti.Android.createNotification({
            //通知領域に表示されるアイコンの指定
            icon: Ti.App.Android.R.drawable.appicon,
            //通知領域に表示されるメッセージのタイトル部分
            contentTitle: 'つーちがきました',
            //通知領域に表示されるメッセージ部分
            contentText: 'つーちもと：匿名希望さん...嘘です。まだできてません。',
            //通知領域の右側に表示される付属情報.多分数字だけしか指定できない.
            number: 5,
            //クリック時に発行されるIntentの指定
            contentIntent: pending,
            //以下の値を指定しておかないと通知時にLEDが光らないし、バイブも起きない
            //音は使ってないからDEFAULT_LIGHTS | DEFAULT_VIBRATEでもいいかも
            defaults:  Titanium.Android.DEFAULT_ALL, // DEFAULT_LIGHTS | DEFAULT_SOUND | DEFAULT_VIBRATE
            //画面を切ってる際に通知があることを知らせる為にLEDを光らせる
            flags: Ti.Android.FLAG_SHOW_LIGHTS,
            //通知メッセージが届いた際に画面上部の通知領域に表示されるメッセージ
            tickerText: "つーちがきました"
        });
        //通知番号は通知メッセージを識別するのに使う
        //同じ通知番号の通知を２つ以上送っても通知領域に表示されるメッセージは１つだけ
        //異なる通知番号の通知を送ると複数の通知が通知領域に表示される
        var notificationId = 1;
        Ti.Android.NotificationManager.notify(notificationId, notification);
}