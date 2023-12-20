//Implement a function fill(array, value, [start=0], [end=array.length]) that fills an array with values from start up to, but not including, end.
//Note: This method mutates array.

/**
 * @param {Array} array - The array to fill.
 * @param {*} value - The value to fill array with.
 * @param {number} [start=0] - The start position.
 * @param {number} [end=array.length] - The end position.
 * @return {Array} Returns the filled array.
 */

export default function fill(array, value, start = 0, end = array.length) {
  const startIdx = start < 0 ? array.length + start : start
  const endIdx = end < 0 ? array.length + end : end

  for(let i = startIdx; i < endIdx; i++) {
    if(i >= array.length) break
    array[i] = value
  }

  return array
}

console.log(fill([1,2,3,4,5], '*', -2))
