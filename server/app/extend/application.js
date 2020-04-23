const bcrypt = require('bcrypt')

module.exports = {
  createToken (data) {
    return this.jwt.sign(data, this.config.jwt.secret.toString(), { expiresIn: 60 * 60 * 24 * 30 })
  },
  async validateToken (token) {
    const tokenText = await this.jwt.verify(token, this.config.jwt.secret)
    return tokenText
  },
  decodeToken (token) {
    return this.jwt.decode(token)
  },
  createBcryptHash (text) {
    return new Promise(function (resolve, reject) {
      bcrypt.hash(text, 10, function (err, hash) {
        if (err) {
          reject(err)
        } else {
          resolve(hash)
        }
      })
    })
  },
  validateBcrypt (text, hash) {
    return new Promise(function (resolve, reject) {
      bcrypt.compare(text, hash, function (err, res) {
        if (err || !res) {
          resolve(false)
        } else {
          resolve(true)
        }
      })
    })
  },
  cleanUser (user, deleteAttrs = [ 'pwd' ]) {
    deleteAttrs.forEach(attr => {
      delete user[attr]
    })
    return user
  }
}
