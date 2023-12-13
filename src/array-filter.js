/**
 * @template T
 * @param { (value: T, index: number, array: Array<T>) => boolean } callbackFn
 * @param {any} [thisArg]
 * @return {Array<T>}
 */
Array.prototype.myFilter = function(callbackFn, thisArg) {
  const res = []

  for(let i = 0; i < this.length; i++) {
    if(
      Object.hasOwn(this, i) &&
      callbackFn.call(thisArg, this[i], i, this)
    ) {
      res.push(this[i])
    }
  }

  return res
}
