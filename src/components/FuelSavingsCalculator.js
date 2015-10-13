import React from 'react';
import FuelSavingsResults from './FuelSavingsResults';
import FuelSavingsCalculatorLogic from '../businessLogic/FuelSavingsCalculatorLogic';

class FuelSavingsCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.updateState = this.updateState.bind(this); //Avoids having to manually bind to this below. Here's why: https://github.com/goatslacker/alt/issues/283
        this.state = {
            newMpg: '',
            tradeMpg: '',
            newPpg: '',
            milesDriven: '',
            milesDrivenTimeframe: 'week',
            invalidNewMpgVisible: false,
            invalidTradeMpgVisible: false,
            invalidMilesDrivenVisible: false,
            displayResults: false,
            savings: {
                monthly: 0,
                annual: 0,
                threeYear: 0
            }
        };
    }
    //Generic change handler
    updateState(event) {
        let field = event.target.name;
        let value = event.target.value;
        this.state[field] = value;
        let necessaryDataIsEntered = this.necessaryDataIsEntered();
        this.state.displayResults = necessaryDataIsEntered;
        if (necessaryDataIsEntered) {
            this.calculateSavings();
        }
        return this.setState({field: value});
    }
    necessaryDataIsEntered() {
        return this.state.newMpg
            && this.state.tradeMpg
            && this.state.newPpg
            && this.state.tradePpg
            && this.state.milesDriven
            && this.state.milesDrivenTimeframe;
    }
    calculateSavings() {
        this.state.savings = FuelSavingsCalculatorLogic.calculateSavings(this.state);
        this.setState({ savings: this.state.savings });
    }
    render() {
        return (
            <div>
                <h2>Fuel Savings Analysis</h2>
                <table>
                    <tbody>
                        <tr>
                            <td><label>New Vehicle MPG</label></td>
                            <td>
                                <input type="text" className="small" name="newMpg" onChange={this.updateState} value={this.state.newMpg} />
                                { this.state.invalidNewMpgVisible ? <span className="error">Invalid MPG</span> : null }
                            </td>
                        </tr>
                        <tr>
                            <td><label>Trade-in MPG</label></td>
                            <td>
                                <input type="text" className="small" name="tradeMpg" onChange={this.updateState} value={this.state.tradeMpg} />
                                { this.state.invalidTradeMpgVisible ? <span className="error">Invalid MPG</span> : null }
                            </td>
                        </tr>
                        <tr>
                            <td><label>New Vehicle price per gallon</label></td>
                            <td>
                                <input type="text" className="small" name="newPpg" onChange={this.updateState} value={this.state.newPpg} />
                                { this.state.invalidNewPpgVisible ? <span className="error">Invalid price per gallon</span> : null }
                            </td>
                        </tr>
                        <tr>
                            <td><label>Trade-in price per gallon</label></td>
                            <td>
                                <input type="text" className="small" name="tradePpg" onChange={this.updateState} value={this.state.tradePpg} />
                                { this.state.invalidTradePpgVisible ? <span className="error">Invalid price per gallon</span> : null }
                            </td>
                        </tr>
                        <tr>
                            <td><label>Miles Driven</label></td>
                            <td>
                                <input type="text" className="small" name="milesDriven" onChange={this.updateState} value={this.state.milesDriven} /> miles per
                                <select name="milesDrivenTimeframe" onChange={this.updateState} value={this.state.milesDrivenTimeframe}>
                                    <option value="week">Week</option>
                                    <option value="month">Month</option>
                                    <option value="year">Year</option>
                                </select>
                                { this.state.invalidMilesDrivenVisible ? <span className="error">Enter miles driven during selected timeframe.</span> : null }
                            </td>
                        </tr>
                    </tbody>
                </table>

                { this.state.displayResults ? <FuelSavingsResults savings={this.state.savings} /> : null }
            </div>
        );
    }
}

export default FuelSavingsCalculator;