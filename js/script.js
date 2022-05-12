// banner

$('.single-item').slick({
    arrows:false,
    autoplay: true
  });

  // menu-berger

$('#burgerBtn').on('click', function(){
    $('#mobile').toggleClass('navigation');
    $('body').toggleClass('nav');
    $('body').toggleClass('overflowy');
});

//works

$('.slider1').slick({
  infinite: true,
  arrows: false,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        fade: true,
        slidesToScroll: 1
      }
    }
  ]
});


//on going project

$('.slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        arrows:false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows:false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false,
        arrows:false
      }
    }

  ]
});

// testimonials


$('.test-slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  // autoplay: true,
  arrows:false,
  cssEase: 'linear'
});


// pages-images

const buttons = document.querySelectorAll('.project');
const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.overlay__inner img');

function open(e) {
  overlay.classList.add('open');
  const src= e.currentTarget.querySelector('img').src;
  overlayImage.src = src;
}

function close() {
  overlay.classList.remove('open');
}

buttons.forEach(button => button.addEventListener('click', open));
overlay.addEventListener('click' , close);


$('.cdimg').on('hover', function(){
  $('work-overlay').toggleClass('d-none');
  
});


// *********************************************sticky-header***************************************//
 
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var banner = document.getElementById("mybanner");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    banner.classList.add("content");
  } else {
    header.classList.remove("sticky");
    banner.classList.remove("content");
  }
}
