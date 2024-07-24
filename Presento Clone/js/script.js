AOS.init();

$('.owl-one').owlCarousel({
    loop:true,
    margin:10,
    dotsEach: true,
    nav:false,
    autoplay: true,
    autoplayTimeout: 3000, // Time in milliseconds between slides
    autoplayHoverPause: true,
    responsive:{
    0:{
        items:1
    },
    481:{
        items:3
    },
    650:{
        items:4
    },
    1000:{
        items:4
    }
    }
})

$('.owl-two').owlCarousel({
    loop:true,
    margin:0,
    dotsEach: false,
    nav:false,
    autoplay: true,
    autoplayTimeout: 3000, // Time in milliseconds between slides
    autoplayHoverPause: true,
    responsive:{
    0:{
      items:1
    },
    481:{
      items:1
    },
    650:{
      items:1
    },
    1000:{
        items:3
    }
    }
})

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var icon = this.querySelector("i");
    icon.classList.toggle("fa-chevron-down");
    icon.classList.toggle("fa-chevron-up");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}