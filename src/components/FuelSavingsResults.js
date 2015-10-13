import React from 'react';

class FuelSavingsResults extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let savingsExist = this.props.savings.monthly.replace('$', '') > 0;
        let savingsClass = savingsExist ? 'savings' : 'loss';
        let resultLabel = savingsExist ? 'Savings' : 'Loss';

        return (
            <table>
                <tbody>
                    <tr>
                        <td className="fuel-savings-label">{resultLabel}</td>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Monthly</td>
                                        <td>1 Year</td>
                                        <td>3 Year</td>
                                    </tr>
                                    <tr>
                                        <td className={savingsClass}>{this.props.savings.monthly}</td>
                                        <td className={savingsClass}>{this.props.savings.annual}</td>
                                        <td className={savingsClass}>{this.props.savings.threeYear}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default FuelSavingsResults;