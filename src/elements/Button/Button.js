/* eslint-disable react/button-has-type */
import React from 'react';

import classes from './Button.module.css';

const Button = props => {
  // eslint-disable-next-line react/prop-types
  const { position, type, name, clicked, children } = props;
  const buttonClasses = [
    classes.ButtonWrapper,
    position === 'onForm' ? classes.FormButtonWrapper : null
  ];
  return (
    <div className={buttonClasses.join(' ')}>
      <button type={type} name={name} onClick={clicked}>
        {children}
      </button>
    </div>
  );
};

export default Button;
