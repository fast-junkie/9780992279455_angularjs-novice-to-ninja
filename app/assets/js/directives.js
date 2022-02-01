(() => {
  angular.module('spBlogger.directives', []);

  angular
    .module('spBlogger.directives')
    .directive('appVersion', (version) => ({
      restrict: 'AE',
      link(scope, elem) {
        elem.html(version);
      },
    }));
})();
