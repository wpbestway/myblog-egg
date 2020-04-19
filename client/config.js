const IS_DEV = process.env.NODE_ENV !== 'production'

module.exports = {
  base_url: IS_DEV ? 'http://localhost:3000' : 'https://www.readycode.cn'
}
