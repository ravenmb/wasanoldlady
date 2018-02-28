
//initialize - set-up variable

var counter = document.getElementById('counter');
var lady = document.getElementById('lady');
var ladyimg = document.getElementById('ladyimg');
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
lady.style.top = fromTop + "px";
story.style.top = (fromTop + 355) + "px";


if(fromTop < 550){
  counter.innerHTML = "There was an Old Lady...";
  counter.style.backgroundColor="transparent";
  story.innerHTML = "who swallowed a fly.<br /> (scroll &#8595;)";
}else if(fromTop < 950){
  counter.innerHTML = "I don't know why...";
  counter.style.backgroundColor="#ff8080";
  ladyimg.src = 'images/old-lady-closed.png';
  story.innerHTML = "she swallowed a fly.<br />Perhaps she'll die.";
}else if(fromTop < 1450){
  counter.innerHTML = "There was an Old Lady...";
  counter.style.backgroundColor="transparent";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a spider,<br />that wriggled, and jiggled,<br />and wiggled inside her.";
}else if(fromTop < 1750){
  counter.innerHTML = "She swallowed the spider...";
  counter.style.backgroundColor="#ff6666";
  ladyimg.src = 'images/old-lady-closed.png';
  story.innerHTML = "to catch the fly.<br />I don't know why she<br />swallowed the fly!<br />Perhaps she'll die.";
}else if(fromTop < 2200){
  counter.innerHTML = "There was an Old Lady...";
  counter.style.backgroundColor="transparent";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a bird.<br />How absurd,<br />to swallow a bird!";
}else if(fromTop < 2850){
  counter.innerHTML = "She swallowed the bird...";
  counter.style.backgroundColor="#ff4d4d";
  ladyimg.src = 'images/old-lady-closed.png';
  story.innerHTML = "to catch the spider.<br />She swallowed the spider<br />to catch the fly.<br />I don't know why<br />she swallowed the fly,<br />perhaps she'll die.";
}else if(fromTop < 3550){
  counter.innerHTML = "There was an Old Lady...";
  counter.style.backgroundColor="transparent";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a cat.<br />Imagine that,<br />she swallowed a cat!";
}else if(fromTop < 4150){
  counter.innerHTML = "She swallowed the cat...";
  counter.style.backgroundColor="#ff3333";
  ladyimg.src = 'images/old-lady-closed.png';
  story.innerHTML = "to catch the bird.<br />She swallowed the bird<br />to catch the spider.<br />She swallowed the spider<br />to catch the fly.<br />I don't know why she swallowed the fly.<br />Perhaps she'll die.";
}else if(fromTop < 5050){
  counter.innerHTML = "There was an Old Lady...";
  counter.style.backgroundColor="transparent";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a dog.<br />What a hog,<br />to swallow a dog!";
}else if(fromTop < 5650){
  counter.innerHTML = "She swallowed the dog...";
  counter.style.backgroundColor="#ff1a1a";
  ladyimg.src = 'images/old-lady-closed.png';
  story.innerHTML = "to catch the cat.<br />She swallowed the cat<br />to catch the bird.<br />She swallowed the bird<br />to catch the spider.<br />She swallowed the spider<br />to catch the fly.<br />I don't know why she swallowed the fly.<br />Perhaps she'll die.";
}else if(fromTop < 9300){
  counter.innerHTML = "There was an Old Lady...";
  counter.style.backgroundColor="transparent";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a horse.";
}else if(fromTop < 9600){
  counter.innerHTML = "She's dead, of course!";
  counter.style.backgroundColor="#660000";
  ladyimg.src = 'images/old-lady-dead.png';
  story.innerHTML = "(scroll back to start over &#8593;)";
}else{
  counter.innerHTML = "There was an Old Lady...";
  counter.style.backgroundColor="transparent";
  ladyimg.src = 'images/old-lady-2.png';
}
}
