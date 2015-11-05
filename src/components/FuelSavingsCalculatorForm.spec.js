import chai from 'chai';
import FuelSavingsCalculatorForm from './FuelSavingsCalculatorForm';

chai.should();

describe('Fuel Savings Calculator Component', () => {
	describe('necessaryDataIsEntered', () => {
		it('returns false when necessary data isn\'t entered', () => {
			var form = new FuelSavingsCalculatorForm();
			form.state.newMpg = 20;
			form.necessaryDataIsEntered().should.equal(false);
		});

		it('returns true when necessary data is entered', () => {
			var form = new FuelSavingsCalculatorForm();
			form.state.newMpg = 20;
			form.state.tradeMpg = 10;
			form.state.newPpg = 1.50;
			form.state.tradePpg = 1.50;
			form.state.milesDriven = 100;
			form.necessaryDataIsEntered().should.equal(true);
		});
	});
});
