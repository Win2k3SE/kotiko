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
