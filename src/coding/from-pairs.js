// Implement a function fromPairs(pairs) that transforms a list of key-value pairs into an object.

/**
 * Creates an object from an array of key-value pairs.
 *
 * @param {Array} pairs - An array of key-value pairs.
 * @returns {Object} - The object composed from the key-value pairs.
 */

export default function fromPairs(pairs) {
  const res = {}

  for(const [key, val] of pairs) {
    res[key] = val
  }

  return res
}