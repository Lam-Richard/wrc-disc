import React from 'react';
import Modal from './modal';
import './result.css';

const Result = ({job, modal, setModal}) => {
    const thisModal = <Modal job={job} setModal={setModal} modal={modal}></Modal>;
    return (
      <div className="result" onClick={() => setModal(thisModal)}>
        <br></br>
        <div className="description">
          {job.company}: {job.location}, {job.shift == 0 ? "Day" : "Night"}
        </div>
      </div>
    )
  }

export default Result;