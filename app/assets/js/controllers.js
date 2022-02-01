(() => {
  angular.module('spBlogger.controllers', []);

  angular.module('fj.app.controllers', []);
  angular
    .module('fj.app.controllers')
    .controller('SiteController', ['$scope', ($scope) => {
      $scope.publisher = 'SitePoint';
      $scope.type = 'Web Development';
      $scope.name = 'Scope for SiteController';
    }]);
  angular
    .module('fj.app.controllers')
    .controller('BookController', ['$scope', ($scope) => {
      $scope.books = ['Jump Start HTML5', 'Jump Start CSS', 'Jump Start Responsive Web Design'];
      $scope.name = 'Scope for BookController';
      $scope.wishListCount = 0;

      $scope.addToWishList = (book) => {
        $scope.wishListCount += 1;
      };
      $scope.$watch('wishListCount', (newValue, oldValue) => {
        console.info(`called ${newValue} times`, `old value: ${oldValue}`);
        if (newValue === 2) {
          alert('Great! You have 2 items in your wish list. Time to buy what you love.');
        }
      });
    }]);
})();
