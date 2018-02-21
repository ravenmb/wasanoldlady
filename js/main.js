
//initialize - set-up variable

var counter = document.getElementById('counter');
var lady = document.getElementById('lady');
var fromTop = window.pageYOffset;
var windowHt = window.innerHeight;

//when user scrolls, update variable fromTop to change stuff on page
//window.onscroll is a boolean (yes/no)

window.onscroll = function(){
  //when user scrolls, do all of this
fromTop = window.pageYOffset;
//test if it works
console.log(fromTop);

counter.style.top = fromTop + "px";
lady.style.top = (fromTop - 70) + "px";

if(fromTop < 550){
  counter.innerHTML = "There was an Old Lady...";
  counter.style.backgroundColor="transparent";
  //counter.style.backgroundImage="url(images/blow-fly.png)";
}else if(fromTop < 950){
  counter.innerHTML = "I don't know why...";
  counter.style.backgroundColor="#ff8080";
}else if(fromTop < 1350){
  counter.innerHTML = "There was an Old Lady...";
  counter.style.backgroundColor="transparent";
}else if(fromTop < 1650){
  counter.innerHTML = "I don't know why...";
  counter.style.backgroundColor="#ff6666";
}else{
  counter.innerHTML = "There was an Old Lady...";
  counter.style.backgroundColor="transparent";
}
}
