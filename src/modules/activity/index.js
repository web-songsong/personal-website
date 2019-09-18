import {} from './mutation_types'
import { activity_generate_template } from 'api'
const state = {}
const mutations = {}
const actions = {
  activity_generate({ state }) {
    return activity_generate_template()
  }
}

export default {
  state,
  mutations,
  actions
}
