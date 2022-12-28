import axios from 'axios'

const api = axios.create({
    baseURL: 'https://c3e-server.onrender.com'
})

export default api