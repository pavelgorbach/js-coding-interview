//Implement a function dropRightWhile(array, predicate) that creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. Your function should not modify the original array.

/**
 * @param {Array} array - The array to iterate over.
 * @param {Function} predicate - The function invoked per iteration.
 * @return {Array} Returns the slice of `array`.
 */

export default function dropRightWhile(array, predicate) {
  let idx = array.length - 1

  while(idx >= 0 && predicate(array[idx], idx, array)) {
    idx--
  }

  return array.slice(0, idx + 1)
}