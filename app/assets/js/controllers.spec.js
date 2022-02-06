beforeEach(module('ngResource'));
beforeEach(module('ui.router'));
beforeEach(module('spBlogger.services'));
beforeEach(module('spBlogger.controllers'));

describe('PostController Test', () => {
  let $httpBackend;
  beforeEach(inject((_$httpBackend_) => {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/posts').respond([{ title: 'Test', _id: 1 }, { title: 'Test2', _id: 2 }]);
  }));
  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });
  it('Should initialize controller with 2 posts', inject(($rootScope, $controller, Post) => {
    const $scope = $rootScope.$new();
    $controller('PostController', { $scope, Post });
    $httpBackend.flush();
    expect($scope.posts.length).toBe(2);
  }));
});

describe('PostDetailsController Test', () => {
  let $httpBackend;
  beforeEach(inject((_$httpBackend_) => {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/posts/2').respond({ title: 'Test2', _id: 2 });
  }));
  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });
  it('Should initialize controller with 1 post', inject(($state, $stateParams, $rootScope, $controller, Post) => {
    const $scope = $rootScope.$new();
    $stateParams.id = 2;
    $controller('PostDetailsController', {
      $stateParams, $state, $scope, Post,
    });
    $httpBackend.flush();
    expect($scope.singlePost).not.toBe(undefined);
  }));
});
