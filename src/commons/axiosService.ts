import axios from 'axios'
import { getToken } from './authentication/getToken';

export const service = axios.create({
  baseURL: 'http://localhost:8000/',
  timeout: 1000,
  headers: {
    'Authorization': `Bearer ${getToken()}`
  }
});