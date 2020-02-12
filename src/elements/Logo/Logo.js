import React from 'react'
import classes from './Logo.module.css';

function Logo(props) {
  let logoWithColorScheme = [
    classes.Logo,
    (props.colorScheme === 'dark') ? classes.Dark : classes.Light
  ];
  return (
    <h1 className={logoWithColorScheme.join(' ')} onClick={props.clicked}>
      {props.label}
    </h1>
  )
}

export default Logo
