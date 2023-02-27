var tl_header_1 = gsap.timeline();
var tl_burger_1 = gsap.timeline();

tl_header_1.from(".slider-title", {duration:1.2, x:-150, opacity:0, ease:"slow"})



// let cards = document.getElementsByClassName("pref-card")

// for (let card of cards) {
//   card.addEventListener("mouseup", function() {
//     if (card.classList.contains("flip-vertical-right")) {
//       card.classList.add("flip-vertical-left")
//     }
//     else {
//       card.classList.add("flip-vertical-right")
//     }
//   })
// }

// var tl_how_inspection = gsap.timeline();

// var windowScrollTop = window.pageYOffset;

// console.log(windowScrollTop);

// let scrollObject = document.getElementById("zapis");

// window.addEventListener("scroll", () => {

// })

// if (windowScrollTop == 1750) {
//   tl_how_inspection.from("#zapis", {duration: 0.6, x:-300, opacity:0 })
// };


// tl_how_inspection.from("#osmotr", {duration: 0.6, x:300, opacity:0 })
// tl_how_inspection.from("#oform-dk", {duration: 0.6, x:-300, opacity:0 })
// tl_how_inspection.from("#oform-str", {duration: 0.6, x:300, opacity:0 })
// tl_how_inspection.from("#oform-gibdd", {duration: 0.6, x:-300, opacity:0 })


AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 80, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 600, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation



});

var widthWind = document.querySelector('body').offsetWidth;

document.addEventListener("DOMContentLoaded", function(event) {
  var widthWind = document.querySelector('body').offsetWidth;
  if (widthWind <= 568) { 
    let items = document.getElementsByClassName("how-alteration-item");
    for (item of items) {
      item.setAttribute("data-aos", "fade-up")
    }
    let cards = document.getElementsByClassName("pref-card")
    for (card of cards) {
      card.setAttribute("data-aos", "zoom-in")
    }
  }

  // if (widthWind <= 1279) {
  //   let navItems = document.getElementsByClassName("header-nav-item")
  //   for (navItem of navItems) {
  //     if (navItem.classList.contains("header-nav-closed")) {
  //       document.querySelector(".header-title").setAttribute("style", "display:none;");
  //     }
  //   }
  // }
});



const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        let id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

const burgerBtn = document.querySelector(".header-open-btn");

burgerBtn.addEventListener('click', function() {
  let items = document.getElementsByClassName("header-nav-item");
  for (item of items) {
    if (item.classList.contains("header-nav-closed")) {
      item.classList.remove("header-nav-closed");
      if (widthWind <= 480) {
        document.querySelector(".header-title").setAttribute("style", "visibility: visible; width:100%; padding:16px; margin:0; transition: all 0.4s")
      }
    }
    else {
      if (widthWind <= 480) {
        document.querySelector(".header-title").setAttribute("style", "visibility:hidden; width:0px; padding:0; margin:0; transition: all 0.4s")
      }
      item.classList.add('header-nav-closed');
    }
  }
  burgerBtn.classList.toggle('header-close-btn')
})

const takeOfferBTNs = document.querySelectorAll(".slider-btn");

for (button of takeOfferBTNs) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.online-appointment').scrollIntoView({
      behavior:'smooth',
      block:'center'
    });
  });
};

const $header = $("#header-scrolled")
let prevScroll
let lastShowPos

$(window).on("scroll", function() {
  const scrolled = $(window).scrollTop()

  if (scrolled > 100 && scrolled > prevScroll) {
    $header.addClass("header-out")
    lastShowPos = scrolled
  } else if (scrolled <= Math.max(lastShowPos - 250, 0)) {
    $header.removeClass("header-out")
  }
  prevScroll = scrolled
});


$(document).ready(function () {
  $(document).on("scroll", onScroll);
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.mobile-menu a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() - 84 > scrollPos) {
          $('.mobile-menu a').removeClass("active-menu-item");
          currLink.addClass("active-menu-item");
      }
      else{
          currLink.removeClass("active-menu-item");
      }
  });
}

if (widthWind < 577) {
  gsap.from(".mobile-menu", {duration:1, ease:"bounce", y:70})
}



