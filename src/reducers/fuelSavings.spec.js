import fuelSavings from './fuelSavings';
import {saveFuelSavings} from '../actions/fuelSavingsActions';
import chai from 'chai';

chai.should();


describe('Fuel Savings Reducer', () => {
  describe('Save Fuel Savings', () => {
    it('Updates dateModified', () => {
      //arrange
      var stateBefore = {
        dateModified: 'dummy value'
      }

      //act
      var stateAfter = fuelSavings(stateBefore, saveFuelSavings(stateBefore));

      //assert
      stateBefore.should.not.equal(stateAfter);
    });
  });
});
