/**
 * @param {string} selector
 * @returns {{css: Function}}
 */

export default function $(selector) {
  const el = document.querySelector(selector)

  return {
    css: function(key, val) {
      //getter
      if(!val) {
        if(!el) return
        return el.style[key] || undefined
      }

      //setter
      if(el) {
        el.style[key] = val
      }

      return this
    }
  }
}
