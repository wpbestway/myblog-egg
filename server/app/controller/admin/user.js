
const Controller = require('egg').Controller

class AdminController extends Controller {
  async login () {
    const { username, password } = this.ctx.request.body
    let user = await this.ctx.service.admin.user.getUser({ username })
    if (user) {
      if (await this.app.validateBcrypt(password, user.pwd)) {
        user = user.toJSON()
        user = this.app.cleanUser(user)
        const token = this.app.createToken(user)
        this.ctx.cookies.set('token', token, {
          httpOnly: false
        })
        this.ctx.success(user)
      } else {
        this.ctx.fail({}, '密码错误', 1202)
      }
    } else {
      this.ctx.fail(user, '账户未注册', 1201)
    }
  }
  async logout () {
    this.ctx.cookies.set('token', '', {
      httpOnly: false
    })
    this.ctx.success()
  }
  async register () {
    const error = this.app.validator.validate({ email: 'email', password: 'password' }, this.ctx.request.body)
    if (error) {
      this.ctx.fail(error, 'validate fail', 1101)
    } else {
      const { email, password, repassword } = this.ctx.request.body
      if (password !== repassword) {
        this.ctx.fail({}, '密码不一致', 1103)
        return
      }
      let user = await this.ctx.service.admin.user.getUser({ username: email })
      if (user) {
        this.ctx.fail({}, '该邮箱已被注册，请直接登录', 1104)
      } else {
        user = await this.ctx.service.admin.user.createUser(email, password)
        user = user.toJSON()
        user = this.app.cleanUser(user)
        const token = this.app.createToken(user)
        this.ctx.cookies.set('token', token, {
          httpOnly: false
        })
        this.ctx.success(user)
      }
    }
  }
}

module.exports = AdminController
