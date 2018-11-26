import model from '../../model/client-model'
import notify from '../../components/notification/function'
import bus from '../../until/bus'

const handleError = (err) => {
  if (err.code === 401) {
    notify({
      content: '请先登陆！'
    })
    bus.$emit('auth')
  }
}

export default {
  updateCountAsync (store, data) {
    setTimeout(() => {
      store.commit('updateCount', data.num)
    }, data.time)
  },
  fetchTodos ({ commit }) {
    model.getAllTodos()
      .then(data => {
        commit('fillTodos', data)
      })
      .catch(err => {
        handleError(err)
      })
  },
  addTodo ({ commit }, todo) {
    model.createTodo(todo)
      .then(data => {
        commit('addTodo', data)
        notify({
          content: '亲，你有多件事要做!'
        })
      })
      .catch(err => {
        handleError(err)
      })
  },
  updateTodo ({ commit }, { id, todo }) {
    model.updateTodo(id, todo)
      .then(data => {
        commit('updateTodo', { id, todo: data })
        notify({
          content: '亲，该事件已更新，记得按时完成呦!'
        })
      })
      .catch(err => {
        handleError(err)
      })
  },
  deleteTodo ({ commit }, id) {
    model.deleteTodo(id)
      .then(data => {
        commit('deleteTodo', id)
        notify({
          content: '亲，你有少件事要做!'
        })
      })
      .catch(err => {
        handleError(err)
      })
  },
  deleteAllCompleted ({ commit, state }) {
    const ids = state.todos.filter(t => t.completed).map(t => t.id)
    model.deleteAllCompleted(ids)
      .then(() => {
        commit('deleteAllCompleted')
        notify({
          content: '清理一下～～～!'
        })
      })
      .catch(err => {
        handleError(err)
      })
  },
  login ({ commit }, { username, password }) {
    return new Promise((resolve, reject) => {
      model.login(username, password)
        .then(data => {
          commit('doLogin', data)
          notify({
            content: '登陆成功！'
          })
          resolve()
        }).catch(err => {
          handleError(err)
          reject(err)
        })
    })
  }
}
