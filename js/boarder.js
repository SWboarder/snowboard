//EVENT LISTENER TO INITIATE BEHAVIOURS
window.addEventListener("load", addHandlers, false);

//ADD HANDLER FUNCTION SO MULTIPLE ACTIONS CAN BE CALLED WHEN PAGE LOADS
function addHandlers(){
	var loader = document.getElementById("loader");
	
	loader.style.opacity = "0";
	
	//Use delay so that you can see the fade before the loader is destroyed, KAPOW!
	var delay=500;//1 seconds
    setTimeout(function(){
		loader.style.display = "none";
    },delay);

    var header = document.getElementById("header");
    header.style.opacity = 1;

	var width = window.innerWidth;
	var height = window.innerHeight;

	var mainTitle = document.getElementById("main-title");

	header.style.height = height + "px";
	mainTitle.style.paddingTop = Math.floor(height/2.5) + "px";


	
	//CALL FUNCTION WHEN WINDOW RESIZES SO DISPLAY ADJUSTS AS WINDOW CHANGES
	window.onresize = getNewScreenSize;
}

//FUNCTION TO HANDLE CHANGES IN WINDOW SIZE
function getNewScreenSize(){
	
	//REINITIALIZE PROPERTIES SINCE THEY HAVE CHANGED
	var width = window.innerWidth;
	var height = window.innerHeight;

	var header = document.getElementById("header");
	var mainTitle = document.getElementById("main-title");

	header.style.height = height + "px";
	mainTitle.style.paddingTop = Math.floor(height/2.5) + "px";

}

