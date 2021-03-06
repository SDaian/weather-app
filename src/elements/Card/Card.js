/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { ClipLoader } from 'react-spinners';
import dateformat from 'dateformat';
import classes from './Card.module.css';
import Icon from '../Icon/Icon';

const Card = props => {
  const {
    // eslint-disable-next-line react/prop-types
    weatherDetails: { description: type, name: city, temperature }
  } = props;
  const today = new Date();
  return (
    <div className={classes.cardWrapper}>
      <div className={classes.imageWrapper}>
        {type === 'Loading' ? (
          <ClipLoader color="#123abc" size={100} />
        ) : (
          <Icon type={type} />
        )}
      </div>
      {type !== 'Preview' && type !== 'Loading' && (
        <div className={classes.infoWrapper}>
          <h2>{city}</h2>
          <div className={classes.infoDetails}>
            <h3 className={classes.infoTemperature}>
              {Math.round(temperature)}
              <span className={classes.symbol}>°</span>
            </h3>
            <h3 className={classes.infoType}>{type}</h3>
          </div>
          <div className={classes.dateWrapper}>
            <h4>{dateformat(today, 'dddd, mmmm dd')} </h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
