chrome.browserAction.onClicked.addListener(function(tab){
chrome.tabs.insertCSS(null,{
		file: "style.css"
	},function() {

});
})