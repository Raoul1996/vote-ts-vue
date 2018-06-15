import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import state, {State} from './state'

Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})
export default new Vuex.Store<State>({
    state,
    mutations: {},
    actions: {},
    plugins: [vuexLocal.plugin]
})
