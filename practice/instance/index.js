import Vue from 'vue'

const app = new Vue({
  el: '#root',
  template: '<div>{{test}}</div>',
  data: {
    test: 0
  }
  // watch: {
  //   'test' (newTest, oldTest) {
  //     console.log(`${oldTest} : ${newTest}`)
  //   }
  // }
})

// setInterval(() => {
//   app.test += 1
// }, 1000)

// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el)
// console.log(app.$options)
// console.log(app.$root)
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }

// const unWatch = app.$watch('test', (newTest, oldTest) => {
//   console.log(`${oldTest} : ${newTest}`)
// })

// setTimeout(() => {
//   unWatch()
// }, 2000)

app.$on('test', (a, b) => {
  console.log(`test print is ${a} ${b}`)
})

app.$emit('test', 1, 2)

app.$forceUpdate()
