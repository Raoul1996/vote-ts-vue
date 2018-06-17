import {ActionTree} from 'vuex'

import {login} from '@/api/user'

const actions: ActionTree<any, any> = {
  async loginAction ({state, commit}, data) {
    const res = await login (data).then (res => res)
    commit ('loginSuccessful', res)
  }
}
export default actions
