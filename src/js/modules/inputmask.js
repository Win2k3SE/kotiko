import Inputmask from "inputmask"

export function mask() {
   const maskOptions = {
      mask: "+9 (999) 999-99-99",
      clearMaskOnLostFocus: true,
      showMaskOnHover: false,
   }

   const phones = document.querySelectorAll("[name=phone]")
   for (const phone of phones) {
      const mask = Inputmask.default(maskOptions)
      phone.addEventListener("focusin", (e) => {
         if (e.target.value === "") {
            mask.mask(e.target)
         }
      })
      phone.addEventListener("focusout", (e) => {
         if (e.target.value === "") {
            e.target.placeholder = "Телефон"
            mask.remove()
         }
      })
   }
}
