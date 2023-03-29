import Swiper, { Navigation, Pagination, Controller, Thumbs } from "swiper"

export function initSliders() {
   document.querySelectorAll(".suit__slider").forEach(
      (slide) =>
         new Swiper(slide, {
            modules: [Navigation, Pagination, Controller],
            allowTouchMove: true,
            navigation: {
               nextEl: ".suit__slider .swiper-button-next",
               prevEl: ".suit__slider .swiper-button-prev",
            },
            observer: true,
            observeParents: true,
         })
   )

   const mainSlider = document.querySelector(".main-slider")
   const thumbsSlider = document.querySelector(".thumbs-slider")
   if (mainSlider && thumbsSlider) {
      const thumbs = new Swiper(thumbsSlider, {
         modules: [Navigation, Pagination, Controller],
         allowTouchMove: true,
         slidesPerView: 2,
         slidesPerGroup: 1,
         spaceBetween: 30,
         direction: "horizontal",
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
      })
      const mainOptions = {
         modules: [Thumbs, Navigation, Pagination, Controller],
         // allowTouchMove: true,
         observer: true,
         observeParents: true,
         resizeObserver: true,
         updateOnWindowResize: true,
         loop: true,
         slidesPerView: "auto",
         spaceBetween: 20,
         navigation: {
            nextEl: ".gallery .swiper-button-next",
            prevEl: ".gallery .swiper-button-prev",
         },
         pagination: {
            type: "fraction",
            el: ".gallery .swiper-pagination",
         },
         thumbs: {
            swiper: thumbs,
         },
         breakpoints: {
            870: {
               //  slidesPerView: 1,
            },
         },
      }
      let main = new Swiper(mainSlider, mainOptions)
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
