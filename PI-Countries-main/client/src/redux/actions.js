import axios from "axios";

export const GET_COUNTRY_NAME = 'GET_COUNTRY_NAME';
export const GET_COUNTRY = 'GET_COUNTRY';
export const FILTER_BY_TOUR = 'FILTER_BY_TOUR';
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const ORDER_BY_ALPH = 'ORDER_BY_ALPH';
export const ORDER_BY_POPU = 'ORDER_BY_POPU';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const GET_COUNTRY_BY_ID =  'GET_COUNTRY_BY_ID';

export const getCountryName = (name) => {
  return async (dispatch) => {
    try { 
        const countryName = await axios(`http://localhost:3001/countries?name=${name}`);

        if(!countryName.data) {
            window.alert('No hay paises encontrado')
            return
        }
        console.log(countryName.data);
      dispatch({
        type: GET_COUNTRY_NAME,
        payload: countryName.data
      });
    } catch (error) {
      console.log({"Error al buscar los países": error});
    }
  };
};

export const getCountry = () => {
  return async (dispatch) => {
    try {
      const countries = await axios.get('http://localhost:3001/countries');
      dispatch({
        type: GET_COUNTRY,
        payload: countries.data
      });
      
    } catch (error) {
      console.log({"Error al obtener los países": error});
    }
  };
};

export const filterByTour = (activity) => {
  return {
    type: FILTER_BY_TOUR,
    payload: activity
  };
};

export const filterByContinents = (continent) => {
    return {
        type: FILTER_BY_CONTINENT,
        payload: continent
    }
};

export const createActivity = (activity) => {
  return async(dispatch)=>{
   const newActivity = await axios.post('http://localhost:3001/activities', activity)
    dispatch({
      type: CREATE_ACTIVITY,
      payload: newActivity.data
    })
    console.log(newActivity.data);
  }
    
};

export const orderByAlph = (payload) =>{
    return{
        type: ORDER_BY_ALPH,
        payload
    }
};

export const orderByPopu = (payload) =>{
    return{
        type: ORDER_BY_POPU,
        payload
    }
};

export const getActivities = ()=>{
    return async (dispatch)=>{
        try {
            const activities = await axios('http://localhost:3001/activities');

            dispatch({
                type: GET_ACTIVITIES,
                payload: activities.data
            })


        } catch (error) {
            console.log(error);
        }
    }
}

export const getCountryById = (id) => {
    return async (dispatch)=>{
        try {
            const countryById = await axios(`http://localhost:3001/countries/${id}`);

            dispatch({
                type: GET_COUNTRY_BY_ID,
                payload: countryById.data
            })
        } catch (error) {
            
            console.log({"Error no encontrado pais por id": error});
        }
    }
}