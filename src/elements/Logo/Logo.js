import React from 'react';
import classes from './Logo.module.css';

function Logo(props) {
  // eslint-disable-next-line react/prop-types
  const { colorScheme, label } = props;
  const logoWithColorScheme = [
    classes.Logo,
    colorScheme === 'dark' ? classes.Dark : classes.Light
  ];
  return <h1 className={logoWithColorScheme.join(' ')}>{label}</h1>;
}

export default Logo;
