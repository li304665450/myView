<template>
    <div id="app">
        <div id="cover"></div>
        <div id="loading" v-show="loading">
          <loading></loading>
        </div>
        <Header></Header>
        <!-- <p>{{fullName}} {{counter}}</p> -->
        <!-- <router-link to="/app">App</router-link> -->
        <!-- <router-link to="/app/123">App123</router-link>
        <router-link to="/app/456">App456</router-link> -->
        <!-- <router-link to="/login">Login</router-link> -->
        <!-- <Todo></Todo> -->
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
        <!-- <button @click="notify">click meff</button> -->
        <!-- <notification content="test notify" /> -->
        <Footer></Footer>
    </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'
import Header from './common/header.vue'
import Footer from './common/footer.jsx'
import Loading from './components/loading/loading.vue'
// import Todo from './views/todo/todo.vue'

export default {
  metaInfo: {
    title: 'Mars Todo App'
  },
  // 声明引入的组件
  components: {
    Header,
    Footer,
    Loading
    // Todo
  },
  mounted () {
    // console.log(this.$store)
    // this.updateCountAsync({
    //   num: 5,
    //   time: 2000
    // })
    // this['a/add']()
    // let i = 1
    // setInterval(() => {
    //   this.updateCount(i++)
    // }, 1000)
  },
  methods: {
    ...mapActions(['updateCountAsync']),
    ...mapMutations(['updateCount']),
    notify () {
      this.$notify({
        content: 'test $notify',
        btn: 'close'
      })
    }
  },
  computed: {
    ...mapState(['loading']),
    // ...mapState({
    //   counter: (state) => state.count,
    //   // textA: (state) => state.a.text,
    //   // textC: (state) => state.c.text
    // }),
    // count () {
    //   return this.$store.state.count
    // },
    ...mapGetters({
      'fullName': 'fullName'
    })
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  }
}
</script>


<style lang="stylus" scoped>
	#app
		position absolute
		left 0
		right 0
		top 0
		bottom 0
		#cover
			position absolute
			left 0
			top 0
			right 0
			bottom 0
			background-color #999
			opacity .7
			z-index -1
  #loading{
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    background-color rgba(255,255,255,.3)
    z-index 99
    display flex
    align-items center
    justify-content center
  }
</style>
