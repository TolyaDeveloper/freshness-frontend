import { LocalStorageService } from '~/services/localStorage.service'
import { ROUTES } from '~/constants/routes'
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

$api.interceptors.response.use(
  config => {
    return config
  },
  async error => {
    const originalRequest = error.config

    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true

      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URI}${ROUTES.auth_refresh}`,
          { withCredentials: true }
        )

        LocalStorageService.setItem('accessToken', response.data.accessToken)

        return $api.request(originalRequest)
      } catch (error) {
        console.error(error)
      }
    }

    throw error
  }
)

export { $api }
