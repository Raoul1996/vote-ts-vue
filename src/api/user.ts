import instance from './index'
import {ApiMaker} from '@/utils'

export const login = (data: object) => {
  return instance.post(ApiMaker('login'), data)
}
export const register = (data: object) => {
  return instance.post(ApiMaker('register'), data)
}
