import React from 'react';
import './reset.css';

const Reset = ({back}) => {
    return (
      <div className="reset" onClick={back}>
        Reset
      </div>
    )
  }

export default Reset;