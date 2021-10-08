import 'LoadingSpinner.css';
import React from 'react';

const LoadingSpinner = (): JSX.Element => (
  <div className='lds-ring'>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default LoadingSpinner;
