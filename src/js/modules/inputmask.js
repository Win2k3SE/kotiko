import Inputmask from "inputmask"

export function mask() {
   const mask = Inputmask.default({
      mask: "+9 (999) 999-99-99",
      clearMaskOnLostFocus: true,
      showMaskOnHover: false,
      onfocus: {},
   })

   const phone = document.querySelector("[name=phone]")
   phone.addEventListener("focusin", (e) => {
      if (e.target.value === "") {
         mask.mask("[name=phone]")
      }
   })
   phone.addEventListener("focusout", (e) => {
      if (e.target.value === "") {
         phone.placeholder = "Телефон"
         mask.remove()
      }
   })
}
