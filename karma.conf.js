// jshint strict: false
module.exports = (config) => {
  config.set({

    basePath: './app',

    preprocessors: {
      'assets/views/**/*.html': ['ng-html2js'],
    },

    ngHtml2JsPreprocessor: {
      moduleName: 'templates',
    },

    files: [
      'lib/angular/angular.js',
      'lib/angular-mocks/angular-mocks.js',
      'lib/angular-route/angular-route.js',
      'lib/angular-resource/angular-resource.js',
      'lib/@uirouter/angularjs/release/angular-ui-router.js',
      'assets/views/**/*.html',
      'assets/**/*.js',
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Firefox'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor',
    ],

  });
};
