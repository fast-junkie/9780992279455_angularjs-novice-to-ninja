(() => {
  angular.module('spBlogger', [
    'spBlogger.posts',
    'spBlogger.controllers',
    'spBlogger.directives',
    'spBlogger.filters',
    'spBlogger.services',
  ]);
  angular.module('spBlogger').value('version', 'v0.6.5');

  angular.module('fj.app', ['fj.app.controllers']);
  angular
    .module('fj.app')
    .run(($rootScope) => {
      $rootScope.title = 'Famous Books';
      $rootScope.name = 'Root Scope';
    });
})();
