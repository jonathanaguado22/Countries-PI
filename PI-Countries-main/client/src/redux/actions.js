import axios from "axios";


export const GET_COUNTRY_NAME = 'GET_COUNTRY_NAME';
export const GET_COUNTRY = 'GET_COUNTRY';
export const FILTER_BY_TOUR = 'FILTER_BY_TOUR';
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT';
export const ORDER_BY_POPU = 'ORDER_BY_POPU';
export const ORDER_ALPHABETICALLY = 'ORDER_ALPHABETICALLY';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES';



export const getCountryName = (name) => {
   return async(dispatch) =>{
try {
    
      const nameCountry =  await axios(`http://localhost:3001/countries?name=${name}`);
     
     dispatch({
        type: GET_COUNTRY_NAME,
        payload: nameCountry.data
      })
    
    
} catch (error) {
    console.log({"Error al buscar los paises ":  error});
}
     }
};

export const getCountry = () =>{
   return async(dispatch) => {
    try {
        
        const countries =  await axios('http://localhost:3001/countries');
         dispatch({
            type: GET_COUNTRY,
            payload: countries.data
        })
        
    } catch (error) {
     console.log({"Error los paises": error});
    }
}
   }

   export const getAllActivities = () =>{
    return async (dispatch)=>{
        try {
            const activityTour = await axios("http://localhost:3001/activities");
            dispatch({
                type: GET_ALL_ACTIVITIES,
                payload: activityTour.data
            })
        } catch (error) {
            console.log({"Error los paises": error});
        }
    }
   };

   export const filterByActivity = (activity) =>{
    return {
        type: FILTER_BY_TOUR,
        payload: activity
    }
   };