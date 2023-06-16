import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import "./CardsContainer.css"; 

const CardsContainer = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/countries");
        setCountries(response.data);
      } catch (error) {
        console.log("Error al obtener los países:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="cards-container"> 
      {countries.map((con) => (
        <Card 
          key={con.name}
          flag={con.flag}
          name={con.name}
          capital={con.capital}
          continent={con.continent}
        />
      ))}
    </div>
  );
};

export default CardsContainer;

