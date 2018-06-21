/**
 * Created by pc on 2017/5/3.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'


Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state,
    actions,
    getters,
    mutations
  })
}
