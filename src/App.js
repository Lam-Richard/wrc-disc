import ResultsScreen from './screens/ResultScreen.js';
import React, { useState, useEffect } from 'react';

import './App.css';


const jobRequirements = {
  walmart: {
    company: 'Walmart',
    englishLevel: 3,
    location: "Chicago",
    shift: 0,
    hourly: 13,
    sector: 'retail',

  },
  cvs: {
    company: 'CVS',
    englishLevel: 4,
    location: "Chicago",
    shift: 0,
    hourly: 12,
    sector: 'healthcare',


  },
  walgreens: {
    company: 'Walgreens',
    englishLevel: 2,
    location: "Evanston",
    shift: 1,
    hourly: 15,
    sector: 'healthcare',
  },
  traderjoes: {
    company: 'Trader Joes',
    englishLevel: 5,
    location: "Wilmette",
    shift: 1,
    hourly: 12,
    sector: 'retail',

  },
  petsmart: {
    company: 'Pet Smart',
    englishLevel: 4,
    location: "Chicago",
    shift: 0,
    hourly: 15,
    sector: 'retail',


  },
  starbucks: {
    company: 'Starbucks',
    englishLevel: 3,
    location: "Chicago",
    shift: 0,
    hourly: 10,
    sector: 'restaurant',
  }
  
};

const criteria = ["englishLevel", "location",  "shift", "sector"];


const Field = ({question, query, setQuery}) => {
  function handleChange (e) {
    setQuery(Object.assign(query, {[question]: e.target.value}));
  }

  return (
    <div className="field">
      <div className="question">{question}</div>
      <input type="text" className="answer" placeholder="Type something..." onChange={handleChange}></input>
    </div>
  )
}

const SearchScreen = ({results, setResults, page, setPage}) => {
  const [query, setQuery] = useState({});

  useEffect(()=> {
    criteria.map(question => {
      setQuery(Object.assign(query, {[question]: ""}))
    })
    console.log(query);
    return;
  },[]);

  function handleSubmit () {
    
    let searchResults = {};
    for (let i in criteria) {
      let que = query[[criteria[i]]];
      if (que != "") {
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
    setResults(searchResults);
    setPage("ResultsScreen");
  }


  return (
    <div className="search-screen">
      <div className="banner">
        World Relief Job Match
      </div>
      <div className="white-box">
          {criteria.map(question => <Field question={question} setQuery={setQuery} query={query} key={question}/>)}
      </div>
      <div onClick={handleSubmit} className="submit-button">Submit</div>
    </div>
  )
}



function App() {
  const [page, setPage] = useState("SearchScreen");
  const [results, setResults] = useState(jobRequirements);

  function backToSearch () {
    setPage("SearchScreen");
  }

  const screens = {
    "SearchScreen": <SearchScreen results={results} setResults={setResults} page={page} setPage={setPage}></SearchScreen>,
    "ResultsScreen":  <ResultsScreen jobRequirements={results} back={backToSearch}></ResultsScreen>,
  }

  return (
    screens[page]
  );
}

export default App;
