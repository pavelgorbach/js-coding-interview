// Implement a function clamp(number, lower, upper) to restrict a number within the inclusive lower and upper bounds.

/**
 * @param {number} value 
 * @param {number} lower
 * @param {number} upper
 * @returns {number}
 */

export default function clamp(value, lower, upper) {
  if(value < lower) return lower
  if(value > upper) return upper
  return value
}