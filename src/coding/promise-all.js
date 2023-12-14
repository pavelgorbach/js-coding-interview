/**
 * @param {Array} iterable
 * @return {Array<Promise>}
 */
export default function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const result = Array(iterable.length)
    let unresolved = iterable.length

    if(unresolved === 0) {
      resolve(result)
      return
    }

    iterable.forEach(async (item, idx) => {
      try {
        const value = await item
        result[idx] = value
        unresolved--

        if(unresolved === 0) {
          resolve(result)
        }
      } catch (e) {
        reject(e)
      }
    })
  })
}