import React from 'react'
import classes from './InputField.module.css';
import assetMapping from '../../assets/assetMapping.json';
import PropTypes from 'prop-types';

const InputField = (props) => {
  return (
    <div className={classes.InputFieldWrapper}>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleChange}
        style={(props.error) ? {'borderBottomColor': assetMapping.colors.error} : null}
        required />
    </div>
  );
}

InputField.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string, 
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  error: PropTypes.bool
}

export default InputField;