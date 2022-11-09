import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//import './assets/main.css'
import './assets/css/master.css'
import './assets/css/header.css'
import './assets/css/index-welcome-sec.css'
import './assets/css/index-aboutus-sec.css'
import './assets/css/index-card.css'
import './assets/css/footer.css'
import './assets/lib/bootstrap-dist/js/bootstrap.min.js'
//import './assets/lib/bootstrap-dist/css/bootstrap.min.css'
//import'./assets/lib/fontawesome/css/all.min.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
