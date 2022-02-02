(() => {
  angular
    .module('spBlogger', [
      'spBlogger.posts',
      'spBlogger.controllers',
      'spBlogger.directives',
      'spBlogger.filters',
      'spBlogger.services',
      'ui.router',
    ]);

  angular
    .module('spBlogger')
    .value('version', 'v0.6.5');

  angular
    .module('spBlogger')
    .run(['$state', ($state) => { $state.go('allPosts'); }]);
})();
