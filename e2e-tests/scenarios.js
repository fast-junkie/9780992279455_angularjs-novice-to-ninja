/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('The Single Page Blogger E2E Test', () => {
  it('Should have 4 posts', () => {
    browser.get('index.html');
    const posts = element.all(by.repeater('post in posts'));
    expect(posts.count()).toBe(4);
  });
});
