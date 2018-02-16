
//initialize - set-up variable

var counter = document.getElementById('counter');
var fromTop = window.pageYOffset;
var windowHt = window.innerHeight;

counter.innerHTML = "counter text"

//when user scrolls, update variable fromTop to change stuff on page
//window.onscroll is a boolean (yes/no)

window.onscroll = function(){
  //when user scrolls, do all of this
fromTop = window.pageYOffset;
//test if it works
console.log(fromTop);

counter.style.top = fromTop + "px";

if(fromTop > 725){
  counter.innerHTML = "I don't know why";
  counter.style.backgroundColor="red";
  counter.style.backgroundImage="url(images/blow-fly.png)";
}else{counter.innerHTML = "counter text";
}
}
