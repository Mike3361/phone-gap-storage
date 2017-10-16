var paused_count =0;
var resumed_count = 0;
var launched_count = 0;
var key = "pen";
var value = "blue";
var key = "pencil";
var value = "black";

apple = {"name": "BOUNTY", "product": "BOUNTY bar 57g"};
myChocolate = JSON.stringify(apple);
localStorage.setItem("apple",myChocolate);






window.localStorage.setItem("pen","blue");
window.localStorage.setItem("pencil","black");
window. localStorage.setItem(key, value);
document.addEventListener("deviceready", onDeviceReady, false);
		
	

var value = window.localStorage.getItem(key);


alert(myChocolate)
alert("black")

function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);
}


// device APIs are available
//
    function onDeviceReady() {
	
	document.addEventListener("resume", onResume, false);
	document.addEventListener("pause", onPause, false);
	
	launched_count++;
	updateDisplay();
	    
	alert("device ready");
    }


    function onPause() {
	
	paused_count++;
	updateDisplay();
	    
	alert("pause");
    }
	

    function onResume() {
		
	resumed_count++;
	updateDisplay();
	    
	alert("resume");
    }
