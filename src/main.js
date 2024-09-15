import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Vuesax from 'vuesax-alpha'
import VueTyped from 'vue3-typed-js'
import { MotionPlugin } from '@vueuse/motion'


// style
import 'vuesax-alpha/dist/index.css'
// vuesax darkmode
import 'vuesax-alpha/theme-chalk/dark/css-vars.css'

const app = createApp(App)
app.use(Vuesax)
app.use(VueTyped)
app.use(MotionPlugin)
app.mount('#app')
