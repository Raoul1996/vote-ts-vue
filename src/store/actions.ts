import {ActionTree} from 'vuex'

import {login, register} from '@/api/user'

const actions: ActionTree<any, any> = {
  async loginAction ({state, commit}, data) {
    const res = await login(data)
    commit('loginSuccessful', res)
  },
  async registerAction ({state, commit}, data) {
    const res = await register(data)
    commit('registerSuccessful', res)
  }
}
export default actions
