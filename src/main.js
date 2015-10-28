import FuelSavingsCalculator from './components/FuelSavingsCalculator';
import React from 'react';
import {render} from 'react-dom'; 

if (typeof document !== 'undefined') { //necessary to keep Mocha from bombing
	render(<FuelSavingsCalculator />, document.getElementById('app'));
}