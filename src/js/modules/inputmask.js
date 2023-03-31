import Inputmask from "inputmask"

export function mask() {
   const maskOptions = {
      mask: "+9 (999) 999-99-99",
      clearMaskOnLostFocus: true,
      showMaskOnHover: false,
   }

   const phones = document.querySelectorAll("[name=phone]")
   for (const phone of phones) {
      Inputmask.default(maskOptions).mask(phone)
   }
}
