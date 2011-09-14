var Main = {
   // Main object 
	XHRObj : null
}
var widgetAPI = new Common.API.Widget(); // Create Common module
var tvKey = new Common.API.TVKeyValue();
var fileSystemObj = new FileSystem();

Main.onLoad = function () { 
	// called by <body>'s onload event
 	widgetAPI.sendReadyEvent(); // Send ready message to Application Manager
	
	$("#anchor").focus(); //Focus the anchor to recieve remote input
	
	
	//TESTING CROSS SITE
	var url = "http://hanesgiveaways.nastage.com/links.json";
//	this.XHR(url);
	
}

Main.keyDown = function(){
	var keyCode = event.keyCode;
	$('body').append("Main Key code : " + keyCode);
	
	switch (keyCode){
		case tvKey.KEY_LEFT:
			alert("left");
			document.getElementById("welcome").innerHTML = "Nice to meet you.";
			break;
		case tvKey.KEY_RIGHT:
			alert("right");
			document.getElementById("welcome").innerHTML = "I'm so happy.";
			break;
		case tvKey.KEY_UP:
			alert("up");
			document.getElementById("welcome").innerHTML = "I Love you.";
			break;
		case tvKey.KEY_DOWN:
			alert("down");
			document.getElementById("welcome").innerHTML = "Good job.";
			break;
		case tvKey.KEY_ENTER:
			alert("enter");
			break;
	}
	
}


Main.XHR = function(url){
	if (this.XHRObj != null)
		this.XHRObj.destroy();
		
	this.XHRObj = new XMLHttpRequest();
	
	if (this.XHRObj) {
		this.XHRObj.onreadystatechange = function () {
			if (Main.XHRObj.readyState == 4) {
				Main.recieveData();
			}
		};
		this.XHRObj.open("GET", url, true);
		this.XHRObj.send(null);
	}
}

Main.recieveData = function (){
	alert(this.XHRObj.responseText);
}

