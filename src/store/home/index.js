import { homeQuerylist } from '../API/home'
const state = {}
const mutations = {}
const actions = {
  home_getList({ commit }) {
    return homeQuerylist().then(res => {
      return res.data
    })
  }
}

export default {
  state,
  mutations,
  actions
}
