/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value) {
  const res = []
  const queue = [...value]

  while(queue.length) {
    const el = queue.shift()

    if(Array.isArray(el)) {
      queue.unshift(...el)
    } else {
      res.push(el)
    }
  }

  return res
}