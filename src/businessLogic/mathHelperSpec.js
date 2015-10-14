import MathHelper from './MathHelper';
import {expect} from 'chai';

describe('Math Helper', function () {
	describe('Round Number', function() {
		it('should return 0 when passed null', function() {
			expect(MathHelper.roundNumber(null)).to.equal('');
		});

		it('should round up when passed 1.55555 rounded to 2 digits', function() {
			expect(MathHelper.roundNumber(1.55555, 2)).to.equal(1.56);
		});

		it('should round up when passed -1.55555 rounded to 2 digits', function() {
			expect(MathHelper.roundNumber(-1.55555, 2)).to.equal(-1.56);
		});

		it('should round up when passed -1.55555 rounded to 2 digits', function() {
			expect(MathHelper.roundNumber(-1.55555, 2)).to.equal(-1.56);
		});
	});
});
