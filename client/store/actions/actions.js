// import model from '../../model/client-model'
import model from 'model'
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
    commit('startLoading')
    model.getAllTodos()
      .then(data => {
        commit('fillTodos', data)
        commit('endLoading')
      })
      .catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  addTodo ({ commit }, todo) {
    commit('startLoading')
    model.createTodo(todo)
      .then(data => {
        commit('addTodo', data)
        commit('endLoading')
        notify({
          content: '亲，你有多件事要做!'
        })
      })
      .catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  updateTodo ({ commit }, { id, todo }) {
    commit('startLoading')
    model.updateTodo(id, todo)
      .then(data => {
        commit('updateTodo', { id, todo: data })
        commit('endLoading')
        notify({
          content: '亲，该事件已更新，记得按时完成呦!'
        })
      })
      .catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  deleteTodo ({ commit }, id) {
    commit('startLoading')
    model.deleteTodo(id)
      .then(data => {
        commit('deleteTodo', id)
        commit('endLoading')
        notify({
          content: '亲，你有少件事要做!'
        })
      })
      .catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  deleteAllCompleted ({ commit, state }) {
    commit('startLoading')
    const ids = state.todos.filter(t => t.completed).map(t => t.id)
    model.deleteAllCompleted(ids)
      .then(() => {
        commit('deleteAllCompleted')
        commit('endLoading')
        notify({
          content: '清理一下～～～!'
        })
      })
      .catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  login ({ commit }, { username, password }) {
    commit('startLoading')
    return new Promise((resolve, reject) => {
      model.login(username, password)
        .then(data => {
          commit('doLogin', data)
          commit('endLoading')
          notify({
            content: '登陆成功！'
          })
          resolve()
        }).catch(err => {
          commit('endLoading')
          handleError(err)
          reject(err)
        })
    })
  }
}
