/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable react/require-default-props */
import React from 'react';
import classes from './Icon.module.css';

const Icon = props => {
  const { type } = props || 'Preview';
  return (
    <img
      className={classes.Icon}
      src={require(`./../../assets/images/ + ${type} + .svg`)}
      alt={type}
    />
  );
};

export default Icon;
