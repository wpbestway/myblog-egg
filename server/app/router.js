
module.exports = app => {
  require('./router/admin')(app)
  require('./router/client')(app)
}
