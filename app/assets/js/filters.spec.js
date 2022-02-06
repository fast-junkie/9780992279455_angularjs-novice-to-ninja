describe('Filters Tests', () => {
  beforeEach(module('spBlogger.filters'));
  describe('Permalink Filter Test', () => {
    it('Should Replace all spaces with hyphens and convert to lowercase', inject((permalinkFilter) => {
      expect(permalinkFilter('I had 3 spaces')).toEqual('i-had-3-spaces');
      expect(permalinkFilter('I had 7 spaces and a special character!'))
        .toEqual('i-had-7-spaces-and-a-special-character');
    }));
  });

  describe('Wordcount Filter Test', () => {
    it('Should count the number of words as 3', inject((wordCountFilter) => {
      expect(wordCountFilter('Three words here')).toEqual(3);
    }));
  });
});
