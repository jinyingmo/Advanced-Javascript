/**
 * 实现函数柯里化
 */

function currying(fn, length) {
  const len = length || fn.length
  return function(...args) {
    if(args.length >= len) {
      return fn.apply(this, args)
    } else {
      return currying(fn.bind(this, ...args), len - args.length)
    }
  }
}

const fn = currying(function(a, b, c) {
  console.log(a, b, c)
})

fn(1)(2)(3)

