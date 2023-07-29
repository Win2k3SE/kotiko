import {isWebp } from "./modules/functions.js"
isWebp()

import { loadScript } from "./modules/functions.js";

new LazyLoad({
    elements_selector: ".order-form__form",
    callback_enter: () => {
        console.log('loading datepicker!')
        loadScript('js/datepicker.min.js')
    }
})


import {burger} from './modules/burger.js'
burger()

import { mask } from "./modules/inputmask.js"
mask()

import { DynamicAdapt } from "./modules/dynamic-adapt.js"
const da = new DynamicAdapt("max")
da.init()

import { hideAndToggle } from "./modules/hider-and-toggler.js"
hideAndToggle()

function initChoices() {
    const selector = '.order [name="suite-type"]'
    const els = document.querySelectorAll(selector)
    for(const el of els) {
        new LazyLoad({
            elements_selector: selector,
            unobserve_enered: true,
            callback_enter: () => {
                    new Choices(el, {
                    searchEnabled: false,
                    itemSelectText: "",
                    shouldSort: false,
                    allowHTML: false,
                })
            }
        })
    }
}
initChoices()

import { initSpoilers } from "./modules/spoiler.js"
document.addEventListener("DOMContentLoaded", initSpoilers)

import { togglePlaceholderOnFocus } from "./modules/inputs.js"
togglePlaceholderOnFocus()

import { validate } from "./modules/form-validation.js"
validate()

for(const el of document.querySelectorAll('[data-clipboard]')) {
   el.addEventListener('click', () => {
      navigator.clipboard.writeText(el.getAttribute('data-clipboard'))
      el.classList.add('copy-success')
      setTimeout(() => {
         el.classList.remove('copy-success')
      }, 400);
   })
}

import { orderPopup } from './modules/order-popup.js'
orderPopup()
