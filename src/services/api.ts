import axios from 'axios'

const api = axios.create({
    baseURL: 'https://c3e-server.onrender.com',
    headers: {
        'Content-Type': 'multipart/form-data'
    }
})

export default api