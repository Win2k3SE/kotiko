import $ from "jquery"
import "jquery-ui/ui/widgets/datepicker.js"
import "jquery-ui/ui/i18n/datepicker-ru.js"
import "jquery-ui/themes/base/core.css"
import "jquery-ui/themes/base/theme.css"
import "jquery-ui/themes/base/datepicker.css"

const options = {
   minDate: new Date(),
   dateFormat: "dd.mm.yy",
}
let startDate
let endDate
$.datepicker.setDefaults($.datepicker.regional["ru"])
const from = $(".order-form__start-date")
   .datepicker(options)
   .on("change", function (e) {
      startDate = getDate(this)
      console.log("startDate", startDate)
      to.datepicker("option", "minDate", startDate)
   })
const to = $(".order-form__end-date")
   .datepicker(options)
   .on("change", function (e) {
      endDate = getDate(this)
      console.log("endDate", endDate)
      from.datepicker("option", "maxDate", endDate)
   })
function getDate(el) {
   let result = null
   if (!el.value) return result
   try {
      result = $.datepicker.parseDate(options.dateFormat, el.value)
   } catch (error) {
      console.error(error)
   }
   return result
}
