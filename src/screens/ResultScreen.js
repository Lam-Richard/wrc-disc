import './ResultScreenStyle.css';

/*
Create a bunch of dummy data and list them and show them in a list
*/

/*
shift: can be either "D" "N", 0 or 1.
englishLevel: 1-5 -> maps to e.g. profiient, not etc.
location: a string
*/

//Object.keys(<object name>)



const Result = ({job}) => {
  return (
    <div className="result">
            <br></br>
            <div style={{textAlign: 'center', justifyContent: 'center', alignItems: 'center', margin: '0 auto'}}>
              {job.company}: {job.location}, {job.shift == 0 ? "Day" : "Night"}
            </div>
    </div>
  )
}

const ScrollableListings = ({jobRequirements}) => {
  return (
  <div className="scroll-box">
    <br></br>
    {Object.values(jobRequirements).map((job)=> {
        return (
          <Result job={job} key={job}/>
        )
      })}
  </div>
  )
}

const Banner = () => {
  return (
    <div className="banner">
      Results
    </div>
  )
}

const Reset = ({back}) => {

  return (
    <div className="reset" onClick={back}>
      Reset
    </div>
  )
}

const ResultsScreen = ({jobRequirements, back}) => {
  console.log("jobRequirements:", jobRequirements);
  return (
    <div className="resultscreen" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      <Banner></Banner>
      <div style={{width: '50vw'}}>
        
        { Object.keys(jobRequirements).length > 0 ?
          <ScrollableListings jobRequirements={jobRequirements}></ScrollableListings>
          : <div className="no-match">No matches found!</div>
        }

      </div>
      <Reset back={back}></Reset>
    </div>
  )
}

export default ResultsScreen;
