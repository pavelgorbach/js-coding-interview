/**
 * This function returns the index of the first element in the array that satisfies the provided testing function.
 * Otherwise, it returns -1, indicating that no element passed the test.
 *
 * @param {Array} array - The array to search.
 * @param {Function} predicate - The function invoked per iteration.
 * @param {number} [fromIndex=0] - The index to start searching from.
 * @returns The index of the found element, else -1.
 */

export default function findIndex(array, predicate, fromIndex = 0) {
  let startIndex = fromIndex >= 0 ? fromIndex : Math.max(array.length + fromIndex, 0)

  for(let i = startIndex; i < array.length; i++) {
    if(predicate(array[i], i, array)) {
      return i
    }
  }

  return -1
}

console.log(findIndex([1,2,3,4,5,6,7], (num) => num > 2, -10))