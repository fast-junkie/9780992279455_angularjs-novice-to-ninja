angular.module('myApp.version.interpolate-filter', [])

  .filter('interpolate', ['version', function _version(version) {
    return (text) => String(text).replace(/%VERSION%/mg, version);
  }]);
