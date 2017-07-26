var i=0;
setInterval(function(){
	console.log(i)
	i++;
},1000);
$(function(){
	var btn = $("#btn")
	btn.click(function(){
	change();
	console.log('clicked')
});

var change=function(){
	chrome.browserAction.onClicked.addListener(
  function(tab) { //tab对象表示当前（用户点击browser action的时候）处于活动状态的tab
//  chrome.tabs.executeScript({
//    //设置活动状态的tab显示的页面的document对象的属性
//    code: 'document.body.style.backgroundColor="red"'//通过JS代码
//  });
    chrome.tabs.executeScript({file: "conscript.js"});//通过JS文件
});
}

});

