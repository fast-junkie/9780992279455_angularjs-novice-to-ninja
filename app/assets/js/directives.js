(() => {
  angular.module('spBlogger.directives', []);

  angular
    .module('spBlogger.directives')
    .directive('appVersion', _appVersion);

  _appVersion.$inject = ['VERSION'];
  function _appVersion(VERSION) {
    return {
      restrict: 'AE',
      link(scope, elem) {
        elem.html(VERSION);
      },
    };
  }
})();
