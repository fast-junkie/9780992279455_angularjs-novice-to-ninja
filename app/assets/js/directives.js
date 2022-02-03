(() => {
  angular.module('spBlogger.directives', []);

  angular
    .module('spBlogger.directives')
    .directive('appVersion', _appVersion);

  _appVersion.$inject = ['version'];
  function _appVersion(version) {
    return {
      restrict: 'AE',
      link(scope, elem) {
        elem.html(version);
      },
    };
  }
})();
