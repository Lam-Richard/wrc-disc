import './App.css';
import React, { useState, useEffect } from 'react';
import { jobRequirements, criteria } from './utils/data';
import ResultScreen from './screens/ResultScreen/ResultScreen.js';
import SearchScreen from './screens/SearchScreen/SearchScreen.js';

function App() {
  const [page, setPage] = useState("ResultScreen");
  const [results, setResults] = useState(jobRequirements);

  function backToSearch () {
    setPage("SearchScreen");
  }

  const screens = {
    "SearchScreen": 
      <SearchScreen 
        setResults={setResults} 
        page={page} 
        jobRequirements={jobRequirements}
        criteria={criteria}
        results={results} 
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
