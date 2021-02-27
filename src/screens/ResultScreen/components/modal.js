import React, { useState, useEffect } from 'react';
import './modal.css';

// Modal window to display information about a specific job
const Modal = ({job, modal, setModal}) => {

    return (  
     <div className="modal">
        <div className="modal-content">
          <div>{job.company}: {job.location}, {job.shift == 0 ? "Day" : "Night"}</div>
          <div className="modal-close" onClick={() => setModal(null)}>Close</div>
        </div>
      </div>
    )
  }

export default Modal;