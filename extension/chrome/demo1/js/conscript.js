console.log('conScript..')
var main =$("#main")
//main.css({'background-color':'red'})

var removeCsdnAd=function(){
	var layerd = $("#layerd");
	layerd.remove();
}

var removeTracking = function(){
	var tracking = $(".csdn-tracking-statistics");
	tracking.remove();
}

var createMenu = function(){
//	var option={
//		'title':"demo1",
//		 'onclick':function(){alert('clicked!!')}
//	};
//	
//	chrome.contextMenus.create(option, function(){
//		
//	});
	chrome.contextMenus.create({'title':'出境游项目',contexts:['all'],id:'inter',documentUrlPatterns:['http://*/*']}); 
}

removeCsdnAd();
removeTracking();
//createMenu();
