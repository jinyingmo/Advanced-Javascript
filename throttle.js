/**
 * 函数节流指的是某个函数在一定时间间隔内只执行一次
 */

function throttle(fn, wait = 50) {
  let previous = 0
  return function(...args) {
    const current = +new Date()
    if(current - previous > wait) {
      fn.apply(this, args)
      previous = current
    }
  }
}

const func = throttle(() => {
  console.log('success')
}, 2000)
setInterval(func, 100)