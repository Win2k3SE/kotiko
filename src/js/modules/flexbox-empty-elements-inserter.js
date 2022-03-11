import { getPropertyValue } from "./functions.js"
/**
 * @param {Integer} numElements The number of elements you're displaying.
 * @param {Number} element Width Width, in pixels, of each element.
 * @param {Number} margin Width, in pixels. Your minimum target margin between items. 2x the margin on each individual item.
 * @param {Number} gap Width, in pixels. Your minimum target gap between items.
 * @param {Number} containerWidth Width, in pixels, of the containing element.
 */
function getElementsPerRow(containerWidth, elementWidth, gap) {
   let els = 0
   let currentWidth = containerWidth
   //    console.log(currentWidth)
   while ((currentWidth -= elementWidth) >= 0) {
      els += 1
      //   console.log(currentWidth, els)
      currentWidth -= gap
      //   console.log("*", currentWidth, els)
   }
   //    console.log("elementsPerRow: ", els)
   return els
}
function getNumPhantomElements(
   numElements,
   elementWidth,
   // margin,
   gap,
   containerWidth
) {
   //  const elementsPerRow = Math.floor(containerWidth / (elementWidth + margin))
   const elementsPerRow = getElementsPerRow(containerWidth, elementWidth, gap)
   const elementsInLastRow = numElements % elementsPerRow
   const numPhantomElements =
      elementsInLastRow === 0 ? elementsInLastRow : elementsPerRow - elementsInLastRow
   //    const numPhantomElements = elementsPerRow - elementsInLastRow
   console.log(
      numElements,
      containerWidth,
      elementWidth,
      gap,
      elementsPerRow,
      elementsInLastRow,
      numPhantomElements
   )
   return numPhantomElements
}

export function addElements(containerSelector, elementClassName) {
   const container = document.querySelector(containerSelector)
   const els = container.querySelectorAll(`.${elementClassName}:not(.${elementClassName}--empty)`)
   let numElements = els.length
   function tuneElementCount() {
      const text = container.querySelector(`.cctv__text`)
      const textBasis = getComputedStyle(text).flexBasis
      if (textBasis === "492px") {
         numElements += 3
      } else if (textBasis === "100%") {
      } else {
         throw new RangeError(`Unexpected flexBasis: ${textBasis}`)
      }
   }
   tuneElementCount()
   const elementWidth = getPropertyValue(els[0], "width")
   const gap = getPropertyValue(container, "column-gap")
   const containerWidth =
      container.offsetWidth -
      getPropertyValue(container, "padding-left") -
      getPropertyValue(container, "padding-right")
   container.querySelectorAll(`.${elementClassName}--empty`).forEach((el) => el.remove())
   const num = getNumPhantomElements(numElements, elementWidth, gap, containerWidth)
   for (let i = 0; i < num; i++) {
      const div = document.createElement("div")
      div.classList.add(...[elementClassName, `${elementClassName}--empty`])
      container.append(div)
   }
}
