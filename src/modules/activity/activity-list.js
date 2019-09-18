import { activity_template_list } from 'api'
let TEST = 'TEST'
const state = {
  list: '11'
}
const mutations = {
  TEST(state, data) {
    state.list = data
  }
}
const actions = {
  activity_list_test({ commit }, { test }) {
    return activity_template_list({}).then(res => {
      commit('TEST', res)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
