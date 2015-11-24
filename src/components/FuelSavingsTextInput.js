import React, { Component, PropTypes } from 'react';

class FuelSavingsTextInput extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			value: this.props.value || ''
		};
	}

	handleChange(e) {
		this.setState({ value: e.target.value });
		this.props.onChange(this.props.name, e.target.value);
	}

	render() {
		return (
			<input className='small'
				type='text'
				placeholder={this.props.placeholder}
				value={this.state.value}
				onChange={this.handleChange.bind(this)} />
		);
	}
}

// FuelSavingsTextInput.propTypes = {
//   value: PropTypes.any.isRequired
// };

export default FuelSavingsTextInput;