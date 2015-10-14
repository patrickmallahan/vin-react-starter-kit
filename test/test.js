import assert from 'assert';
import mathHelper from '../mathHelper';

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
    it('should be able to use mathHelper classs', function() {
      assert.equal(mathHelper.roundNumber(1,0), 1);
    });
  });
});
