/**
 * @template T
 * @param {Arary<T>} arr 
 * @param {number} [size=1]
 * @returns {Array<Array<T>>} the new array of chunks
 */

export default function chunk(arr, size = 1) {
  if (!Array.isArray(arr) || size < 1) {
    return []
  }

  const res = []

  for(let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size))
  }

  return res
}
