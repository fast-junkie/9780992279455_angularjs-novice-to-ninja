beforeEach(module('spBlogger.directives'));
beforeEach(module('spBlogger.services'));
beforeEach(module('templates'));

describe('Directive Test', () => {
  let elem;
  let scope;
  beforeEach(inject(($rootScope, $compile) => {
    const template = '<comments post-instance="singlePost"></comments>';
    elem = angular.element(template);

    scope = $rootScope;
    $compile(elem)(scope);
    scope.$digest();
  }));

  it('Should initialize comments div with 2 comments', inject(() => {
    scope.singlePost = { comments: [{ content: 'test', author: 'test' }, { content: 'test1', author: 'test1' }] };
    console.info(elem);
    expect(elem/* .find('.single-comment') */.length).toBe(1);
  }));
});
