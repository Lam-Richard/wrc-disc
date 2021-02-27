/* 
    shift: can be either "D" "N", 0 or 1.
    englishLevel: 1-5 -> maps to e.g. profiient, not etc.
    location: a string
*/

export const jobRequirements = {
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

  export const criteria = ["englishLevel", "location",  "shift", "sector"];