// jshint strict: false
module.exports = (config) => {
  config.set({

    basePath: './app',

    files: [
      'lib/angular/angular.js',
      'lib/angular-mocks/angular-mocks.js',
      'lib/angular-route/angular-route.js',
      'lib/@uirouter/angularjs/release/angular-ui-router.js',
      'assets/**/*.js',
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Firefox'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
    ],

  });
};
