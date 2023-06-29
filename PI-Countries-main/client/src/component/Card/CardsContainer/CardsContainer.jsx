import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import "./CardsContainer.css";
import { getCountry, orderByAlph } from "../../redux/actions";
import {ORDER_BY_ALPH} from "../../redux/actions"

const CardsContainer = () => {
  const dispatch = useDispatch();
  const filteredCountries = useSelector((state) => state.filteredCountries);
 


  useEffect(() => {
   dispatch(getCountry());
  
  }, [dispatch]);

  useEffect(() => {
    if (actions.type === ORDER_BY_ALPH) {
      dispatch(orderByAlph());
    }
  }, [actions, dispatch]);
console.log(filteredCountries);
  return (
    <div className="cards-container">
    { 
      filteredCountries.map((country) => (
        <Card
          key={country.name}
          flag={country.flag}
          name={country.name}
          continent={country.continent}
        />
      ))
    }
  
  </div>
  );
};

export default CardsContainer;



