import {paw} from './modules/paw.js'
paw()

import { mask } from "./modules/inputmask.js"
mask()

import {isWebp, debounce } from "./modules/functions.js"

isWebp()

import { DynamicAdapt } from "./modules/dynamic-adapt.js"
const da = new DynamicAdapt("max")
da.init()

import { hideAndToggle } from "./modules/hider-and-toggler.js"
hideAndToggle()

import { initSpoilers } from "./modules/spoiler.js"
document.addEventListener("DOMContentLoaded", initSpoilers)

const mapFrame = document.querySelector(".location__map iframe")
function resizeMap(e) {
   if (mapFrame) {
      if (document.documentElement.offsetWidth <= 320) {
         // console.log("<= 320")
         if (mapFrame.height !== "200") mapFrame.height = "200"
      } else if (document.documentElement.offsetWidth <= 480) {
         // console.log("<= 480")
         if (mapFrame.height !== "300") mapFrame.height = "300"
      } else {
         // console.log("else")
         if (mapFrame.height !== "400") mapFrame.height = "400"
      }
   }
}
window.addEventListener("resize", debounce(resizeMap))
document.addEventListener("DOMContentLoaded", resizeMap)

import { createCustomSelectEl } from "./modules/dynamic-select.js"
document.querySelectorAll(".dynamic-select").forEach((el) => createCustomSelectEl(el))

import { togglePlaceholderOnFocus } from "./modules/inputs.js"
togglePlaceholderOnFocus()

import { validate } from "./modules/form-validation.js"
validate()

function burger() {
   const popup = document.querySelector('.popup')
   if(window.innerWidth <= 600) {
      popup.classList.add('popup--open')
      document.body.classList.add('_lock')
   } else {
      closePopup(popup)
   }
   popup.addEventListener('click', e => {
      const link = e.target.closest('.fs-menu__link')
      if(link) {
         closePopup(popup)
      } else {
         const closeButton = e.target.closest('.popup-close-button')
         if(closeButton) closePopup(popup)
      }
   })
   document.body.addEventListener('click', e => {
      if(e.target.matches(".popup--open")) {
         closePopup(popup)
      }
   })
}
function closePopup(popup) {
   popup.classList.remove('popup--open')
   document.body.classList.remove('_lock')
}
const burgerButton = document.querySelector('.burger')
burgerButton.addEventListener('click', burger)

// document.addEventListener('DOMContentLoaded', burger)
// window.addEventListener('resize', debounce(burger))

