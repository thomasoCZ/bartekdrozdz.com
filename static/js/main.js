if(location.host.indexOf("localhost") > -1 || location.host.indexOf("192.168") > -1) {
	document.write('<script src=\"http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1\"></' + 'script>');
}

window.addEventListener("load", function() {
	Data.setMain(rawData);

	Site();

	MainPanel();
	AboutPanel();
	ContentPanel();
	
	Router();
});