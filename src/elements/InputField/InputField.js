/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import classes from './InputField.module.css';
import assetMapping from '../../assets/assetMapping.json';

const InputField = props => {
  const { name, label, type, placeholder, value, handleChange, error } = props;
  return (
    <div className={classes.InputFieldWrapper}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        style={error ? { borderBottomColor: assetMapping.colors.error } : null}
        required
      />
    </div>
  );
};

InputField.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  error: PropTypes.bool
};

export default InputField;
