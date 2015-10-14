import FuelSavingsCalculator from './components/FuelSavingsCalculator';
import React from 'react';
import ReactDom from 'react-dom'; //this pulls in dup React instance for some reason, so commenting out for now.

React.render(<FuelSavingsCalculator />, document.getElementById('app'));
