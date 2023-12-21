/**
 * @param {Object} objectParam
 * @param {string|Array<string>} pathParam
 * @param {*} [defaultValue]
 * @return {*}
 */

export default function get(objectParam, pathParam, defaultValue) {
  if(!Array.isArray(pathParam)) {
    pathParam = pathParam.split('.')
  }

  while(pathParam.length) {
    const key = pathParam.shift()
    const value = objectParam === null ? undefined : objectParam[key]
    if(value === undefined) return defaultValue
    objectParam = value
  }

  return objectParam
}