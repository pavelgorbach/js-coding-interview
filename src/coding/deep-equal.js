/**
 * @param {*} valueA
 * @param {*} valueB
 * @return {boolean}
 */

function shouldDeepCompare(type) {
  return type === '[object Object]' || type === '[object Array]' 
}

function getType(value) {
  return Object.prototype.toString.call(value)
}

export default function deepEqual(valueA, valueB) {
  const typeA = getType(valueA)
  const typeB = getType(valueB)

  if(typeA === typeB && shouldDeepCompare(typeA) && shouldDeepCompare(typeB)) {
    const entriesA = Object.entries(valueA)
    const entriesB = Object.entries(valueB)

    if(entriesA.length !== entriesB.length) return false

    return entriesA.every(([key, val]) => {
      return Object.hasOwn(valueB, key) && deepEqual(val, valueB[key])
    })
  }

  return Object.is(valueA, valueB)
}