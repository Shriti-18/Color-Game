console.log("Connected");
alert("Connected");
var button=document.querySelector("button");
var body=document.querySelector("body");
window.setTimeout(function(){
// var ispurple=false;
button.addEventListener("click",function(){
	// if(ispurple)
	// 	body.style.background="white";
	// else
	// {
	// 	body.style.background="purple";
	// }
 //  ispurple=!ispurple;
 document.body.classList.toggle("purple");
})	
},500);
