function togglePlaceholder(el) {
   let placeholder
   el.addEventListener("focus", (e) => {
      placeholder = e.target.placeholder
      e.target.placeholder = ""
   })
   el.addEventListener("blur", (e) => {
      e.target.placeholder = placeholder
   })
}
export function togglePlaceholderOnFocus() {
   document.querySelectorAll("input").forEach((el) => togglePlaceholder(el))
   document.querySelectorAll("textarea").forEach((el) => togglePlaceholder(el))
}
export function markRequiredFields() {
   const mark = " *"
   function doMark() {
      for (const field of document.querySelectorAll(".form-input")) {
         if (field.required || field.getAttribute("aria-required")) {
            if (field.placeholder) field.placeholder += mark
         }
      }
   }
   document.addEventListener("DOMContentLoaded", doMark)
}
