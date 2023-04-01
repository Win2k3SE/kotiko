import { getOffsetFromTop, debounce } from './functions.js'

const popup = document.querySelector('.popup')
const firstScreen = document.querySelector('.fs-menu__paw-wrapper')
const burgerButtonScreenWidth = 768

export function burger(){
   popup.addEventListener('click', e => {
      const link = e.target.closest('.fs-menu__link')
      if(link) {
         closePopup(popup)
      } else {
         const closeButton = e.target.closest('.popup-close-button')
         if(closeButton) closePopup(popup)
      }
   })
   document.body.addEventListener('click', e => {
      if(e.target.matches(".popup--open")) {
         closePopup(popup)
      }
   })
   function togglePopup() {
      if(popup.classList.contains('popup--open')) {
         closePopup(popup)
      } else {
         openPopup(popup)
      }
   }

   function closePopup(popup) {
      popup.classList.remove('popup--open')
      document.body.classList.remove('_lock')
   }
   function openPopup(){
      popup.classList.add('popup--open')
      document.body.classList.add('_lock')
   }
   const burgerButton = document.querySelector('.burger')
   burgerButton.addEventListener('click', togglePopup)

   function showBurgerButton(){
      burgerButton.classList.remove('burger--closed')
   }
   function hideBurgerButton(){
      burgerButton.classList.add('burger--closed')
   }
   function toggleBurgerOnResize(){
      if(window.innerWidth <= burgerButtonScreenWidth) {
         if(window.scrollY >= getOffsetFromTop(firstScreen) + firstScreen.offsetHeight) {
            showBurgerButton()
         } else {
            hideBurgerButton()
         }
      } else {
         hideBurgerButton()
      }
   }
   toggleBurgerOnResize()
   window.addEventListener('scroll', toggleBurgerOnResize)
   window.addEventListener('resize', toggleBurgerOnResize)

}
