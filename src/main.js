import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { initFlowbite } from "flowbite";

const app = createApp(App)

app.use(initFlowbite)

app.mount('#app')

