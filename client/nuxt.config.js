const IS_DEV = process.env.NODE_ENV !== 'production'
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'readycode',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'readycode', content: 'blog project by wangpei' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/monokai-sublime.min.css' },
      { rel: 'stylesheet', href: '//at.alicdn.com/t/font_1765743_9dvv2w5pdvp.css' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      { src: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        "postcss-custom-properties": false
      }
    },
    /*
    ** Run ESLint on save
    */
   vendor: ['axios'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    styleResources: {
      scss: ['./assets/scss/variables.scss', './assets/scss/include-media.scss'],
      options: {}
    }
  },
  css: [
    'swiper/dist/css/swiper.css',
    '~assets/scss/reset.css',
    '~assets/scss/common.css',
    '~assets/scss/theme.css',
    { src: '~assets/scss/markdown.scss', lang: 'scss' }
  ],
  modules: [
    '@nuxtjs/proxy'
  ],
  plugins: [
    '~plugins/filters.js',
    { src: '~assets/js/particles.js', ssr: false },
    { src: '~assets/js/baidu.js', ssr: false },
  ],
  router: {
    middleware: 'router'
  },
  proxy: [
    [
      '/api', 
      {
        target: IS_DEV ? 'http://127.0.0.1:7001' : 'http://116.85.36.134:4001', // client主机
        pathRewrite: { '^/api' : '' }
      }
    ]
  ]
}
