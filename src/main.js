import React from 'react';
import {render} from 'react-dom';
import Root from './containers/Root';

if (typeof document !== 'undefined') { //necessary to keep Mocha from bombing
	render(<Root />, document.getElementById('app'));
}