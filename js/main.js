
//initialize - set-up variable

var counter = document.getElementById('counter');
var lady = document.getElementById('lady');
var story = document.getElementById('story');
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
story.style.top = (fromTop + 375) + "px";


if(fromTop < 550){
  counter.innerHTML = "There was an Old Lady...";
  counter.style.backgroundColor="transparent";
  story.innerHTML = "who swallowed a fly."
  //counter.style.backgroundImage="url(images/blow-fly.png)";
}else if(fromTop < 950){
  counter.innerHTML = "I don't know why...";
  counter.style.backgroundColor="#ff8080";
  story.innerHTML = "she swallowed a fly. Perhaps she'll die."
}else if(fromTop < 1350){
  counter.innerHTML = "There was an Old Lady...";
  counter.style.backgroundColor="transparent";
  story.innerHTML = "who swallowed a spider, that wriggled, and jiggled, and wiggled inside her."
}else if(fromTop < 1650){
  counter.innerHTML = "She swallowed the spider...";
  counter.style.backgroundColor="#ff6666";
  story.innerHTML = "to catch the fly. I dunno why she swallowed the fly! Perhaps she'll die."
}else if(fromTop < 2350){
  counter.innerHTML = "There was an Old Lady...";
  counter.style.backgroundColor="transparent";
  story.innerHTML = "who swallowed a bird. How absurd, to swallow a bird!"
}else{
  counter.innerHTML = "There was an Old Lady...";
  counter.style.backgroundColor="transparent";
}
}
