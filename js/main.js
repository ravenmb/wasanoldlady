
//initialize - set-up variables

var title = document.getElementById('title');
var lady = document.getElementById('lady');
var ladyimg = document.getElementById('ladyimg');
var storycontainer = document.getElementById('storycontainer');
var story = document.getElementById('story');
var scrollback = document.getElementById('scrollback');
var flyfly = document.getElementById('flyfly');
var fromTop = window.pageYOffset;
var windowHt = window.innerHeight;
var offset = windowHt - 726;

//when user scrolls, update variable fromTop to change stuff on page
//window.onscroll is a boolean (yes/no)

//scroll to top button
//adapted from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top

window.onscroll = function(){
  //when user scrolls, do all of this
fromTop = window.pageYOffset;
//test if it works
console.log(fromTop);
console.log(windowHt);
//scroll to top button
scrollFunction();

//-ms-transform: translate(); /* IE 9 */
title.style.msTransform = "translateY(" + fromTop + "px)";
//-webkit-transform: translate(); /* Safari */
title.style.WebkitTransform = "translateY(" + fromTop + "px)";
title.style.transform = "translateY(" + fromTop + "px)";

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
//flyfly.style.msTransform = "translateY(" + fromTop + "px)";
//-webkit-transform: translate(); /* Safari */
//flyfly.style.WebkitTransform = "translateY(" + fromTop + "px)";
//flyfly.style.transform = "translateY(" + fromTop + "px)";


if(fromTop > -10 && fromTop < 350){
  title.innerHTML = "There was an Old Lady...";
  //title.style.backgroundColor="#adebeb";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a fly.<br /> (scroll &#8595;)";
//  storycontainer.style.backgroundColor="#adebeb";
}else if(fromTop > 350 && fromTop < 715){
  title.innerHTML = "There was an Old Lady...";
//  title.style.backgroundColor="#adebeb";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a fly.<br /> (scroll &#8595;)";
}else if(fromTop > 715 && fromTop < 930){
  title.innerHTML = "I don't know why...";
//  title.style.backgroundColor="#ff8080";
  ladyimg.src = 'images/old-lady-closed.png';
  story.innerHTML = "she swallowed a fly.<br />Perhaps she'll die.";
  //flyfly.style.left="-10px";
}else if(fromTop > 930 && fromTop < 1405){
  title.innerHTML = "There was an Old Lady...";
//  title.style.backgroundColor="#adebeb";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a spider,<br />that wriggled, and jiggled,<br />and wiggled inside her.";
}else if(fromTop > 1405 && fromTop < 1700){
  title.innerHTML = "She swallowed the spider...";
//  title.style.backgroundColor="#ff6666";
  ladyimg.src = 'images/old-lady-closed.png';
  story.innerHTML = "to catch the fly.<br />I don't know why she<br />swallowed the fly!<br />Perhaps she'll die.";
}else if(fromTop > 1700 && fromTop < 2225){
  title.innerHTML = "There was an Old Lady...";
//  title.style.backgroundColor="#adebeb";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a bird.<br />How absurd,<br />to swallow a bird!";
}else if(fromTop > 2225 && fromTop < 2695){
  title.innerHTML = "She swallowed the bird...";
//  title.style.backgroundColor="#ff4d4d";
  ladyimg.src = 'images/old-lady-closed.png';
  story.innerHTML = "to catch the spider.<br />She swallowed the spider<br />to catch the fly.<br />I don't know why<br />she swallowed the fly,<br />perhaps she'll die.";
}else if(fromTop > 2695 && fromTop < 3300){
  title.innerHTML = "There was an Old Lady...";
//  title.style.backgroundColor="#adebeb";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a cat.<br />Imagine that,<br />she swallowed a cat!";
}else if(fromTop > 3300 && fromTop < 4085){
  title.innerHTML = "She swallowed the cat...";
//  title.style.backgroundColor="#ff3333";
  ladyimg.src = 'images/old-lady-closed.png';
  story.innerHTML = "to catch the bird.<br />She swallowed the bird<br />to catch the spider.<br />She swallowed the spider<br />to catch the fly.<br />I don't know why she swallowed the fly.<br />Perhaps she'll die.";
}else if(fromTop > 4085 && fromTop < 4780){
  title.innerHTML = "There was an Old Lady...";
//  title.style.backgroundColor="#adebeb";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a dog.<br />What a hog,<br />to swallow a dog!";
}else if(fromTop > 4780 && fromTop < 5290){
  title.innerHTML = "She swallowed the dog...";
//  title.style.backgroundColor="#ff1a1a";
  ladyimg.src = 'images/old-lady-closed.png';
  story.innerHTML = "to catch the cat.<br />She swallowed the cat<br />to catch the bird.<br />She swallowed the bird<br />to catch the spider.<br />She swallowed the spider<br />to catch the fly.<br />I don't know why she swallowed the fly.<br />Perhaps she'll die.";
}else if(fromTop > 5290 && fromTop < 6075){
  title.innerHTML = "There was an Old Lady...";
//  title.style.backgroundColor="#adebeb";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a goat.<br />Just opened her throat,<br />and swallowed a goat!";
}else if(fromTop > 6075 && fromTop < 6780){
  title.innerHTML = "She swallowed the goat...";
//  title.style.backgroundColor="#ff0000";
  ladyimg.src = 'images/old-lady-closed.png';
  story.innerHTML = "<h3>to catch the dog.<br />She swallowed the dog<br />to catch the cat.<br />She swallowed the cat<br />to catch the bird.<br />She swallowed the bird<br />to catch the spider.<br />She swallowed the spider<br />to catch the fly.<br />I don't know why she swallowed the fly.<br />Perhaps she'll die.</h3>";
}else if(fromTop > 6780 && fromTop < 7650){
  title.innerHTML = "There was an Old Lady...";
//  title.style.backgroundColor="#adebeb";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a cow.<br />I don't know how<br />she swallowed a cow!";
}else if(fromTop > 7650 && fromTop < 8180){
  title.innerHTML = "She swallowed the cow...";
//  title.style.backgroundColor="#cc0000";
  ladyimg.src = 'images/old-lady-closed.png';
  story.innerHTML = "<h3>to catch the goat.<br />She swallowed the goat<br />to catch the dog.<br />She swallowed the dog<br />to catch the cat.<br />She swallowed the cat<br />to catch the bird.<br />She swallowed the bird<br />to catch the spider.<br />She swallowed the spider<br />to catch the fly.<br />I don't know why she swallowed the fly.<br />Perhaps she'll die.</h3>";
}else if(fromTop > 8180 && fromTop < 9000){
  title.innerHTML = "There was an Old Lady...";
//  title.style.backgroundColor="#adebeb";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a horse.";
}else if(fromTop > 9000 && fromTop < 10000){
  title.innerHTML = "She's dead, of course!";
  title.style.color="#660000";
  ladyimg.src = 'images/old-lady-dead2.png';
  story.innerHTML = "<center>The End.</center>";
  storycontainer.style.color='#660000';
}else{
  title.innerHTML = "There was an Old Lady...";
//  title.style.backgroundColor="#adebeb";
  ladyimg.src = 'images/old-lady-2.png';
//  storycontainer.style.backgroundColor="#adebeb";
}
}

function scrollFunction() {
    if (document.body.scrollTop > 9000 || document.documentElement.scrollTop > 9000) {
        scrollback.style.display = "block";
        scrollback.style.bottom = offset + "px";
    } else {
        scrollback.style.display = "none";
    }
}
// When the user clicks on the scrollback button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}
