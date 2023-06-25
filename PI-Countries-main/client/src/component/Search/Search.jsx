import React, { useState } from "react";
import { getCountryName, filterByTour, filterByContinents } from "../../redux/actions";
import {  useDispatch } from "react-redux";
import "./Search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedActivity, setSelectedActivity] = useState("");

  const [selectContinent, setSelectContinent] = useState("")

  
  const dispatch = useDispatch();

  const handleFilterByContinents = (e) => {
    e.preventDefault()
    
    dispatch(filterByContinents(selectContinent));
    
    setSelectedActivity("");
    setSearchTerm("");
    setSelectContinent("");

  };

  const handleFilterByActivity = (e) => {
    e.preventDefault()
    
    dispatch(filterByTour(selectedActivity));
    
    setSelectedActivity("");
    setSearchTerm("");
    setSelectContinent("");

  };
  const handleSearch = (e) => { 
    e.preventDefault()

    dispatch(getCountryName(searchTerm));

    setSelectedActivity("");
   setSearchTerm("");
   setSelectContinent("");
  };

  const handlerChange = (e)=>{
    
    setSearchTerm(e.target.value)
    
  }

  const handlerChangeCon = (e)=>{
    setSelectContinent(e.target.value)
  }

  const handlerChangeAc = (e)=>{
   
    setSelectedActivity(e.target.value)
  }

  return (
    <div >
      <div >
        <h2 >Search:</h2>
        <input
          type="text"
          value={searchTerm}
          placeholder="Country Name"
          onChange={handlerChange}         
        />
        <button onClick={handleSearch} >
          Search
        </button>
      </div>

      <div >
        <h2 >Filter by Activity:</h2>
        <select
          value={selectedActivity}
          onChange={handlerChangeAc}
          className="activity-select"
        >
          <option value="">Activities</option>
          <option value="tour">Tour</option>
          <option value="running">Running</option>
          <option value="visit">Visit</option>
        </select>
        <button onClick={handleFilterByActivity} className="filter-button">
          Filter
        </button>
      </div>
      <div >
        <h2 >Filter by Continents:</h2>
        <select
          value={selectContinent}
          onChange={handlerChangeCon}
          
          className="activity-select"
        >
          <option value="">Continents</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Polar">Polar</option>
          
        </select>
        <button onClick={handleFilterByContinents} className="filter-button">
          Filter
        </button>
      </div>

      
    </div>
  );
};

export default Search;
