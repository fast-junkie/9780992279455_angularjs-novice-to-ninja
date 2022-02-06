(() => {
  angular.module('spBlogger.controllers', []);

  /**
   * Post controller
   */
  angular
    .module('spBlogger.controllers')
    .controller('PostController', _postController);
  _postController.$inject = ['$scope', 'Post'];
  function _postController($scope, Post) {
    $scope.posts = Post.query();
  }

  /**
   * Post details controller
   */
  angular
    .module('spBlogger.controllers')
    .controller('PostDetailsController', _postDetailsController);
  _postDetailsController.$inject = ['$stateParams', '$state', '$scope', 'Post'];
  function _postDetailsController($stateParams, $state, $scope, Post) {
    $scope.closePost = () => { $state.go('allPosts'); };
    $scope.singlePost = Post.get({ id: $stateParams.id });
  }

  /**
   * Admin controller
   */
  angular
    .module('spBlogger.controllers')
    .controller('AdminController', _adminController);
  _adminController.$inject = ['$scope', '$state', 'authService', 'user'];
  function _adminController($scope, $state, authService, user) {
    $scope.logout = function _logout() {
      authService.logout()
        .then(() => {
          $state.go('login');
        });
    };
  }

  /**
   * Post creation controller
   */
  angular
    .module('spBlogger.controllers')
    .controller('PostCreationController', _postCreationController);
  _postCreationController.$inject = ['$scope', '$state', 'Post'];
  function _postCreationController($scope, $state, Post) {
    $scope.post = new Post();
    $scope.buttonText = 'Create';
    $scope.savePost = function _savePost() {
      $scope.buttonText = 'Saving...';
      $scope.post.permalink = ($scope.post.title).toLowerCase().replace(/[\s]/g, '-');
      $scope.post.$save(() => {
        $state.go('admin.postViewAll');
      });
    };
  }

  /**
   * Post update controller
   */
  angular
    .module('spBlogger.controllers')
    .controller('PostUpdateController', _postUpdateController);
  _postUpdateController.$inject = ['$scope', '$state', '$stateParams', 'Post'];
  function _postUpdateController($scope, $state, $stateParams, Post) {
    $scope.post = Post.get({ id: $stateParams.id });
    $scope.buttonText = 'Update';
    $scope.updatePost = function _updatePost() {
      $scope.buttonText = 'Updating...';
      $scope.post.$update(() => {
        $state.go('admin.postViewAll');
      });
    };
  }

  /**
   * Post list controller
   */
  angular
    .module('spBlogger.controllers')
    .controller('PostListController', _postListController);
  _postListController.$inject = ['$scope', '$state', 'popupService', 'Post'];
  function _postListController($scope, $state, popupService, Post) {
    $scope.posts = Post.query();
    $scope.deletePost = function _deletePost(post) {
      if (popupService.showPopup('Really delete this?')) {
        post.$delete(() => {
          $state.go('admin.postViewAll', undefined, {
            reload: true,
          });
        });
      }
    };
  }

  /**
   * Login controller
   */
  angular
    .module('spBlogger.controllers')
    .controller('LoginController', _loginController);
  _loginController.$inject = ['$scope', '$state', 'authService'];
  function _loginController($scope, $state, authService) {
    $scope.buttonText = 'Login';
    $scope.login = function _login() {
      $scope.buttonText = 'Logging in...';
      authService
        .login($scope.credentials.username, $scope.credentials.password)
        .then(() => { $state.go('admin.postViewAll'); }, () => { $scope.invalidLogin = true; })
        .finally(() => {
          $scope.buttonText = 'Login';
        });
    };
  }
})();
