

import { GET_COUNTRY_NAME, GET_COUNTRY } from "./actions";

const initialState = {
    countries: [],
    countryName: []
  };
  const rootReducer = (state = initialState, action) => {
    switch (action.type){
       case GET_COUNTRY_NAME:
        return {
            ...state,
            countryName: action.payload,
        };

       case GET_COUNTRY:
        return {
            ...state,
            countries: action.payload
        }

        default:
            return {
                ...state
            };
    } };

    export default rootReducer;