(() => {
  angular.module('spBlogger.posts', [
    'ui.router',
    'spBlogger.posts.controllers',
    'spBlogger.posts.directives',
    'spBlogger.posts.services',
    'spBlogger.posts.filters',
  ]);
  angular
    .module('spBlogger.posts')
    .config(_config);

  _config.$inject = ['$stateProvider', '$locationProvider'];
  function _config($stateProvider, $locationProvider) {
    $stateProvider
      .state('allPosts', {
        url: '/posts',
        templateUrl: 'modules/posts/views/posts.html',
        controller: 'PostController',
      })
      .state('singlePost', {
        url: '/posts/:id/:permalink',
        templateUrl: 'modules/posts/views/singlePost.html',
        controller: 'PostDetailsController',
      });
  }
})();
