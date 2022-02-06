(() => {
  angular
    .module('spBlogger', [
      'ngCookies',
      'ngResource',
      'ui.router',
      'spBlogger.controllers',
      'spBlogger.services',
      'spBlogger.directives',
      'spBlogger.filters']);

  angular
    .module('spBlogger')
    .value('VERSION', 'v0.6.5');

  angular
    .module('spBlogger')
    .config(_config);

  _config.$inject = ['$stateProvider'];
  function _config($stateProvider) {
    // Posts...
    $stateProvider
      .state('allPosts', {
        url: '/posts',
        templateUrl: 'assets/views/posts/posts.html',
        controller: 'PostController',
      })
      .state('singlePost', {
        url: '/posts/:id/:permalink',
        templateUrl: 'assets/views/posts/singlePost.html',
        controller: 'PostDetailsController',
      });

    // Admin...
    $stateProvider
      .state('admin', {
        url: '/admin',
        abstract: true,
        controller: 'AdminController',
        resolve: {
          user: ['authService', '$q', function _user(authService, $q) {
            return authService.user || $q.reject({ unAuthorized: true });
          }],
        },
        templateUrl: 'assets/views/admin/admin-home.html',
      })
      .state('admin.postNew', {
        url: '/posts/new',
        controller: 'PostCreationController',
        templateUrl: 'assets/views/admin/admin-new-post.html',
      })
      .state('admin.postUpdate', {
        url: '/posts/:id/edit',
        controller: 'PostUpdateController',
        templateUrl: 'assets/views/admin/admin-update-post.html',
      })
      .state('admin.postViewAll', {
        url: '',
        controller: 'PostListController',
        templateUrl: 'assets/views/admin/admin-all-posts.html',
      });

    // Auth...
    $stateProvider
      .state('login', {
        url: '/login',
        controller: 'LoginController',
        templateUrl: 'assets/views/auth/login.html',
      });
  }

  angular
    .module('spBlogger')
    .run(_run);

  _run.$inject = ['$state', '$rootScope', '$cookies', 'authService'];
  function _run($state, $rootScope, $cookies, authService) {
    $state.go('allPosts');

    $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
      if (error.unAuthorized) {
        $state.go('login');
      } else if (error.authorized) {
        $state.go('admin.postViewAll');
      }
    });
    authService.user = $cookies.get('user');
  }
})();
