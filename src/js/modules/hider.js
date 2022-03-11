import { addElements } from "./flexbox-empty-elements-inserter.js"
import { getPropertyValue } from "./functions.js"

let hidden = null
const container = document.querySelector(".cctv-suits__suits")
const columnGap = getPropertyValue(container, "column-gap")
const suits = container.querySelectorAll(".cctv-suits__suit")
const showMoreButton = container.parentElement.querySelector(".cctv-suits__show-more")
const maxSuits = 9
const maxRows = 2
const hiddenSuits = []
const map = {
   1: "red",
   2: "blue",
   3: "green",
}
export function elementsToShow() {
   let els = 0
   const arr = []
   const containerWidth =
      container.offsetWidth -
      getPropertyValue(container, "padding-left") -
      getPropertyValue(container, "padding-right")
   let width = containerWidth
   for (let i = 0, currentRow = 1; i < container.children, currentRow <= maxRows; i++) {
      console.log("row " + currentRow + " starting width", width, container.offsetWidth)
      const child = container.children[i]
      if (child === undefined) break
      if (child.offsetWidth === undefined) {
         els += 1
         arr.push(child)
         continue
      }
      width -= child.offsetWidth
      // console.log(child, width, child.offsetWidth)
      if (width >= 0) {
         els += 1
         arr.push(child)
         child.style.outline = "1px solid " + map[currentRow]
         width -= columnGap
      } else {
         i -= 1
         currentRow++
         width = containerWidth
         console.log("row break on ", child)
      }
   }
   console.log("elementsToShow", els, arr)
   return els
}
function show() {
   console.log("showing", hiddenSuits.length)
   container.querySelectorAll(".cctv-suits__suit--empty").forEach((el) => el.remove())
   for (let i = 0; i < hiddenSuits.length; i++) {
      container.append(hiddenSuits[i])
   }
   hiddenSuits.length = 0
   hidden = false
   // addElements(".cctv-suits__suits", "cctv-suits__suit")
}
function hide() {
   console.log("hiding!")
   for (let i = 0; i < suits.length; i++) {
      if (i >= maxSuits) {
         hiddenSuits.push(suits[i])
         suits[i].remove()
      }
   }
   hidden = true
   // addElements(".cctv-suits__suits", "cctv-suits__suit")
}
function hideButton() {
   showMoreButton.classList.remove("cctv-suits__show-more--active")
}
function showButton() {
   if (!showMoreButton.classList.contains("cctv-suits__show-more--active")) {
      showMoreButton.classList.add("cctv-suits__show-more--active")
   }
}
function hideAndToggle() {
   if (hidden === true) {
      show()
      showMoreButton.textContent = "Свернуть"
   } else {
      hide()
      showMoreButton.textContent = "Смотреть еще"
   }
}
export function hideToggle() {
   if (document.documentElement.offsetWidth > 600) {
      if (hidden === null || hidden === true) {
         show()
         hideButton()
      }
   } else {
      if (hidden === null || hidden === false) {
         hide()
         showButton()
      }
   }
}

showMoreButton.addEventListener("click", hideAndToggle)
