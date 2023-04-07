export function orderPopup() {
   const orderPopup = document.querySelector('.order-popup')
   const popupOverlay = document.querySelector('.popup-overlay')
   const orderCloseButton = document.querySelector('.order-popup .popup-close-button')
   const popupOrderSuiteSelect = document.querySelector('.order-popup [name=suite-type]')
   orderCloseButton.addEventListener('click', closePopup)

   const suiteForms = document.querySelectorAll('.suite__form')
   suiteForms.forEach(form => {
      form.addEventListener('submit', handleSubmit)
   })
   let choices
   function handleSubmit(e) {
      e.preventDefault()
      const formData = new FormData(e.target.closest('form'))
      openPopup()

      if(!choices) {
         choices = new Choices(popupOrderSuiteSelect, {
            searchEnabled: false,
            itemSelectText: "",
            shouldSort: false,
            allowHTML: false,
         })
      }
      choices.setChoiceByValue(formData.get('suite-type'))
   }
   function closePopup() {
      orderPopup.classList.remove('open')
      popupOverlay.classList.remove('open')
      document.body.classList.remove('_lock')
   }
   function openPopup() {
      orderPopup.classList.add('open')
      document.body.classList.add('_lock')
      popupOverlay.classList.add('open')
   }
   document.addEventListener('click', e => {
      console.log('e.target', e.target)
      if(e.target.closest('.swal2-confirm')) {
         closePopup()
      }
      if(e.target.matches('.popup-overlay') || e.target.matches('.swal2-container')) {
         closePopup()
      }
   })

}
