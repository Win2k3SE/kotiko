import * as functions from "./modules/functions.js"
import { initSliders } from "./swiper.js"

functions.isWebp()

import { DynamicAdapt } from "./modules/dynamic-adapt.js"
const da = new DynamicAdapt("max")
da.init()

document.addEventListener("DOMContentLoaded", function () {
   initSliders()
})

import { hideAndToggle } from "./modules/hider-and-toggler.js"
hideAndToggle()
