import chai from 'chai';
import cheerio from 'cheerio';
import FuelSavingsResults from './FuelSavingsResults';
import React from 'react';
import ReactDOMServer from 'react/lib/ReactDOMServer';

chai.should();

describe('Fuel Savings Calculator Results Component', () => {
	describe('Savings label', () => {
		it('displays as savings when savings exist', () => {
			var props = {
				savings: {
					monthly: '10',
					annual: '120',
					threeYear: '360'
				}
			};

			var sut = React.createElement(FuelSavingsResults, props);
			var html = ReactDOMServer.renderToStaticMarkup(sut);
			let $ = cheerio.load(html);
			var fuelSavingsLabel = $('.fuel-savings-label').html();
			fuelSavingsLabel.should.equal('Savings');
		});

		it('display as loss when savings don\'t exist', () => {
			var results = new FuelSavingsResults({});
			
		});
	});
});
