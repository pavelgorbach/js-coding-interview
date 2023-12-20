//Implement a function dropWhile(array, predicate) that creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. Your function should not modify the original array.

/**
 * @param {Array} array - The array to iterate over.
 * @param {Function} predicate - The function invoked per iteration.
 * @return {Array} Returns the slice of `array`.
 */

export default function dropWhile(array, predicate) {
  let idx = 0

  while(idx <= array.length && predicate(array[idx], idx, array)) {
    idx++
  }

  return array.slice(idx, array.length)
}