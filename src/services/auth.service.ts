import axios, { AxiosResponse } from 'axios'
import { $api } from '~/api'
import { ROUTES } from '~/constants/routes'

class AuthService {
  static async login(credentials: {
    email: string
    password: string
  }): Promise<AxiosResponse> {
    return $api.post(`${ROUTES.auth_login}`, { ...credentials })
  }

  static async signup(credentials: {
    firstName: string
    lastName: string
    email: string
    password: string
    uploadedFile?: File | null
  }): Promise<AxiosResponse> {
    const formData = new FormData()
    const { email, firstName, lastName, password, uploadedFile } = credentials

    uploadedFile && formData.append('avatarUri', uploadedFile)
    formData.append('firstName', firstName)
    formData.append('lastName', lastName)
    formData.append('email', email)
    formData.append('password', password)

    return $api.post(ROUTES.auth_signup, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  }

  static async logout(): Promise<AxiosResponse> {
    return $api.post(`${ROUTES.auth_logout}`)
  }

  static async checkAuth() {
    return axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URI}${ROUTES.auth_refresh}`,
      { withCredentials: true }
    )
  }
}

export { AuthService }
