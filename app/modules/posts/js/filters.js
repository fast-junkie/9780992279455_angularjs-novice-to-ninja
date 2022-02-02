(() => {
  angular.module('spBlogger.posts.filters', []);
  angular
    .module('spBlogger.posts.filters')
    .filter('trustAsHtml', _trustAsHtml);

  _trustAsHtml.$inject = ['$sce'];
  function _trustAsHtml($sce) {
    return (markup) => $sce.trustAsHtml(markup);
  }
})();
