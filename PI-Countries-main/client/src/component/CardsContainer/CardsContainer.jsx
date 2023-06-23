import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import "./CardsContainer.css";
import {  getCountry } from "../../redux/actions";

const CardsContainer = () => {
  
 
  const dispatch = useDispatch();

 

  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountry());
  }, [dispatch]);

  return (
    <div className="cards-container">
     

      {countries.map((con) => (
        <Card
          key={con.name}
          flag={con.flag}
          name={con.name}
          continent={con.continent}
        />
      ))}
    </div>
  );
};

export default CardsContainer;


