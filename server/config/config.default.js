/* eslint valid-jsdoc: "off" */

'use strict';

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
  config.keys = appInfo.name + '_1586880460203_1920';

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
      ignore: '/client',
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
