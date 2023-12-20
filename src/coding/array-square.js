/**
 * @return {Array<number>}
 */

Array.prototype.square = function() {
  const res = []

  for(let i = 0; i < this.length; i++) {
    res[i] = this[i] * this[i]
  }

  return res
}