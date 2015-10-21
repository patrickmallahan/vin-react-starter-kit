import chai from 'chai';
import FuelSavingsCalculator from './FuelSavingsCalculator';

chai.should();

describe('Fuel Savings Calculator Component', () => {
	describe('necessaryDataIsEntered', () => {
		it('returns false when necessary data isn\'t entered', () => {
			var calc = new FuelSavingsCalculator();
			calc.state.newMpg = 20;
			calc.necessaryDataIsEntered().should.equal(false);
		});

		it('returns true when necessary data is entered', () => {
			var calc = new FuelSavingsCalculator();
			calc.state.newMpg = 20;
			calc.state.tradeMpg = 10;
            calc.state.newPpg = 1.50;
           	calc.state.tradePpg = 1.50;
            calc.state.milesDriven = 100;
			calc.necessaryDataIsEntered().should.equal(true);
		});
	});
});
