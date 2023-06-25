
import { GET_COUNTRY_NAME, GET_COUNTRY, FILTER_BY_TOUR, FILTER_BY_CONTINENT } from "./actions";

const initialState = {
  filteredCountries: [],
  countries: [],
  
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY_NAME:
        
      return {
        ...state,
        filteredCountries: action.payload
      };

    case GET_COUNTRY:
      return {
        ...state,
       countries: action.payload,
        filteredCountries: action.payload
      };

      case FILTER_BY_TOUR:
        const { payload: activity } = action;
  const filteredCountrie = state.countries.filter((country) =>
    country.activities.some((act) => act.name === activity)
  );
  return {
    ...state,
    filteredCountries: filteredCountrie.length < 1 ? state.countries : filteredCountrie
    
  };
       case FILTER_BY_CONTINENT:
        const { payload: continent } = action;
        const filteredCoun = state.countries.filter((country) =>
          country.continent === continent )
        
        return{
            ...state,
            filteredCountries: filteredCoun.length < 1 ? state.countries : filteredCoun
        }

    default:
      return state;
  }
};

export default rootReducer;
