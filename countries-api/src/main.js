import { createApp } from 'vue'
import App from './App.vue'
import store from './store/countries'

createApp(App).use(store).mount('#app')
