import React, { useState, useEffect } from 'react';
import './SearchScreen.css';
import Field from './components/field';

  const SearchScreen = ({setResults, setPage, jobRequirements, criteria}) => {
    const [query, setQuery] = useState({});
  
    useEffect(()=> {
      criteria.map(question => {
        setQuery(Object.assign(query, {[question]: ""}))
      })
      return;
    },[]);
  
    function handleSubmit () {
      
      let searchResults = {};
      let allEmpty = 0;
      for (let i in criteria) {
        let que = query[[criteria[i]]];
        if (que != "") {
            allEmpty += 1;
          let entries = Object.entries(jobRequirements);
          for (const [key, value] in entries) {
            let title = entries[key][0];
            let content = jobRequirements[entries[key][0]];
            if (que == content[criteria[i]]) {
              Object.assign(searchResults, {[title]: content});
            }
          }
        }
      }
      if (allEmpty == 0) {
        setResults(jobRequirements);
      } 
      else {
        setResults(searchResults);
      }

      console.log(allEmpty);

      setPage("ResultScreen");
    }
  
    return (
      <div className="search-screen">
        <div className="banner">
          World Relief Job Match
        </div>
        <div className="white-box">
            {criteria.map(question => 
              <Field 
                question={question} 
                setQuery={setQuery} 
                query={query} 
                key={question}
              />
            )}
        </div>
        <div
          onClick={handleSubmit} 
          className="submit-button">
            Submit
        </div>
      </div>
    )
  }

  export default SearchScreen;