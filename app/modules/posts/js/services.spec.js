describe('postService Test', () => {
  beforeEach(module('spBlogger.posts.services'));

  it('postService should return 4 post objects', inject((postService) => {
    expect(postService.getAll().length).toBe(4);
  }));
  it('postService should return one object for id 2', inject((postService) => {
    const post = postService.getPostById(2);
    expect(post).not.toBe(undefined);
  }));
});
