const rules = {
   text: function (node) {
      const isRequired = node.getAttribute("aria-required") || node.required
      const inputText = node.value ? node.value.trim() : ""
      if (isRequired && inputText.length === 0) {
         return ["Обязательное поле не заполнено"]
      }
      const minLength = node.dataset.minLength
      const maxLength = node.dataset.maxLength
      if (minLength && inputText.length < minLength) {
         return [`Слишком коротко, поле должно быть не меньше ${minLength} знаков`]
      }
      if (maxLength && inputText.length > maxLength) {
         return [`Слишком длинно, поле должно быть не больше ${maxLength} знаков`]
      }
      return undefined
   },
   email: function (node) {
      const prelimResult = rules.text(node)
      if (prelimResult) return prelimResult
      const inputText = node.value.trim(),
         inputRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

      const result = inputRegex.test(inputText)
      if (!result) return ["Неправильный формат почты"]
      return undefined
   },
   tel: function isTelFieldValid(node) {
      const prelimResult = rules.text(node)
      if (prelimResult) return prelimResult

      const allowedSymbols = ["\\s", "\\(", "\\)", "\\-", "\\+"]
      const regex = new RegExp([`[${allowedSymbols.join("")}]`], "g")
      const tel = node.value.replaceAll(regex, "")
      if (/^\d+$/.test(tel)) return undefined
      return ["Неправильный формат телефона"]
   },
}
export function validate() {
   const forms = document.querySelectorAll("form")
   forms.forEach((form) => {
      form.addEventListener("submit", (e) => {
         e.preventDefault()
         validateForm(form)
      })
   })
}
function validateForm(form) {
   const fields = form.querySelectorAll(".order-form__input")
   for (const field of fields) {
      const errorList = field.parentElement.parentElement.querySelector(".order-form__error-list")
      const messages = isFieldValid(field)
      if (errorList) {
         errorList.classList.remove("order-form__error-list--visible")
         Array.prototype.forEach.call(errorList.children, (child) => child.remove())
      }
      if (messages) {
         field.setAttribute("aria-invalid", true)
         errorList.classList.add("order-form__error-list--visible")
         for (const message of messages) {
            const li = document.createElement("li")
            li.setAttribute("role", "alert")
            li.textContent = message
            errorList.append(li)
         }
      } else {
         field.setAttribute("aria-invalid", false)
      }
   }
}
function isFieldValid(field) {
   const rule = field.dataset.rule ? field.dataset.rule : "text"
   return rules[rule](field)
}
function isTextFieldValid(field) {
   if (field.value === "") return "Обязательное поле не заполнено"
   return undefined
}
