Promise.prototype.finally = function(callback) {
  let P = this.constructor
  return this.then(
    value => P.resolve(callback()).then(() => value),
    error => P.resolve(callback()).then(() => { throw error }),
  )
}