import { get_test_list } from 'api'
let VUEX_TEST = 'VUEX_TEST'
const state = {
  list: []
}
const mutations = {
  VUEX_TEST(state, data) {
    state.list = data
  }
}
const actions = {
  vuex_tets({ commit }, params) {
    return get_test_list(params).then(res => {
      commit('VUEX_TEST', res)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
