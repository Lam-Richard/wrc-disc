import React from 'react';
import './field.css';

const Field = ({question, query, setQuery}) => {
    function handleChange (e) {
      setQuery(Object.assign(query, {[question]: e.target.value}));
    }
  
    return (
      <div className="field">
        <div className="question">{question}</div>
          <input 
            type="text" 
            className="answer" 
            placeholder="Type something..." 
            onChange={handleChange}>
          </input>
      </div>
    )
  }

export default Field;