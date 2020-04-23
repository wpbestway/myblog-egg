/* eslint valid-jsdoc: "off" */

'use strict';

const fs = require('fs')
const path = require('path')

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = "fs.readFileSync(path.join(__dirname, './secret.key'))";

  // add your middleware config here
  config.middleware = ['validate'];

  config.jwt = {
    secret: fs.readFileSync(path.join(__dirname, './secret.key'))
  }

  // add your middleware config here
  config.middleware = [];

  // mongoose配置
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/blog',
      options: {}
    }
  };

  // csrf set
  config.security = {
    csrf: {
      ignore: ['/client', '/admin']
    }
  };

  // add your user config here
  const userConfig = {
    myAppName: 'blog-server'
  }

  return {
    ...config,
    ...userConfig,
  };
};
