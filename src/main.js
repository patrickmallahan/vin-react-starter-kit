import FuelSavingsCalculator from './components/FuelSavingsCalculator';
import React from 'react';
import ReactDom from 'react-dom'; 

if (typeof document !== 'undefined') { //necessary to keep Mocha from bombing
	React.render(<FuelSavingsCalculator />, document.getElementById('app'));
}