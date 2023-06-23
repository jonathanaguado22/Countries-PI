import { useSelector, useDispatch } from "react-redux";
import CardsContainer from "../../component/CardsContainer/CardsContainer";
import "./Home.css";
import React, {useState} from "react";
import { getCountryName } from "../../redux/actions";


const Home = () => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const countryData = useSelector((state) => state.countryName);
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(getCountryName(searchTerm));
  };
  return (
    <div className="container">
        
        <div>
        <h2>Search:</h2>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
        {countryData && (
          <div className="countryByName">
            <h3>Data Country:</h3>
            <div>
              <img src={countryData.flag} alt="flag" width="100" />
              <p>Name: {countryData.name}</p>
              <p>Continent: {countryData.continent}</p>
            </div>
          </div>
        )}
      </div>
      <CardsContainer />
    </div>
  );
};

export default Home;
