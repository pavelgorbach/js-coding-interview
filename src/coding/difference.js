/**
 * @param {Array} arr Array from which different elements are to be removed.
 * @param {Array} values - Array of values that are to be removed from the original array.
 * @return {Array} Returns filtered array.
 */

//Implement a function difference(array, values) that creates an array of array values
//not included in the other given arrays using SameValueZero for equality comparisons.
//The order and references of result values are determined by the first array.

export default function difference(arr, values) {
  const res = []
  const valSet = new Set(values)

  for(let i = 0; i < arr.length; i++) {
    if(!valSet.has(arr[i]) && !(arr[i] === undefined && !(i in arr))) {
      res.push(arr[i])
    }
  }

  return res
}
