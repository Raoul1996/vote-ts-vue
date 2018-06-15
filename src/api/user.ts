import instance from './index'

const url = 'http://localhost:8080/api/'
export const login = (data: any) => {
  return instance.post(url, data)
}
