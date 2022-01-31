// jshint strict: false
exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    '*.js',
  ],

  capabilities: {
    browserName: 'firefox',
  },

  baseUrl: 'http://192.168.2.101:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
  },

};
