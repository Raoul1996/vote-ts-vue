import {ActionTree} from 'vuex'

import {login} from '@/api/user'

const actions: ActionTree<any, any> = {
  async loginAction ({state, commit}, data) {
    const res = await login (data)
    commit ('loginSuccessful', res)
  }
}
export default actions
