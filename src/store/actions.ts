import {ActionTree} from 'vuex'
import axios from 'axios'

import {login} from '@/api/user'

const actions: ActionTree<any, any> = {
  async login ({state, commit}, data) {
    const res: Ajax.AxiosResponse = await login(data)
    commit('loginSuccessful', res)
  }
}
