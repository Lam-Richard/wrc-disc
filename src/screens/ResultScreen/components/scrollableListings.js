import React from 'react';
import './scrollableListings.css';
import Result from './result';

const ScrollableListings = ({jobRequirements, modal, setModal}) => {
    return (
    <div className="scroll-box">
      <br></br>
      {Object.values(jobRequirements).map((job)=> {
          return (
            <Result modal={modal} setModal={setModal} job={job} key={job}/>
          )
        })}
    </div>
    )
}

export default ScrollableListings;