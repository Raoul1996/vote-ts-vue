import instance from './index'
import {ApiMaker} from '@/utils'

export const login = (data: any) => {
  return instance.post(ApiMaker('login'), data)
}
