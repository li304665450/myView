import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div :id='aaa'
    @click='handleClick'
    :class={active:isActive}
    :style='styles'
    >
      <p v-html='html'></p>
    </div>
  `,
  data: {
    isActive: true,
    arr: [1, 2, 3],
    html: '<span>123</span>',
    aaa: 'main',
    styles: {
      color: 'red'
    }
  },
  methods: {
    handleClick () {
      alert(111) //eslint-disable-line
    }
  }
})
