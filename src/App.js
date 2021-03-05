import './App.css';
import React, { useState, useEffect } from 'react';
import { jobRequirements, criteria } from './utils/data';
import ResultScreen from './screens/ResultScreen/ResultScreen.js';

// Input field for a given job characteristic
const Field = ({question, query, setQuery}) => {
  function handleChange (e) {
    setQuery(Object.assign(query, {[question]: e.target.value}));
  }

  function parseField (field) {
    let fieldParsed = [];

    for(let i = 0; i < field.length; i++) {
      if (field[i] == field[i].toLowerCase()) {
        fieldParsed.push(field[i]);
      } else {
        fieldParsed.push(" ");
        fieldParsed.push(field[i]);
      }
    }

    fieldParsed[0] = field[0].toUpperCase()
    return fieldParsed.join("")
  }


  return (
    <div className="field">
      <div className="question">{parseField(question)}</div>
        <input 
          type="text" 
          className="answer" 
          placeholder="Type something..." 
          onChange={handleChange}>
        </input>
    </div>
  )
}

// Initial landing screen where user inputs job characteristics
const SearchScreen = ({results, setResults, page, setPage}) => {
  const [query, setQuery] = useState({});

  useEffect(()=> {
    criteria.map(question => {
      setQuery(Object.assign(query, {[question]: ""}))
    })
    return;
  },[]);

  // Go here once the user enters job data & searches for job matches
  function handleSubmit () {
    let searchResults = {};

    // Error catching to prevent blank form submissions
    let blankSubmission = true;

    // Determine non-empty input fields
    let nonEmpty = []

    for (let i in criteria) {
      let que = query[[criteria[i]]];
      if (que != "") {
        nonEmpty.push(criteria[i]);
      }
    }

    // Determine if form submission was blank
    if (nonEmpty.length != 0) {
      blankSubmission = false
    }

    // Loop over each criteria & if all categories match, add to results
    let entries = Object.entries(jobRequirements);
    for (const [key, value] in entries) {
      let title = entries[key][0];
      let content = jobRequirements[entries[key][0]];

      let passed = true;
      for (let i in nonEmpty) {
        let que = query[[nonEmpty[i]]]
        let jobField = content[[nonEmpty[i]]]

        // Dispatch based on criteria (some don't need strict equality)
        if (nonEmpty[i] == "englishLevel") {
          if (que < jobField) {
            passed = false;
            break;
          }
        } else if (que == "location" || que == "sector") {
          if (que.toLowerCase() != jobField.toLowerCase()) {
            passed = false;
            break;
          }
        } else {
          if (que != jobField) {
            passed = false;
            break;
          }
        }
      }

      // Only add job if it matches all input fields
      if (passed) {
        Object.assign(searchResults, {[title]: content});
      }
    }

    // Dispatch based on whether form submission was blank or not
    if (blankSubmission) {
      setResults(jobRequirements);
    } else {
      setResults(searchResults);
    }

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

// Primary application handler; toggles between search & results pages as needed
function App() {
  const [page, setPage] = useState("ResultScreen");
  const [results, setResults] = useState(jobRequirements);

  function backToSearch () {
    setPage("SearchScreen");
  }

  const screens = {
    "SearchScreen": 
      <SearchScreen 
        results={results} 
        setResults={setResults} 
        page={page} 
        setPage={setPage}>
      </SearchScreen>,
    "ResultScreen":  
      <ResultScreen 
        jobRequirements={results} 
        back={backToSearch}> 
      </ResultScreen>,
  }

  return (
    screens[page]
  );
}

export default App;
