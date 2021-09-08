import axios from 'axios'

const api = axios.create({
    baseURL: 'https://172.16.1.122:3333',
})

export default api