import FuelSavingsCalculatorForm from './components/FuelSavingsCalculatorForm';
import React from 'react';
import {render} from 'react-dom'; 

if (typeof document !== 'undefined') { //necessary to keep Mocha from bombing
	render(<FuelSavingsCalculatorForm />, document.getElementById('app'));
}