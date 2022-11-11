import axios, { AxiosResponse } from 'axios'
import { $api } from '~/api'
import { API } from '~/constants/routes'
import { IUser } from '~/interfaces/user.interface'

class AuthService {
  static async login(credentials: {
    email: string
    password: string
  }): Promise<AxiosResponse<{ accessToken: string; user: IUser }>> {
    return $api.post(`${API.auth_login}`, { ...credentials })
  }

  static async signup(credentials: {
    firstName: string
    lastName: string
    email: string
    password: string
  }): Promise<AxiosResponse<{ accessToken: string; user: IUser }>> {
    return $api.post(API.auth_signup, { ...credentials })
  }

  static async logout(): Promise<AxiosResponse> {
    return $api.post(`${API.auth_logout}`)
  }

  static async checkAuth(): Promise<
    AxiosResponse<{ accessToken: string; user: IUser }>
  > {
    return axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URI}${API.auth_refresh}`,
      { withCredentials: true }
    )
  }
}

export { AuthService }
