import { IUser } from '~/interfaces/user.interface'

export type UserActions =
  | { type: 'SET_USER'; payload: IUser | null }
  | { type: 'SET_USER_LOADING'; payload: boolean }

export interface IUserState {
  user: IUser | null
  isUserLoading: boolean
}

export const initialValues: IUserState = {
  user: null,
  isUserLoading: false
}
