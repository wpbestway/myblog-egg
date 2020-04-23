
const Service = require('egg').Service

class UserService extends Service {
  async getUser (condition) {
    return await this.ctx.model.Users.findOne(condition)
  }
  async createUser (email, password) {
    const hash = await this.app.createBcryptHash(password)
    return await this.ctx.model.Users.create({ username: email, pwd: hash })
  }
}

module.exports = UserService
