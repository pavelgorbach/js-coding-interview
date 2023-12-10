// A common use case would be in summarizing the reactions for social media posts.

/**
 * @param {Array<string>} items
 * @param {{sorted?: boolean, length?: number, unique?: boolean}} [options]
 * @return {string}
 */
const COMMA_SEPARATOR = ', '
const OTHER_SEPARATOR = 'other'
const AND_SEPARATOR = ' and '

export default function listFormat(items, options = {}) {
  if(!items || items.length === 0) return ''

  if(items.length === 1) return items[0]

  let arr = items.filter((item) => !!item)

  if(options.sorted) {
    arr.sort()
  }

  if(options.unique) {
    arr = Array.from(new Set(arr))
  }

  if(options.length && options.length > 0 && options.length < arr.length) {
    const left = arr.slice(0, options.length).join(COMMA_SEPARATOR)
    const diff = arr.length - options.length
    const right = `${diff} ${OTHER_SEPARATOR}${diff > 1 ? 's': ''}`
    return [left, right].join(AND_SEPARATOR)
  }

  const left = arr.slice(0, arr.length - 1).join(COMMA_SEPARATOR)
  const right = arr[arr.length - 1]
  return [left, right].join(AND_SEPARATOR)
}