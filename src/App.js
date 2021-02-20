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

const Result = ({job}) => {
  return (
    <div style={{
          height: 50,
          borderColor: 'transparent',
          margin: "0 auto", 
          marginRight: 30,
          marginBottom: '20px',
          justifyContent: 'center', 
          alignItems: 'center',
          borderRadius: 20,
          backgroundColor: '#007cba',
          boxShadow: '5px 5px 3px 3px rgba(0,0,0,0.2)',
          }}>
            <br></br>
            <div style={{textAlign: 'center', justifyContent: 'center', alignItems: 'center', margin: '0 auto'}}>
              {job.company}: {job.location}, {job.shift == 0 ? "Day" : "Night"}
            </div>
    </div>
  )
}

const ScrollableListings = () => {
  return (
  <div className="style-2">
    {Object.values(jobRequirements).map((job)=> {
        return (
          <Result job={job}/>
        )
      })}
  </div>
  )
}

const Listings = () => {
  return (
    <div className="Listings" style={{
      margin: '0 auto',
      backgroundColor: 'white', 
      width: '50vw',
      padding: 20,
      borderRadius: 30,
      borderColor: 'transparent',
      boxShadow: '10px 10px 5px 5px rgba(0,0,0,0.2)',
    }}>
      
    </div>
  )
}
const Banner = () => {
  
  
  return (
    <div style={{textAlign: 'center', fontSize: 100, marginBottom: 30, marginTop: 30}}>
      Results
    </div>
  )
  
  
}

const Reset = () => {
  return (
    <div className="Reset" style={{marginTop: 50}}>Reset</div>
  )
}


function App() {
  return (
    <div className="App" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      <Banner></Banner>
      <div style={{margin: '0 auto',
      backgroundColor: 'white', 
      width: '50vw',
      padding: 20,
      borderRadius: 30,
      borderColor: 'black',
    
      boxShadow: '10px 10px 5px 5px rgba(0,0,0,0.2)',}}>
      <ScrollableListings></ScrollableListings>
      </div>
      <Reset></Reset>
    </div>
  );
}

export default App;
