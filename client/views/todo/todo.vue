<template>
	<section class="real-app">
    <!-- <tabs value="1">
      <tab lavel="tab1" index="1" />
      <tab index="2"><span slot="label" style="color:red">tab2</span></tab>
      <tab lavel="tab3" index="3" />
    </tabs> -->
     <Tabs
      :filter="filter"
      :todos="todos"
      @toggle="toggleFilter"
      @delAllCompleted='clearAllCompleted'
    />
		<input
        type="text"
		class="add-input"
		autofocus="autofocus"
		placeholder="接下去要做什么？"
		@keyup.enter="handleAdd"
		>
    <Item
      :todo="todo"
      v-for="todo in filteredTodos"
      :key="todo.id"
      @del="deleteTodo"
      @toggle='toggleTodoState'
    />
        <!-- <router-view/> -->
	</section>
</template>

<script>
import {
  mapState, mapActions
} from 'vuex'
import Item from './item.vue'
import Tabs from './tabs.vue'

export default {
  metaInfo: {
    title: 'this is  todo'
  },
  beforeRouteEnter (to, from, next) {
    console.log('todo before enter')
    next(vm => {
      console.log('after enter vm.id is ', vm.id)
    })
  },
  beforeRouteUpdate (to, from, next) {
    console.log('todo update enter')
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('todo leave enter')
    next()
  },
  props: ['id'],
  mounted () {
    this.fetchTodos()
  },
  asyncData () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(123)
      }, 1000)
    })
  },
  data () {
    return {
      filter: 'all'
    }
  },
  components: {
    Item,
    Tabs
  },
  computed: {
    ...mapState(['todos']),
    filteredTodos () {
      if (this.filter === 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed'
      return this.todos.filter(todo => completed === todo.completed)
    }
  },
  methods: {
    ...mapActions([
      'fetchTodos',
      'addTodo',
      'deleteTodo',
      'updateTodo',
      'deleteAllCompleted'
    ]),
    handleAdd (e) {
      const content = e.target.value.trim()
      if (!content) {
        this.$notify({
          content: '必须输入要做的内容'
        })
        return
      }
      const todo = {
        content,
        completed: false
      }
      this.addTodo(todo)
      e.target.value = ''
    },
    toggleFilter (state) {
      this.filter = state
    },
    // deleteTodo (id) {
    //   this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    // },
    toggleTodoState (todo) {
      this.updateTodo({
        id: todo.id,
        todo: Object.assign({}, todo, {
          completed: !todo.completed
        })
      })
    },
    clearAllCompleted () {
      this.deleteAllCompleted()
    }
  }
}
</script>

<style lang="stylus" scoped>
.real-app{
        width 600px
        margin :0px  auto
        box-shadow :0px 0px 5px #666
    }
    .add-input{
        positon:relative;
        margin 0px
        width 100%
        font-size 24px
        font-family  inherit
        font-weight:inherit
        line-height 1.4rem
        border 0;
        outline none
        color inherit
        padding 6px
        border 1px solid #999
        box-shadow: inset 0 -1px 5px 0px rgba(0,0,0,0)
        box-sizing border-box
        font-smoothing:antialiased;
        padding 16px 16px 16px 60px
        border none
    }
</style>
