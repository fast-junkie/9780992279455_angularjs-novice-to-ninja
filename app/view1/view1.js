angular.module('myApp.view1', ['ngRoute'])

  .config(['$routeProvider', ($routeProvider) => {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl as vm',
    });
  }])

  .controller('View1Ctrl', ['$interval', function _view1Ctrl($interval) {
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
      console.info('result...', vm.salary, vm.percentage);
      return vm.salary * vm.percentage * 0.01;
    }
  }]);
