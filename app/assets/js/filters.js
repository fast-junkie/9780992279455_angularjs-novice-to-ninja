(() => {
  angular.module('spBlogger.filters', []);

  angular
    .module('spBlogger.filters')
    .filter('trustAsHtml', _trustAsHtml);
  _trustAsHtml.$inject = ['$sce'];
  function _trustAsHtml($sce) {
    return (markup) => $sce.trustAsHtml(markup);
  }

  angular
    .module('spBlogger.filters')
    .filter('permalink', _permalink);
  _permalink.$inject = [];
  function _permalink() {
    return (title) => (title === undefined ? '' : (title).toLowerCase().replace(/[\s]/g, '-').replace(/[^a-zA-Z0-9_-]/g, ''));
  }

  angular
    .module('spBlogger.filters')
    .filter('wordCount', _wordCount);
  _wordCount.$inject = [];
  function _wordCount() {
    return (input) => (input === undefined ? 0 : input.split(/\s/g).length);
  }
})();
