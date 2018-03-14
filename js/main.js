
//initialize - set-up variables
var fromTop = window.pageYOffset;
var windowHt = window.innerHeight;
// could never get this one to work right, keep for future edits:
// var offset = windowHt - 726;
// main page variables
var title = document.getElementById('title');
var lady = document.getElementById('lady');
var ladyimg = document.getElementById('ladyimg');
var storycontainer = document.getElementById('storycontainer');
var story = document.getElementById('story');
var scrollback = document.getElementById('scrollback');
//fly-in animation variables
var flyfly = document.getElementById('flyfly');
var spiderfly = document.getElementById('spiderfly');
var birdfly = document.getElementById('birdfly');
var catfly = document.getElementById('catfly');
var dogfly = document.getElementById('dogfly');
var goatfly = document.getElementById('goatfly');
var cowfly = document.getElementById('cowfly');
var horsefly = document.getElementById('horsefly');

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
//these transform translates keep stuff "in place" as you scroll
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
flyfly.style.msTransform = "translateY(" + fromTop + "px)";
//-webkit-transform: translate(); /* Safari */
flyfly.style.WebkitTransform = "translateY(" + fromTop + "px)";
flyfly.style.transform = "translateY(" + fromTop + "px)";

//-ms-transform: translate(); /* IE 9 */
spiderfly.style.msTransform = "translateY(" + fromTop + "px)";
//-webkit-transform: translate(); /* Safari */
spiderfly.style.WebkitTransform = "translateY(" + fromTop + "px)";
spiderfly.style.transform = "translateY(" + fromTop + "px)";

//-ms-transform: translate(); /* IE 9 */
birdfly.style.msTransform = "translateY(" + fromTop + "px)";
//-webkit-transform: translate(); /* Safari */
birdfly.style.WebkitTransform = "translateY(" + fromTop + "px)";
birdfly.style.transform = "translateY(" + fromTop + "px)";

//-ms-transform: translate(); /* IE 9 */
catfly.style.msTransform = "translateY(" + fromTop + "px)";
//-webkit-transform: translate(); /* Safari */
catfly.style.WebkitTransform = "translateY(" + fromTop + "px)";
catfly.style.transform = "translateY(" + fromTop + "px)";

//-ms-transform: translate(); /* IE 9 */
dogfly.style.msTransform = "translateY(" + fromTop + "px)";
//-webkit-transform: translate(); /* Safari */
dogfly.style.WebkitTransform = "translateY(" + fromTop + "px)";
dogfly.style.transform = "translateY(" + fromTop + "px)";

//-ms-transform: translate(); /* IE 9 */
goatfly.style.msTransform = "translateY(" + fromTop + "px)";
//-webkit-transform: translate(); /* Safari */
goatfly.style.WebkitTransform = "translateY(" + fromTop + "px)";
goatfly.style.transform = "translateY(" + fromTop + "px)";

//-ms-transform: translate(); /* IE 9 */
cowfly.style.msTransform = "translateY(" + fromTop + "px)";
//-webkit-transform: translate(); /* Safari */
cowfly.style.WebkitTransform = "translateY(" + fromTop + "px)";
cowfly.style.transform = "translateY(" + fromTop + "px)";

//-ms-transform: translate(); /* IE 9 */
horsefly.style.msTransform = "translateY(" + fromTop + "px)";
//-webkit-transform: translate(); /* Safari */
horsefly.style.WebkitTransform = "translateY(" + fromTop + "px)";
horsefly.style.transform = "translateY(" + fromTop + "px)";

if(fromTop > -10 && fromTop < 350){
  title.style.color = "darkgray";
  title.innerHTML = "(There was an Old Lady)...";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a fly.<br /> (scroll &#8595;)";
  flyfly.style.left="-1500px";
  spiderfly.style.left="-1500px";
  birdfly.style.left="-1500px";
  catfly.style.left="-1500px";
  dogfly.style.left="-1500px";
  goatfly.style.left = "-1500px";
  cowfly.style.left = "-1500px";
  horsefly.style.left = "-1500px";

}else if(fromTop > 350 && fromTop < 715){
  title.innerHTML = "(There was an Old Lady)...";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a fly.<br /> (scroll &#8595;)";
  flyfly.style.left="-1500px";

}else if(fromTop > 715 && fromTop < 930){
  title.innerHTML = "I don't know why...";
  ladyimg.src = 'images/old-lady-closed.png';
  story.innerHTML = "she swallowed a fly.<br />Perhaps she'll die.";
  flyfly.style.left="-10px";

}else if(fromTop > 930 && fromTop < 1405){
  title.innerHTML = "There was an Old Lady...";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a spider,<br />that wriggled, and jiggled,<br />and wiggled inside her.";
  spiderfly.style.left = "-1500px";

}else if(fromTop > 1405 && fromTop < 1700){
  title.innerHTML = "She swallowed the spider...";
  ladyimg.src = 'images/old-lady-closed.png';
  story.innerHTML = "to catch the fly.<br />I don't know why she<br />swallowed the fly!<br />Perhaps she'll die.";
  spiderfly.style.left = "-15px";

}else if(fromTop > 1700 && fromTop < 2225){
  title.innerHTML = "There was an Old Lady...";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a bird.<br />How absurd,<br />to swallow a bird!";
  birdfly.style.left="-1500px";

}else if(fromTop > 2225 && fromTop < 2695){
  title.innerHTML = "She swallowed the bird...";
  ladyimg.src = 'images/old-lady-closed.png';
  story.innerHTML = "to catch the spider.<br />that wriggled, and jiggled,<br />and wiggled inside her.<br />She swallowed the spider<br />to catch the fly.<br />I don't know why<br />she swallowed the fly,<br />perhaps she'll die.";
  birdfly.style.left="-40px";

}else if(fromTop > 2695 && fromTop < 3300){
  title.innerHTML = "There was an Old Lady...";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a cat.<br />Imagine that,<br />she swallowed a cat!";
  catfly.style.left="-1500px";

}else if(fromTop > 3300 && fromTop < 4085){
  title.innerHTML = "She swallowed the cat...";
  ladyimg.src = 'images/old-lady-closed.png';
  story.innerHTML = "to catch the bird.<br />She swallowed the bird<br />to catch the spider.<br />that wriggled, and jiggled,<br />and wiggled inside her.<br />She swallowed the spider<br />to catch the fly.<br />I don't know why she swallowed the fly.<br />Perhaps she'll die.";
  catfly.style.left="-40px";

}else if(fromTop > 4085 && fromTop < 4780){
  title.innerHTML = "There was an Old Lady...";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a dog.<br />What a hog,<br />to swallow a dog!";
  dogfly.style.left="-1500px";

}else if(fromTop > 4780 && fromTop < 5290){
  title.innerHTML = "She swallowed the dog...";
  ladyimg.src = 'images/old-lady-closed.png';
  story.innerHTML = "to catch the cat.<br />She swallowed the cat<br />to catch the bird.<br />She swallowed the bird<br />to catch the spider,<br />that wriggled, and jiggled,<br />and wiggled inside her.<br />She swallowed the spider to catch the fly.<br />I don't know why she swallowed the fly.<br />Perhaps she'll die.";
  dogfly.style.left="-60px";

}else if(fromTop > 5290 && fromTop < 6075){
  title.innerHTML = "There was an Old Lady...";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a goat.<br />Just opened her throat,<br />and swallowed a goat!";
  goatfly.style.left="-1500px";

}else if(fromTop > 6075 && fromTop < 6780){
  title.innerHTML = "She swallowed the goat...";
  ladyimg.src = 'images/old-lady-closed.png';
  story.innerHTML = "to catch the dog.<br />She swallowed the dog<br /> to catch the cat.<br />She swallowed the cat<br /> to catch the bird.<br />She swallowed the bird<br /> to catch the spider,<br />that wriggled, and jiggled,<br />and wiggled inside her.<br />She swallowed the spider to catch the fly.<br />I don't know why she swallowed the fly.<br />Perhaps she'll die.";
  goatfly.style.left="-65px";

}else if(fromTop > 6780 && fromTop < 7650){
  title.innerHTML = "There was an Old Lady...";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a cow.<br />I don't know how<br />she swallowed a cow!";
  cowfly.style.left="-1500px";

}else if(fromTop > 7650 && fromTop < 7900){
  title.innerHTML = "She swallowed the cow...";
  ladyimg.src = 'images/old-lady-closed.png';
  story.innerHTML = "to catch the goat.<br />She swallowed the goat<br />to catch the dog.<br />She swallowed the dog to catch the cat.<br />She swallowed the cat to catch the bird.<br />She swallowed the bird<br />to catch the spider,<br />that wriggled, and jiggled,<br />and wiggled inside her.<br />She swallowed the spider to catch the fly.<br />I don't know why she swallowed the fly.<br />Perhaps she'll die.";
  cowfly.style.left="-75px";

}else if(fromTop > 7900 && fromTop < 8650){
  title.innerHTML = "There was an Old Lady...";
  ladyimg.src = 'images/old-lady-2.png';
  story.innerHTML = "who swallowed a horse.";
  horsefly.style.left = "-1500px";

}else if(fromTop > 8650 && fromTop < 10000){
  title.innerHTML = "(She's dead, of course)";
  title.style.color="#660000";
  ladyimg.src = 'images/old-lady-dead2.png';
  story.innerHTML = "<center>She's dead,<br />of course!</center>";
  storycontainer.style.color = '#660000';
  horsefly.style.left = "-90px";

}else{
  title.innerHTML = "There was an Old Lady...";
  ladyimg.src = 'images/old-lady-2.png';
}
}

function scrollFunction() {
    if (document.body.scrollTop > 8630 || document.documentElement.scrollTop > 8630) {
        scrollback.style.display = "block";
        scrollback.style.top = "9850px";
    } else {
        scrollback.style.display = "none";
    }
}
// When the user clicks on the scrollback button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}
