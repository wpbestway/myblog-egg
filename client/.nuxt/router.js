import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _22550e64 = () => import('../pages/tool/index.vue' /* webpackChunkName: "pages/tool/index" */).then(m => m.default || m)
const _29d54e52 = () => import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */).then(m => m.default || m)
const _3ff0a1a3 = () => import('../pages/project/index.vue' /* webpackChunkName: "pages/project/index" */).then(m => m.default || m)
const _1887bd62 = () => import('../pages/tag/_id/index.vue' /* webpackChunkName: "pages/tag/_id/index" */).then(m => m.default || m)
const _78750d9c = () => import('../pages/search/_id.vue' /* webpackChunkName: "pages/search/_id" */).then(m => m.default || m)
const _9f70a3aa = () => import('../pages/article/_id/index.vue' /* webpackChunkName: "pages/article/_id/index" */).then(m => m.default || m)
const _ccde8096 = () => import('../pages/category/_id/index.vue' /* webpackChunkName: "pages/category/_id/index" */).then(m => m.default || m)
const _06ba676b = () => import('../pages/series/_id.vue' /* webpackChunkName: "pages/series/_id" */).then(m => m.default || m)
const _3178574f = () => import('../pages/tool/_id/index.vue' /* webpackChunkName: "pages/tool/_id/index" */).then(m => m.default || m)
const _0951fc19 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/tool",
			component: _22550e64,
			name: "tool"
		},
		{
			path: "/about",
			component: _29d54e52,
			name: "about"
		},
		{
			path: "/project",
			component: _3ff0a1a3,
			name: "project"
		},
		{
			path: "/tag/:id?",
			component: _1887bd62,
			name: "tag-id"
		},
		{
			path: "/search/:id?",
			component: _78750d9c,
			name: "search-id"
		},
		{
			path: "/article/:id?",
			component: _9f70a3aa,
			name: "article-id"
		},
		{
			path: "/category/:id?",
			component: _ccde8096,
			name: "category-id"
		},
		{
			path: "/series/:id?",
			component: _06ba676b,
			name: "series-id"
		},
		{
			path: "/tool/:id",
			component: _3178574f,
			name: "tool-id"
		},
		{
			path: "/",
			component: _0951fc19,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
