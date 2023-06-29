
import { GET_COUNTRY_NAME, GET_COUNTRY, FILTER_BY_TOUR, FILTER_BY_CONTINENT, ORDER_BY_ALPH, ORDER_BY_POPU, GET_ACTIVITIES, GET_COUNTRY_BY_ID, CREATE_ACTIVITY } from "./actions";

const initialState = {
  filteredCountries: [],
  countries: [],
  allCountries: [],
  allActivities:[],
  detail: {}
  
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY_NAME:
        
      return {
        ...state,
        countries: action.payload
      };

    case GET_COUNTRY:
      return {
        ...state,
       countries: action.payload,
        allCountries: action.payload
      };

      case FILTER_BY_TOUR:
    const activity = action.payload;

let Coun = [];
    if(activity !== "All"){
        Coun = state.allCountries.filter((c)=> c.activities.some((act)=> act.name === activity))
       
    }else{
        Coun = [...state.allCountries]
    }

  return {
    ...state,
    countries: Coun.length < 1 ? state.countries : Coun
    
  };
      case FILTER_BY_CONTINENT:

      let filteredCoun = []
        const { payload: continent } = action;
        if(continent !== "All"){
            filteredCoun = state.allCountries.filter((country) =>
          country.continent === continent )
        }else{
            filteredCoun = [...state.allCountries]
        }
        
        
        return{
            ...state,
            countries: filteredCoun.length < 1 ? state.countries : filteredCoun
        }

      case ORDER_BY_ALPH:
        let ordercountries = action.payload === "asc" ?  state.countries.sort(function (a, b) {
            if(a.name > b.name) {
                return 1
            }
            if(b.name > a.name) {
                return -1
            }
            return 0
        }) :
        state.countries.sort(function (a, b) {
            if(a.name > b.name) {
                return -1
            }
            if(b.name > a.name) {
                return 1
            }
            return 0
        })    
        return{
            ...state,
            countries:  ordercountries,
            filteredCountries:ordercountries
        }
        

        case ORDER_BY_POPU:
            let ordercoun = action.payload === "more" ?  
            state.countries.sort((a, b) => parseInt(b.population) - parseInt(a.population)) :
                state.countries.sort((a, b) => parseInt(a.population) - parseInt(b.population));    

            return{
                ...state,
                countries:  ordercoun,
                filteredCountries: ordercoun
            }

            case GET_ACTIVITIES:
                return{
                    ...state,
                    allActivities: action.payload
                }

            case GET_COUNTRY_BY_ID:
                return{
                    ...state,
                    detail: action.payload
                   
                }

            case CREATE_ACTIVITY:
              return{
                ...state,
                allActivities: [...state.allActivities, action.payload]
              }

         
            


    default:
      return state;
  }
};

export default rootReducer;
