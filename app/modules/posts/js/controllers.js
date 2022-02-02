(() => {
  angular.module('spBlogger.posts.controllers', []);

  angular
    .module('spBlogger.posts.controllers')
    .controller('PostController', _postController);
  _postController.$inject = ['$scope', 'postService'];
  function _postController($scope, postService) {
    $scope.posts = postService.getAll();
  }

  angular
    .module('spBlogger.posts.controllers')
    .controller('PostDetailsController', _postDetailsController);
  _postDetailsController.$inject = ['$stateParams', '$state', '$scope', 'postService'];
  function _postDetailsController($stateParams, $state, $scope, postService) {
    $scope.closePost = () => { $state.go('allPosts'); };
    $scope.singlePost = postService.getPostById($stateParams.id);
  }
})();
