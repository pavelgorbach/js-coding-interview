//Implement a function compact(array) that creates an array with all falsey values removed.
//The values false, null, 0, '', undefined, and NaN are falsey.

/**
 * @param {Array} arr
 * @returns {Array}
 */


export default function compact(arr) {
  return arr.filter(Boolean)
}
