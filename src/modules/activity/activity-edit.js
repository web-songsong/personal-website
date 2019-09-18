import {
  ACTIVITY_PUSH_TEMS,
  ACTIVITY_SET_STYLE,
  ACTIVITY_SET_PROPDATA,
  ACTIVITY_SET_BGIMAGES,
  ACTIVITY_CHANGE_TEMS_TOP,
  ACTIVITY_CHANGE_TEMS_BOTTOM
} from './mutation_types'
import { activity_generate_template } from 'api'
const state = {
  tems: [],
  bodyStyle: {},
  bodyBgImageData: {}
}
const mutations = {
  ACTIVITY_PUSH_TEMS(state, data) {
    state.tems.push(data)
  },
  ACTIVITY_SET_STYLE(state, { index, data }) {
    if (index < 0) {
      state.bodyStyle = data
      return
    }
    let style = state.tems[index]['style'] || {}
    style = { ...style, ...data }
    const params = { ...state.tems[index], style }
    state.tems.splice(index, 1, params)
  },
  ACTIVITY_SET_PROPDATA(state, { index, data }) {
    if (index < 0) {
      return
    }
    let propsData = state.tems[index]['propsData'] || {}
    propsData = { ...propsData, ...data }
    const params = { ...state.tems[index], propsData }
    state.tems.splice(index, 1, params)
  },
  ACTIVITY_SET_BGIMAGES(state, { index, data, blobUrl }) {
    const bgImageData = {
      blobUrl,
      data
    }
    const bgStyle = {
      backgroundImage: `url(${blobUrl})`
    }
    if (index < 0) {
      state.bodyStyle = {
        ...state.bodyStyle,
        ...bgStyle
      }
      state.bodyBgImageData = bgImageData
      return
    }
    let style = state.tems[index]['style'] || {}
    style = { ...style, ...bgStyle }
    const params = { ...state.tems[index], style, bgImageData }
    state.tems.splice(index, 1, params)
  },
  ACTIVITY_CHANGE_TEMS_TOP(state, { index, callback }) {
    if (!index) return
    let source = state.tems[index]
    let target = state.tems[index - 1]
    state.tems.splice(index - 1, 2, source, target)
    callback && callback()
  },
  ACTIVITY_CHANGE_TEMS_BOTTOM(state, { index, callback }) {
    if (index === state.tems.length - 1) return
    let source = state.tems[index]
    let target = state.tems[index + 1]
    state.tems.splice(index, 2, target, source)
    callback && callback()
  }
}
const actions = {
  activity_generate({ state }) {
    const form = new FormData()
    const bodyImg = state.bodyBgImageData.data
    const { backgroundImage, ...bodyStyle } = state.bodyStyle
    const tems = state.tems.map((item, key) => {
      let { bgImageData, ...newItem } = item
      bgImageData && bgImageData.data && form.append(key, bgImageData.data)
      if (newItem.style && newItem.style.backgroundImage) {
        delete newItem.style.backgroundImage
        newItem.imgFlag = true
      }
      return newItem
    })
    form.append('list', JSON.stringify(tems))
    form.append('name', 'test')
    bodyImg && form.append('bodyStyleImg', bodyImg)
    form.append('bodyStyle', JSON.stringify(bodyStyle))
    return activity_generate_template(form)
  }
}

export default {
  state,
  mutations,
  actions
}
