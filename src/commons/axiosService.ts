import axios from 'axios'
import { getToken } from './authentication/getToken';
import { logOut } from './authentication/logOut';

const service = axios.create({
  baseURL: 'http://localhost:8000/',
  // headers: {
  //   'Authorization': `Bearer ${getToken()}`
  // }
})

service.interceptors.request.use((config) => {
  const token = getToken()

  if(token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

service.interceptors.response.use(response => {
  return response
}, error => {
  if(error.response.status === 401) {
    logOut()
  }
  return Promise.reject(error)
})

export default service