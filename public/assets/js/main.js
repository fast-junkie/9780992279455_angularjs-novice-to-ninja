(() => {
  angular.module('fj.app', []);

  angular
    .module('fj.app')
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', '$interval'];
  function mainController($scope, $interval) {
    $scope.loaded = false;
    $scope.bookTitle = 'AngularJS Novice To Ninja';

    const interval = $interval(init, 1e3);

    function init() {
      if (document.readyState === 'complete') {
        console.info('complete...');
        $interval.cancel(interval);
        $scope.loaded = !$scope.loaded;
      }
    }
  }
})();
