import { LocalStorageService } from '~/services/localStorage.service'
import axios, { AxiosRequestConfig } from 'axios'

const $api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URI,
  withCredentials: true
})

$api.interceptors.request.use((config: AxiosRequestConfig) => {
  if (!config.headers) {
    config.headers = {}
  }

  config.headers.Authorization = `Bearer ${LocalStorageService.getItem(
    'accessToken'
  )}`

  return config
})

export { $api }
