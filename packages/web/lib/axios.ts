import axios from 'axios'
import { parseCookies } from 'nookies'

const { 'koaris.token': token } = parseCookies()

export const api = axios.create({
  baseURL: process.env.BASE_URL || 'http://localhost:3333'
})

if (token) {
  api.defaults.headers['Authorization'] = `Bearer ${token}`
}