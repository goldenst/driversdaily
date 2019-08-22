import React, { Fragment } from 'react';
import preloader from './preloader.gif'

const Preloader = () => {
  return (
    <Fragment>
      <img src={preloader} 
            alt='Loading...'
            style={{width: '200px', margin: 'auto', display: 'block'}}
            />
    </Fragment>
  )
}

export default Preloader
