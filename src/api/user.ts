import instance from './index'

export const login = (data: object) => {
  return instance.post('login', data)
}
export const register = (data: object) => {
  return instance.post('register', data)
}
