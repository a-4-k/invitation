$(".flip-container").click(function() {
    $(this).toggleClass("flip");
});
// ------------------------NavBar----------------------------------------------------

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


// -----------------------Home-Gallery----------------------------------------------
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

// -------------------------------Venue-------------------------------------------
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel,5000);
}

// --------------------------VENUE DETAILS------------------------------------------------
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

//--------------------------------------------------------------------------------------
// ------------------------------Countdown Timer-------------------------------------------
var countDownDate = new Date("Dec 1, 2020 15:30:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = days + "d";
  document.getElementById("hours").innerHTML = hours + "h";
  document.getElementById("minutes").innerHTML = minutes + "m";
  document.getElementById("seconds").innerHTML = seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("seconds").innerHTML = "EXPIRED";
  }
}, 1000);


// --------------------------------Location-------------------------------------
/*
a Pen by DIACO : twitter.com/Diaco_ml || codepen.io/MAW
powered by GSAP : https://www.greensock.com/
*/

var total=40,
    container=document.getElementById('p-container'),
    w=window.innerWidth,
    h=window.innerHeight,
    Tweens=[],
    SPs=1;



for (var i_p=total;i_p--;){
	var Div=document.createElement('div');
	TweenLite.set(Div,{attr:{class:'dot'},x:R(w),y:R(h),opacity:0});
	container.appendChild(Div);	Anim(Div);	Tweens.push(Div);
};

function Anim(elm){
	elm.Tween=TweenLite.to(elm,R(20)+10,{bezier:{values:[{x:R(w),y:R(h)},{x:R(w),y:R(h)}]},opacity:R(1),scale:R(1)+0.5,delay:R(2),onComplete:Anim,onCompleteParams:[elm]})
};

for(var i_p=total;i_p--;){
  Tweens[i_p].Tween.play()};


function R(max){return Math.random()*max};
