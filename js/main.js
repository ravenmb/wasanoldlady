
//initialize - set-up variables

var counter = document.getElementById('counter');
var lady = document.getElementById('lady');
var ladyimg = document.getElementById('ladyimg');
var storycontainer = document.getElementById('storycontainer');
var story = document.getElementById('story');
var flyfly = document.getElementById('flyfly');
var fromTop = window.pageYOffset;
var windowHt = window.innerHeight;

//when user scrolls, update variable fromTop to change stuff on page
//window.onscroll is a boolean (yes/no)

//scroll to top button
//adapted from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top

window.onscroll = function(){
  //when user scrolls, do all of this
fromTop = window.pageYOffset;
//test if it works
console.log(fromTop);
//scroll to top button
scrollFunction();

//-ms-transform: translate(); /* IE 9 */
counter.style.msTransform = "translateY(" + fromTop + "px)";
//-webkit-transform: translate(); /* Safari */
counter.style.WebkitTransform = "translateY(" + fromTop + "px)";
counter.style.transform = "translateY(" + fromTop + "px)";

//-ms-transform: translate(); /* IE 9 */
lady.style.msTransform = "translateY(" + fromTop + "px)";
//-webkit-transform: translate(); /* Safari */
lady.style.WebkitTransform = "translateY(" + fromTop + "px)";
lady.style.transform = "translateY(" + fromTop + "px)";

//-ms-transform: translate(); /* IE 9 */
storycontainer.style.msTransform = "translateY(" + fromTop + "px)";
//-webkit-transform: translate(); /* Safari */
storycontainer.style.WebkitTransform = "translateY(" + fromTop + "px)";
storycontainer.style.transform = "translateY(" + fromTop + "px)";

//-ms-transform: translate(); /* IE 9 */
flyfly.style.msTransform = "translateY(" + fromTop + "px)";
//-webkit-transform: translate(); /* Safari */
flyfly.style.WebkitTransform = "translateY(" + fromTop + "px)";
flyfly.style.transform = "translateY(" + fromTop + "px)";


if(fromTop > -10 && fromTop < 350){
  counter.innerHTML = "There was an Old Lady...";
  counter.style.backgroundColor="#adebeb";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a fly.<br /> (scroll &#8595;)";
  storycontainer.style.backgroundColor="#adebeb";
}else if(fromTop > 350 && fromTop < 715){
  counter.innerHTML = "There was an Old Lady...";
  counter.style.backgroundColor="#adebeb";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a fly.<br /> (scroll &#8595;)";
}else if(fromTop > 715 && fromTop < 930){
  counter.innerHTML = "I don't know why...";
  counter.style.backgroundColor="#ff8080";
  ladyimg.src = 'images/old-lady-closed.png';
  story.innerHTML = "she swallowed a fly.<br />Perhaps she'll die.";
  //flyfly.style.left="-10px";
}else if(fromTop > 930 && fromTop < 1405){
  counter.innerHTML = "There was an Old Lady...";
  counter.style.backgroundColor="#adebeb";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a spider,<br />that wriggled, and jiggled,<br />and wiggled inside her.";
}else if(fromTop > 1405 && fromTop < 1700){
  counter.innerHTML = "She swallowed the spider...";
  counter.style.backgroundColor="#ff6666";
  ladyimg.src = 'images/old-lady-closed.png';
  story.innerHTML = "to catch the fly.<br />I don't know why she<br />swallowed the fly!<br />Perhaps she'll die.";
}else if(fromTop > 1700 && fromTop < 2225){
  counter.innerHTML = "There was an Old Lady...";
  counter.style.backgroundColor="#adebeb";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a bird.<br />How absurd,<br />to swallow a bird!";
}else if(fromTop > 2225 && fromTop < 2695){
  counter.innerHTML = "She swallowed the bird...";
  counter.style.backgroundColor="#ff4d4d";
  ladyimg.src = 'images/old-lady-closed.png';
  story.innerHTML = "to catch the spider.<br />She swallowed the spider<br />to catch the fly.<br />I don't know why<br />she swallowed the fly,<br />perhaps she'll die.";
}else if(fromTop > 2695 && fromTop < 3300){
  counter.innerHTML = "There was an Old Lady...";
  counter.style.backgroundColor="#adebeb";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a cat.<br />Imagine that,<br />she swallowed a cat!";
}else if(fromTop > 3300 && fromTop < 4085){
  counter.innerHTML = "She swallowed the cat...";
  counter.style.backgroundColor="#ff3333";
  ladyimg.src = 'images/old-lady-closed.png';
  story.innerHTML = "to catch the bird.<br />She swallowed the bird<br />to catch the spider.<br />She swallowed the spider<br />to catch the fly.<br />I don't know why she swallowed the fly.<br />Perhaps she'll die.";
}else if(fromTop > 4085 && fromTop < 4780){
  counter.innerHTML = "There was an Old Lady...";
  counter.style.backgroundColor="#adebeb";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a dog.<br />What a hog,<br />to swallow a dog!";
}else if(fromTop > 4780 && fromTop < 5290){
  counter.innerHTML = "She swallowed the dog...";
  counter.style.backgroundColor="#ff1a1a";
  ladyimg.src = 'images/old-lady-closed.png';
  story.innerHTML = "to catch the cat.<br />She swallowed the cat<br />to catch the bird.<br />She swallowed the bird<br />to catch the spider.<br />She swallowed the spider<br />to catch the fly.<br />I don't know why she swallowed the fly.<br />Perhaps she'll die.";
}else if(fromTop > 5290 && fromTop < 6075){
  counter.innerHTML = "There was an Old Lady...";
  counter.style.backgroundColor="#adebeb";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a goat.<br />Just opened her throat,<br />and swallowed a goat!";
}else if(fromTop > 6075 && fromTop < 6780){
  counter.innerHTML = "She swallowed the goat...";
  counter.style.backgroundColor="#ff0000";
  ladyimg.src = 'images/old-lady-closed.png';
  story.innerHTML = "<h3>to catch the dog.<br />She swallowed the dog<br />to catch the cat.<br />She swallowed the cat<br />to catch the bird.<br />She swallowed the bird<br />to catch the spider.<br />She swallowed the spider<br />to catch the fly.<br />I don't know why she swallowed the fly.<br />Perhaps she'll die.</h3>";
}else if(fromTop > 6780 && fromTop < 7650){
  counter.innerHTML = "There was an Old Lady...";
  counter.style.backgroundColor="#adebeb";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a cow.<br />I don't know how<br />she swallowed a cow!";
}else if(fromTop > 7650 && fromTop < 8180){
  counter.innerHTML = "She swallowed the cow...";
  counter.style.backgroundColor="#cc0000";
  ladyimg.src = 'images/old-lady-closed.png';
  story.innerHTML = "<h3>to catch the goat.<br />She swallowed the goat<br />to catch the dog.<br />She swallowed the dog<br />to catch the cat.<br />She swallowed the cat<br />to catch the bird.<br />She swallowed the bird<br />to catch the spider.<br />She swallowed the spider<br />to catch the fly.<br />I don't know why she swallowed the fly.<br />Perhaps she'll die.</h3>";
}else if(fromTop > 8180 && fromTop < 9110){
  counter.innerHTML = "There was an Old Lady...";
  counter.style.backgroundColor="#adebeb";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a horse.";
}else if(fromTop > 9110 && fromTop < 10000){
  counter.innerHTML = "She's dead, of course!";
  counter.style.backgroundColor="#660000";
  ladyimg.src = 'images/old-lady-dead2.png';
  story.innerHTML = "<center>The End.</center>";
  storycontainer.style.backgroundColor='#660000';
}else{
  counter.innerHTML = "There was an Old Lady...";
  counter.style.backgroundColor="#adebeb";
  ladyimg.src = 'images/old-lady-2.png';
  storycontainer.style.backgroundColor="#adebeb";
}
}

function scrollFunction() {
    if (document.body.scrollTop > 9000 || document.documentElement.scrollTop > 9000) {
        document.getElementById("scrollback").style.display = "block";
    } else {
        document.getElementById("scrollback").style.display = "none";
    }
}
// When the user clicks on the scrollback button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
