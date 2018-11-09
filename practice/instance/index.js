import Vue from 'vue'

const app = new Vue({
  el: '#root',
  template: '<div>{{test}}</div>',
  data: {
    test: 0
  }
})

setInterval(() => {
  app.test += 1
}, 1000)

// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el)
// console.log(app.$options)
// console.log(app.$root)
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }
