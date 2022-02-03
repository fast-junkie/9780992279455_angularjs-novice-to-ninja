(() => {
  angular.module('spBlogger.filters', []);

  angular
    .module('spBlogger.filters')
    .filter('trustAsHtml', _trustAsHtml);

  _trustAsHtml.$inject = ['$sce'];
  function _trustAsHtml($sce) {
    return (markup) => $sce.trustAsHtml(markup);
  }
})();
