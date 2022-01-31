angular.module('myApp.version.version-directive', [])

  .directive('appVersion', ['version', function _version(version) {
    return (scope, elm) => {
      elm.text(version);
    };
  }]);
