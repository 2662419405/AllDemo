import { createApp } from './createapp'

const { app, router } = createApp()
router.onReady(() => {
    app.$mount('#app')
})
