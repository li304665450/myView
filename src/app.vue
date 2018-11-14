<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <p>{{count}}</p>
        <router-link to="/app">App</router-link>
        <router-link to="/app/123">App123</router-link>
        <router-link to="/app/456">App456</router-link>
        <router-link to="/login">Login</router-link>
        <!-- <Todo></Todo> -->
        <transition name="fade">
          <router-view/>
        </transition>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './common/header.vue'
import Footer from './common/footer.jsx'
// import Todo from './views/todo/todo.vue'

export default {
  // 声明引入的组件
  components: {
    Header,
    Footer
    // Todo
  },
  mounted () {
    console.log(this.$store)
    let i = 1
    setInterval(() => {
      this.$store.commit('updateCount', i++)
    }, 1000)
  },
  computed: {
    count () {
      return this.$store.state.count
    }
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
</style>
