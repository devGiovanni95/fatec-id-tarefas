import axios from 'axios'

const api = axios.create({
    // baseURL: 'http://localhost:3001'
    baseURL: 'https://api-task-qnt8.onrender.com'
})

export default api