var tl_header_1 = gsap.timeline();

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


