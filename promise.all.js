/**
 * Promise.all()接受一个由promise任务组成的数组，可以同时处理多个promise任务，当所有的任务都执行完成时，
 * Promise.all()返回resolve，但当有一个失败(reject)，则返回失败的信息，即使其他promise执行成功，也会返回失败。
 */

Promise.prototype.all = function(promises) {
  return new Promise(function(resolve, reject) {
    if(!Array.isArray(promises)) {
      reject(new TypeError("arguments must be an array"))
    }
    const promisesLength = promises.length
    let resolvedLength = 0
    let resolvedResult = []
    for(let i = 0; i < promisesLength; i ++) {
      Promise.resolve(promises[i]).then(function(value) {
        resolvedLength ++
        resolvedResult[i] = value
        if(resolvedLength === promisesLength) {
          resolve(resolvedResult)
        }
      }, function(error) {
        reject(error)
      })
    }
  })
}