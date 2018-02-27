
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

  //There was an old lady who swallowed a dog.
  //What a hog! To swallow a dog!
  //She swallowed the dog to catch the cat...
  //She swallowed the cat to catch the bird ...
  //She swallowed the bird to catch the spider
}else if(fromTop < 950){
  counter.innerHTML = "I don't know why...";
  counter.style.backgroundColor="#ff8080";
  story.innerHTML = "she swallowed a fly. Perhaps she'll die."
}else if(fromTop < 1350){
  counter.innerHTML = "There was an Old Lady...";
  counter.style.backgroundColor="transparent";
  story.innerHTML = "who swallowed a spider, that wriggled, and jiggled, and wiggled inside her."
}else if(fromTop < 1750){
  counter.innerHTML = "She swallowed the spider...";
  counter.style.backgroundColor="#ff6666";
  story.innerHTML = "to catch the fly. I dunno why she swallowed the fly! Perhaps she'll die."
}else if(fromTop < 2350){
  counter.innerHTML = "There was an Old Lady...";
  counter.style.backgroundColor="transparent";
  story.innerHTML = "who swallowed a bird. How absurd, to swallow a bird!"
}else if(fromTop < 3050){
  counter.innerHTML = "She swallowed the bird...";
  counter.style.backgroundColor="#ff4d4d";
  story.innerHTML = "to catch the spider. She swallowed the spider to catch the fly. I don't know why she swallowed the fly, perhaps she'll die."
}else if(fromTop < 3850){
  counter.innerHTML = "There was an Old Lady...";
  counter.style.backgroundColor="transparent";
  story.innerHTML = "who swallowed a cat. Imagine that, she swallowed a cat!"
}else if(fromTop < 4550){
  counter.innerHTML = "She swallowed the cat...";
  counter.style.backgroundColor="transparent";
  story.innerHTML = "to catch the bird. She swallowed the bird to catch the spider. She swallowed the spider to catch the fly. I don't know why she swallowed the fly. Perhaps she'll die."
}else if(fromTop < 9350){
  counter.innerHTML = "There was an Old Lady...";
  counter.style.backgroundColor="transparent";
  story.innerHTML = "who swallowed a horse."
}else if(fromTop < 9850){
  counter.innerHTML = "She's dead, of course!";
  counter.style.backgroundColor="#660000";
  story.innerHTML = "(scroll back to start over &#8593;)"

}else{
  counter.innerHTML = "There was an Old Lady...";
  counter.style.backgroundColor="transparent";
}
}
