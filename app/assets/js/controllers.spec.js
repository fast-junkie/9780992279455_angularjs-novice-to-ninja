describe('PostController Test', () => {
  beforeEach(module('spBlogger.controllers'));
  beforeEach(module('spBlogger.services'));

  it('Should initialize controller with 4 posts', inject(($rootScope, $controller, postService) => {
    const $scope = $rootScope.$new();
    $controller('PostController', { $scope, postService });
    expect($scope.posts.length).toBe(4);
  }));
});

describe('PostDetailsController Test', () => {
  beforeEach(module('spBlogger.controllers'));
  beforeEach(module('ui.router'));
  beforeEach(module('spBlogger.services'));

  it('Should initialize controller with 1 post', inject(($state, $stateParams, $rootScope, $controller, postService) => {
    const $scope = $rootScope.$new();
    $stateParams.id = 2;
    $controller('PostDetailsController', {
      $scope, $stateParams, $state, postService,
    });
    expect($scope.singlePost).not.toBe(undefined);
  }));
});
