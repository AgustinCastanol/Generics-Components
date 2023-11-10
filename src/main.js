import { createApp } from 'vue'
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import 'primeicons/primeicons.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
const app = createApp(App)

app.use(PrimeVue)
app.component(Dialog)
app.mount('#app')
