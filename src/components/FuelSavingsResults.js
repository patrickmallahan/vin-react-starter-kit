import React from 'react';

class FuelSavingsResults extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
           <div>
                <div className="green">
                    <table className="fuel-savings">
                        <tbody>
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td><strong>Total Savings</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <table id="fuel-savings">
                    <tbody>
                        <tr>
                            <td>Monthly</td>
                            <td>1 Year</td>
                            <td>3 Year</td>
                        </tr>
                        <tr>
                            <td>{this.props.savings.monthly}</td>
                            <td>{this.props.savings.yearly}</td>
                            <td>{this.props.savings.threeYear}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FuelSavingsResults;