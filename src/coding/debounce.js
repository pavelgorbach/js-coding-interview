//When to use debouncing:
//1. User interactions are rapid or repetitive
//2. External data update are frequent
//3. Networking requests are costly

//Example Use Cases:
//1. Input fields
//2. Search bars
//3. Scroll events
//4. Autocomplete suggestions

/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait = 0) {
  let timeoutId = null

  return function(...args) {
    clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}