Function.prototype.myBind = function(context) {
  const self = this
  const args = [...arguments].slice(1)
  return function() {
    const params = [...args, ...arguments]
    self.apply(context, params)
  }
}

function a(params) {
  console.log(this.name, params)
}

const b = a.myBind({name: 'jym'})
b(123)