angular.module('myApp.view2', ['ngRoute'])

  .config(['$routeProvider', ($routeProvider) => {
    $routeProvider.when('/view2', {
      templateUrl: 'view2/view2.html',
      controller: 'View2Ctrl as vm',
    });
  }])

  .controller('View2Ctrl', ['$interval', function _view2Ctrl($interval) {
    const vm = this;
    vm.loaded = false;
    vm.bookTitle = 'AngularJS Novice To Ninja';
    vm.salary = 12e4;
    vm.percentage = 0.8;
    vm.result = _result;

    const interval = $interval(init, 1e3);

    function init() {
      if (document.readyState === 'complete') {
        console.info('complete...');
        $interval.cancel(interval);
        vm.loaded = !vm.loaded;
        angular.element('.container').fadeIn('slow');
      }
    }
    function _result() {
      return vm.salary * vm.percentage * 0.01;
    }
  }]);
