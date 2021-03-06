
/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  validate: {
    enable: true,
    package: 'egg-validate'
  },
  jwt: {
    enable: true,
    package: 'egg-jwt'
  },
  mongoose: {
    enable: true,
    package: 'egg-mongoose'
  }
}
