import React from 'react';
import classes from './Icon.module.css';
import PropTypes from 'prop-types';

const Icon = (props) => {
  const type = props.type || 'Preview';
  return(
    <img className={classes.Icon} 
      // eslint-disable-next-line no-undef
      src={require(`../../assets/images/${type}.svg`)} 
      alt={type} />
  );
}

Icon.propTypes = {
  type: PropTypes.string
}


export default Icon;
