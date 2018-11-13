import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <p>Name:{{name}}</p>
    </div>
  `,
  data: {
    firstName: 'Jokcy',
    lastName: 'Lou'
  },
  computed: {
    name () {
      return this.firstName + ' ' + this.lastName
    }
  }
})
