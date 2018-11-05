<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <Todo></Todo>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './common/header.vue'
import Footer from './common/footer.jsx'
import Todo from './views/todo/todo.vue'

export default {
  // 声明引入的组件
  components: {
    Header,
    Footer,
    Todo
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