import Swiper, { Navigation, Pagination, Controller } from "swiper"

function initSuitesSlider(slide){
   new Swiper(slide, {
      modules: [Navigation, Pagination, Controller],
      navigation: {
         nextEl: slide.querySelector(".swiper-button-next"),
         prevEl: slide.querySelector(".swiper-button-prev"),
      },
      loop: true,
      observer: true,
      observeParents: true,
      spaceBetween: 20,
      on: {
         afterInit: (swiper) => {
            new LazyLoad({
               container: swiper.el,
               elements_selector	: 'img',
               cancel_on_exit: false,
            });
         }
      }
   })
}
export function initSliders() {
   document.querySelectorAll(".suite").forEach(
      (suite) => {
         new LazyLoad({
            container: suite,
            elements_selector: '.suite__slider',
            unobserve_entered: true,
            callback_enter: () => initSuitesSlider(suite.querySelector('.suite__slider'))
          });
      }
   )
   
   const mainSliderSelector = ".main-slider"
   const mainSlider = document.querySelector(mainSliderSelector)
   const thumbsSlider = document.querySelector(".thumbs-slider")
   if (mainSlider && thumbsSlider) {
      const thumbsOptions =  {
         modules: [Navigation, Pagination, Controller],
         loop: true,
         // loopedSlides: 2, // breaks things
         spaceBetween: 30,
         direction: "horizontal",
         slideToClickedSlide: true,
         breakpoints: {
            320: {
               direction: "horizontal",
               spaceBetween: 15,
            },
            840: {
               direction: "vertical",
               spaceBetween: 20,
            },
            1200: {
               direction: "horizontal",
            },
         },
         observer: true,
         observeParents: true,
         on: {
            afterInit: (swiper) => {
               new LazyLoad({
                  container: swiper.el,
                  elements_selector	: 'img',
                  cancel_on_exit: false,
               });
            }
         }
      }
      const mainOptions = {
         modules: [Navigation, Pagination, Controller],
         observer: true,
         observeParents: true,
         resizeObserver: true,
         updateOnWindowResize: true,
         loop: true,
         spaceBetween: 20,
         navigation: {
            nextEl: ".gallery .swiper-button-next",
            prevEl: ".gallery .swiper-button-prev",
         },
         pagination: {
            type: "fraction",
            el: ".gallery .swiper-pagination",
         },
         on: {
            afterInit: (swiper) => {
               new LazyLoad({
                  container: swiper.el,
                  elements_selector	: 'img',
                  cancel_on_exit: false,
               });
            }
         }
      }
      new LazyLoad({
         elements_selector: mainSliderSelector,
         unobserve_entered: true,
         callback_enter: function (swiperElement) {
            const thumbs = new Swiper(thumbsSlider, thumbsOptions)
            let main = new Swiper(mainSlider, mainOptions)
            main.controller.control = thumbs
            thumbs.controller.control = main
         }
       });
   }
   const header = document.querySelector(".gallery__header")
   const navigation = document.querySelector(".swiper-navigation")
   const controls = document.querySelector(".swiper-controls")
   const pagination = document.querySelector(".swiper-pagination")
   //  let position =
   // controls.closest(".thumbs-slider") === null ? "main" : "thumbs"
   let position
   function moveControls() {
      if (document.documentElement.offsetWidth <= 870) {
         if (position !== "header") {
            // console.log("to header")
            header.insertAdjacentElement("beforeend", pagination)
            position = "header"
         }
      } else if (document.documentElement.offsetWidth <= 1200) {
         if (position !== "main") {
            // console.log("thumbs to navigation")
            navigation
               .querySelector(".swiper-button-prev")
               .insertAdjacentElement("afterend", pagination)
            position = "main"
         }
      } else {
         if (position !== "thumbs") {
            // console.log("main to thumbs")
            controls.insertAdjacentElement("afterbegin", pagination)
            position = "thumbs"
         }
      }
   }
   moveControls()
   window.addEventListener("resize", moveControls)
}
initSliders()
