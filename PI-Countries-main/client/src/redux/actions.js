import axios from "axios";

export const GET_COUNTRY_NAME = 'GET_COUNTRY_NAME';
export const GET_COUNTRY = 'GET_COUNTRY';
export const FILTER_BY_TOUR = 'FILTER_BY_TOUR';
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';

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
  return {
    type: CREATE_ACTIVITY,
    payload: activity
  };
};
