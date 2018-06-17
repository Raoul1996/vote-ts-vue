export interface UserInfo {
  id: number,
  avatar: string,
  email: string,
  mobile: string,
  role: number,
  isLogin: boolean
}

export interface State {
  user: UserInfo
}

const state: State = {
  user: {
    id: 0,
    avatar: 'https://avatars3.githubusercontent.com/u/18366474?s=400&u=9d001b5e917bfdeeb99c66051ffe9d6c827797ae&v=4',
    email: '',
    mobile: '',
    role: 1,
    isLogin: false
  }
}

export default state
