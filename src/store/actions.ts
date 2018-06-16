import {ActionTree} from 'vuex'

import {login} from '@/api/user'

const actions: ActionTree<any, any> = {
  async login ({state, commit}, data) {
    const res: object = await login(data)
    commit('loginSuccessful', res)
  }
}
