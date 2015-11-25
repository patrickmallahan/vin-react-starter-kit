import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FuelSavingsCalculatorForm from '../components/FuelSavingsCalculatorForm';
import * as FuelSavingsActions from '../actions/fuelSavingsActions';

class FuelSavingsCalculatorApp extends React.Component {
  render() {
    const { fuelSavings, dispatch } = this.props;
    const actions = bindActionCreators(FuelSavingsActions, dispatch);

    return (
      <div>
        <FuelSavingsCalculatorForm settings={fuelSavings} actions={actions} />
      </div>
    );
  }
}

FuelSavingsCalculatorApp.propTypes = {
  actions: PropTypes.object,
  fuelSavings: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

function select(state) {
  return state;
}

export default connect(select)(FuelSavingsCalculatorApp);
