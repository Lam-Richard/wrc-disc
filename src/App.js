import logo from './logo.svg';
import './App.css';

/*
Create a bunch of dummy data and list them and show them in a list
*/

/*
shift: can be either "D" "N", 0 or 1.
englishLevel: 1-5 -> maps to e.g. profiient, not etc.
location: a string
*/

//Object.keys(<object name>)

const jobRequirements = {
  walmart: {
    company: 'Walmart',
    englishLevel: 3,
    location: "Chicago",
    shift: 0
  },
  cvs: {
    company: 'CVS',
    englishLevel: 4,
    location: "Chicago",
    shift: 0,
  },
  walgreens: {
    company: 'Walgreens',
    englishLevel: 2,
    location: "Evanston",
    shift: 1
  }
};

const Listings = () => {
  return (
    Object.values(jobRequirements).map((job)=> {
      return (
        <div style={{border: "red 1px solid", 
        height: 50, width: 300, marginBottom: '5px',
        justifyContent: 'center',
        alignItems: 'center',

        
        }}>
          <div style={{textAlign: 'center'}}>{job.company}: {job.location}, {job.shift == 0 ? "Day" : "Night"}</div>
        </div>
      )
    })
  )
}


function App() {
  return (
    <div  className="App">
      <Listings></Listings>
    </div>
  );
}

export default App;
