import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      name,
      type,
      testid,
      value,
      onChange,
    } = this.props;
    return (
      <label htmlFor={ name }>
        { name }
        <input
          id={ name }
          name={ name }
          type={ type }
          data-testid={ testid }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  testid: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Input;
