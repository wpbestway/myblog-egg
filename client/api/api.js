import axios from '~/plugins/axios.js'

export function getBloglist (data) {
  return axios({
    url: '/client/blog/list',
    method: 'get',
    params: data
  })
}

export function getSerieslist (data) {
  return axios({
    url: '/client/series/list',
    method: 'get',
    params: data
  })
}

export function getTaglist () {
  return axios.get('/client/tag/list')
}

export function getToolList () {
  return axios.get('/client/tool/list')
}

export function getClassifylist () {
  return axios.get('/client/classify/list')
}

export function getArticle (id) {
  return axios({
    url: '/client/blog/detail',
    method: 'get',
    params: { blogId: id }
  })
}

export function getTool (id) {
  return axios({
    url: '/client/tool/detail',
    method: 'get',
    params: { id: id }
  })
}

export function submitComment (data) {
  return axios({
    url: '/client/comment/add',
    method: 'post',
    data: data
  })
}

export function getComment (blogId) {
  return axios({
    url: '/client/comment/list',
    method: 'get',
    params: { blogId }
  })
}
