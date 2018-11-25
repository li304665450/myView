import createApp from './create-app'
import bus from './until/bus'

const { app, router } = createApp()

bus.$on('auth', () => {
  router.push('/login')
})

router.onReady(() => {
  app.$mount('#root')
})
