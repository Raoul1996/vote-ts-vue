import {State} from './state'

export default {
  loginLoading (state: State, data: any) {
    state.user!.isLogin = true
  },
}
