/**
 * finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的
 */

Promise.prototype.finally = function(callback) {
  let P = this.constructor
  return this.then(
    value => P.resolve(callback()).then(() => value),
    error => P.resolve(callback()).then(() => { throw error }),
  )
}