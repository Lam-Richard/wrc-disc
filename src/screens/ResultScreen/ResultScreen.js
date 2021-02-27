import React, { useState } from 'react';
import './ResultScreen.css';
import Banner from './components/banner';
import Reset from './components/reset';
import ScrollableListings from './components/scrollableListings';

const ResultScreen = ({jobRequirements, back}) => {
  const [modal, setModal] = useState(null);

  return (
    <div className="resultscreen">
      { modal 
      ?  
        modal 
      :
        <React.Fragment>
          <Banner></Banner>
            { Object.keys(jobRequirements).length > 0 
            ?
              <div className="white-box">
                <ScrollableListings 
                  jobRequirements={jobRequirements} 
                  modal={modal} 
                  setModal={setModal}>
                </ScrollableListings>
              </div>
            : 
              <div className="no-match">No matches found!</div>
            }
          <Reset back={back}></Reset>
        </React.Fragment>
      }
    </div>
  )
}

export default ResultScreen;
