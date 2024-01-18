import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import './style.css'
import router from './router'
import App from './App.vue'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const vuetify = createVuetify({
  components,
})

const app = createApp(App)
app.use(pinia)
app.use(vuetify)
app.use(router)
app.mount('#app')
