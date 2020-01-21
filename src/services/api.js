import axios from 'axios'

// emulador ios: 'http://localhost:3333', emulador android 'http://10.0.2.2:3333'
const api = axios.create({
  baseURL: 'http://192.168.10.108:3333'
})

export default api
