import React from 'react'
import classes from './Footer.module.css';
import Logo from '../../elements/Logo/Logo';

export default function Footer() {
  return (
    <div className={classes.Wrapper}>
      <Logo colorScheme='dark' label='Designed by DS'/>
      <div className={classes.Separator}></div>
    </div>
  )
}
