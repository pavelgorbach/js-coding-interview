// In JavaScript, the setTimeout function can be used to execute callbacks after a delay. However, it introduces a layer of nesting in the code which may not be desired. It'd be nice to use setTimeout in this fashion:

/**
 * @param {number} duration
 * @return {Promise<void>}
 */

export default async function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration) 
  })
}