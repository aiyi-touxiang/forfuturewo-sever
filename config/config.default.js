'use strict';

module.exports = appInfo => {
  const config = exports = {};
  config.xframe = {
    enable: false
  };
  config.security = {
    csrf: false
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_node javascript egg';

  // add your config here
  config.middleware = [];

  return config;
};
