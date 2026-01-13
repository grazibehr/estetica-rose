import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.css'

const app = createApp(App)

// Global error handler for security
app.config.errorHandler = (err, instance, info) => {
  console.error('Vue Error:', info)
}

// Disable devtools in production
app.config.performance = false

app.mount('#app')
