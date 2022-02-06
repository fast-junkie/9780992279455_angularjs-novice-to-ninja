(() => {
  angular.module('spBlogger.directives', []);

  // Version
  angular
    .module('spBlogger.directives')
    .directive('appVersion', _appVersion);
  _appVersion.$inject = ['VERSION'];
  function _appVersion(VERSION) {
    return {
      restrict: 'AE',
      link(scope, elem) {
        elem.html(VERSION);
      },
    };
  }

  angular
    .module('spBlogger')
    .directive('comments', _comments);
  _comments.$inject = [];
  function _comments() {
    return {
      restrict: 'EA',
      scope: {
        postInstance: '=',
      },
      replace: true,
      link(scope) {
        scope.saveComment = function _saveComment() {
          // const postID = scope.postInstance._id;
          const savedPostInstance = {};
          scope.comment.datePublished = new Date();
          angular.copy(scope.postInstance, savedPostInstance);
          savedPostInstance.comments.unshift(scope.comment);
          scope.postInstance.comments.unshift(scope.comment);
          scope.comment = {};
          savedPostInstance.$update();
        };
      },
      templateUrl: 'assets/views/posts/comments.html',
    };
  }
})();
