import Vue from 'vue'

new Vue({
  el: '#root',
  template: '<div v-text="test"></div>',
  data: {
    test: 0,
    active: false
  }
})
