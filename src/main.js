import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { VsButton, VsAvatar, VsTooltip, VsDialog, VsNotification, VsAlert } from 'vuesax-alpha'
import VueTyped from 'vue3-typed-js'
import { MotionPlugin } from '@vueuse/motion'

import './less/App.less'
// style
import 'vuesax-alpha/dist/index.css'
// vuesax darkmode
import 'vuesax-alpha/theme-chalk/dark/css-vars.css'

const app = createApp(App)
app.use(VsButton).use(VsAvatar).use(VsTooltip).use(VsDialog).use(VsNotification).use(VsAlert)
app.use(VueTyped)
app.use(MotionPlugin)
app.mount('#app')
