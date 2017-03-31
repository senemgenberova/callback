var circle = document.getElementById("circle");
var img = document.getElementById("img");
var n = Number(prompt("Enter seconds"));

circle.addEventListener("click",function(callback) {
	circle.style.border = "5px solid #0078D7";
	var set_time =setTimeout(boyut,n*1000);

}) 

function boyut(){
	img.style.width = "235px";
	img.style.transition = "all 1s ease-in-out";
	circle.style.border = "none";
}