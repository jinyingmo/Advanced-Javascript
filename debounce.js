function debounce(fn, wait = 50) {
  let waitFn = null
  return function(...args) {
    if(waitFn) {
      clearTimeout(waitFn)
    }
    waitFn  = setTimeout(fn.bind(this, ...args), wait)
  }
}