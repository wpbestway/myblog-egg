import { getTaglist, getClassifylist, getSerieslist, getBloglist } from '@/api/api.js'
export const state = () => ({
  counter: 0,
  theme: 'one',
  tags: [],
  classifyList: [],
  seriesList: [],
  blogList: [],
  total: 0,
  pageindex: 1,
  query: {}
})

export const mutations = {
  increment (state) {
    state.counter++
  },
  themeSwitch (state, theme) {
    state.theme = theme
  },
  setTags (state, tags) {
    state.tags = tags
  },
  setBlogs (state, blogs) {
    state.blogList = blogs
  },
  setSerieses (state, seriesList) {
    state.seriesList = seriesList
  },
  setClassifyList (state, classifyList) {
    state.classifyList = classifyList
  },
  SET_TOTAL: (state, data) => {
    state.total = data
  },
  SET_PAGEINDEX: (state, data) => {
    state.pageindex = data
  },
  SET_QUERY: (state, data) => {
    state.query = data
  }
}

export const actions = {
  SET_TAGS_ACTION: ({ commit }) => {
    return getTaglist().then((res) => {
      commit('setTags', res)
    })
  },
  SET_CLASSIFYLIST_ACTION: ({ commit }) => {
    return getClassifylist().then((res) => {
      commit('setClassifyList', res)
    })
  },
  SET_SERIES_LIST_ACTION: ({ commit }, data) => {
    return getSerieslist(data).then((res) => {
      commit('setSerieses', res)
    })
  },
  SET_BLOG_LIST_ACTION: ({ commit, state }, data) => {
    return getBloglist(data).then((res) => {
      let list = state.blogList.concat(res.data)
      commit('setBlogs', list)
      return res
    })
  }
}

export const getters = {
  GET_LIST: (state) => {
    return state.counter
  },
  GET_THEME: (state) => {
    return state.theme
  },
  GET_BLOG_LIST: (state) => {
    return state.blogList
  },
  GET_PAGEINDEX: (state) => {
    return state.pageindex
  },
  GET_QUERY: (state) => {
    return state.query
  },
  GET_SERIES_LIST: (state) => {
    return state.seriesList
  }
}
