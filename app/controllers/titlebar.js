//おやのパラメータを受け取る？
var titleName = arguments[0].title || {};

if (titleName) {
  $.title.setText(titleName); //タイトル名を追加
}

function doWinBack(e) {
  e.source.getParent().getParent().close(); //親ウィンドウを閉じる
}
