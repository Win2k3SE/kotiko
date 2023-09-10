import { hideToggle } from "./hider.js"
import { addElements } from "./flexbox-empty-elements-inserter.js"
import { elementsToShow } from "./hider.js"

let foo = () => {
   if (document.documentElement.offsetWidth > 767) {
      addElements(".cctv-suites__suites", "cctv-suites__suit", 17 + 3)
   } else {
      addElements(".cctv-suites__suites", "cctv-suites__suit", 17)
   }
}
export function hideAndToggle() {
   document.addEventListener("DOMContentLoaded", function () {
      hideToggle()
      //   foo()
      //   elementsToShow()
   })
   window.addEventListener("resize", function () {
      hideToggle()
      //   foo()
      //   elementsToShow()
   })
}
