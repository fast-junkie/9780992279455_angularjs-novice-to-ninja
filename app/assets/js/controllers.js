(() => {
  angular.module('spBlogger.controllers', []);

  angular
    .module('spBlogger.controllers')
    .controller('PostController', _postController);

  _postController.$inject = ['$scope', 'postService'];
  function _postController($scope, postService) {
    $scope.posts = postService.getAll();
  }

  angular
    .module('spBlogger.controllers')
    .controller('PostDetailsController', _postDetailsController);

  _postDetailsController.$inject = ['$stateParams', '$state', '$scope', 'postService'];
  function _postDetailsController($stateParams, $state, $scope, postService) {
    $scope.closePost = () => { $state.go('allPosts'); };
    $scope.singlePost = postService.getPostById($stateParams.id);
  }

  angular
    .module('spBlogger.controllers')
    .controller('AdminController', _adminController);

  _adminController.$inject = ['$scope'];
  function _adminController($scope) {
    console.info('Admin controller loaded...');
  }
  angular
    .module('spBlogger.controllers')
    .controller('PostCreationController', _postCreationController);

  _postCreationController.$inject = ['$scope'];
  function _postCreationController($scope) {
    console.info('Admin post creation controller loaded...');
  }
  angular
    .module('spBlogger.controllers')
    .controller('PostUpdateController', _postUpdateController);

  _postUpdateController.$inject = ['$scope'];
  function _postUpdateController($scope) {
    console.info('Admin controller loaded...');
  }
  angular
    .module('spBlogger.controllers')
    .controller('PostListController', _postListController);

  _postListController.$inject = ['$scope'];
  function _postListController($scope) {
    console.info('Admin controller loaded...');
  }
})();
