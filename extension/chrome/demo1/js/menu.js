var createMenu = function(){
	var option={
		'title':'demo',
		contexts:['all'],
		id:'inter',
		documentUrlPatterns:['http://*/*']
	}
	chrome.contextMenus.create(option); 
	chrome.contextMenus.onClicked.addListener(function(info,tab){  
    alert('click')
}); 
}
createMenu();