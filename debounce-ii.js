/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait = 0) {
  let timerId = null
  let context = undefined
  let argsToInvoke = undefined

  function clearTimer() {
    clearTimeout(timerId)
    timerId = null
  }

  function invoke() {
    if(timerId === null) return
    clearTimer()
    func.apply(context, argsToInvoke)
  }

  function fn(...args) {
    clearTimer()
    argsToInvoke = args
    context = this

    timerId = setTimeout(() => {
      invoke()
    }, wait)
  }

  fn.cancel = clearTimer
  fn.flush = invoke
  return fn
}
