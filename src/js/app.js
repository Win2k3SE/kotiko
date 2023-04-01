import {burger} from './modules/burger.js'
burger()

import { mask } from "./modules/inputmask.js"
mask()

import {isWebp } from "./modules/functions.js"

isWebp()

import { DynamicAdapt } from "./modules/dynamic-adapt.js"
const da = new DynamicAdapt("max")
da.init()

import { hideAndToggle } from "./modules/hider-and-toggler.js"
hideAndToggle()

import { initSpoilers } from "./modules/spoiler.js"
document.addEventListener("DOMContentLoaded", initSpoilers)

import { createCustomSelectEl } from "./modules/dynamic-select.js"
document.querySelectorAll(".dynamic-select").forEach((el) => createCustomSelectEl(el))

import { togglePlaceholderOnFocus } from "./modules/inputs.js"
togglePlaceholderOnFocus()

import { validate } from "./modules/form-validation.js"
validate()

for(const el of document.querySelectorAll('[data-clipboard]')) {
   el.addEventListener('click', () => {
      navigator.clipboard.writeText(el.getAttribute('data-clipboard'))
   })
}
