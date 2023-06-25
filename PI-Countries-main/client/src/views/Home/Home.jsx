import Search from "../../component/Search/Search"
import CardsContainer from "../../component/CardsContainer/CardsContainer";
import "./Home.css";
import React from "react";


const Home = () => {
  
  
  return (
    <div className="container">
      
        <Search/>
      <CardsContainer />
    </div>
  );
};

export default Home;
