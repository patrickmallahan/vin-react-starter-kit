import React, {PropTypes} from 'react';
import FuelSavingsResults from './FuelSavingsResults';
import FuelSavingsTextInput from './FuelSavingsTextInput';

class FuelSavingsCalculatorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            milesDrivenTimeframe: this.props.milesDrivenTimeframe
        };
    }

    fuelSavingsKeypress(name, value) {
        this.props.actions.calculateFuelSavings(this.props, name, value);
    }

    onTimeframeChange(e) {
        this.setState({ milesDrivenTimeframe: e.target.value });
        this.props.actions.calculateFuelSavings(this.props, 'milesDrivenTimeframe', e.target.value);
    }

    render() {
        let settings = this.props.settings;

        return (
            <div>
                <h2>Fuel Savings Analysis</h2>
                <table> 
                    <tbody>
                        <tr>
                            <td><label>New Vehicle MPG</label></td>
                            <td><FuelSavingsTextInput onChange={this.fuelSavingsKeypress.bind(this)} name="newMpg" value={settings.newMpg} /></td>
                        </tr>
                        <tr>
                            <td><label>Trade-in MPG</label></td>
                            <td><FuelSavingsTextInput onChange={this.fuelSavingsKeypress.bind(this)} name="tradeMpg" value={settings.tradeMpg} /></td>
                        </tr>
                        <tr>
                            <td><label>New Vehicle price per gallon</label></td>
                            <td><FuelSavingsTextInput onChange={this.fuelSavingsKeypress.bind(this)} name="newPpg" value={settings.newPpg} /></td>
                        </tr>
                        <tr>
                            <td><label>Trade-in price per gallon</label></td>
                            <td><FuelSavingsTextInput onChange={this.fuelSavingsKeypress.bind(this)} name="tradePpg" value={settings.tradePpg} /></td>
                        </tr>
                        <tr>
                            <td><label>Miles Driven</label></td>
                            <td>
                                <FuelSavingsTextInput onChange={this.fuelSavingsKeypress.bind(this)} name="milesDriven" value={settings.milesDriven} /> miles per
                                <select name="milesDrivenTimeframe" name="milesDrivenTimeframe" onChange={this.onTimeframeChange.bind(this)} value={this.state.milesDrivenTimeframe}>
                                    <option value="week">Week</option>
                                    <option value="month">Month</option>
                                    <option value="year">Year</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><label>Date Modified</label></td>
                            <td>{ settings.dateModified }</td>
                        </tr>
                    </tbody>
                </table>

                <hr/>

                { settings.necessaryDataIsProvidedToCalculateSavings ? <FuelSavingsResults savings={settings.savings} /> : null }
                <input type="submit" value="Save" onClick={this.props.actions.saveFuelSavings.bind(settings)} />
            </div>
        );
    }
}

FuelSavingsCalculatorForm.propTypes = {
    settings: PropTypes.object.isRequired
};

export default FuelSavingsCalculatorForm;