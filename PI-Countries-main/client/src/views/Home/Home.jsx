import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  orderByAlph,
  orderByPopu,
  getCountry,
  filterByTour,
  filterByContinents,
  getActivities,
} from "../../redux/actions";
import NavBar from "../../component/NavBar/NavBar";
import Search from "../../component/Paginado/Paginado"
import Card from "../../component/Card/Card";
import Paginado from "../../component/Paginado/Paginado";
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const allActivities = useSelector((state) => state.allActivities);

  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(10);

  const indexOfLastCountrie = currentPage * countriesPerPage;
  const indexOfFirstCountrie = indexOfLastCountrie - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountrie,
    indexOfLastCountrie
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getCountry());
    dispatch(getActivities());
  }, [dispatch]);

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByAlph(e.target.value));
    setOrden(`Ordenado ${e.target.value}`);
    setCountriesPerPage(10);
    setCurrentPage(1);
  }

  function handleSortPop(e) {
    e.preventDefault();
    dispatch(orderByPopu(e.target.value));
    setOrden(`Ordenado ${e.target.value}`);
    setCurrentPage(1);
  }

  function handlerActivities(e) {
    const selecter = e.target.value;
    dispatch(filterByTour(selecter));
    setOrden("");
    setCurrentPage(1);
  }

  function handlerContinent(e) {
    const selecter = e.target.value;
    dispatch(filterByContinents(selecter));
    setOrden("");
    setCurrentPage(1);
  }
  
  return (
    <div className={styles.allContainer}>
      <div className={styles.navbarContainer}>
        <NavBar setCurrentPage={setCurrentPage} />
      </div>
      <div className={styles.container}>
        <Search />
      </div>
  
      <div className={styles.filterContainer}>
        <label className={styles.filterLabel}>Filter by continent:</label>
        <select className={styles.filterSelect} onChange={handlerContinent}>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Polar">Polar</option>
        </select>
  
        <label className={styles.filterLabel}>Filter by activities:</label>
        <select className={styles.filterSelect} onChange={handlerActivities}>
          <option value="All">All</option>
          {allActivities.map((acc, index) => (
            <option key={index} value={acc.name}>
              {acc.name}
            </option>
          ))}
        </select>
      </div>
  
      <div className={styles.sortContainer}>
        <label className={styles.sortLabel}>  Sort alphabetically:</label>
        <select
          className={styles.sortSelect}
          onChange={(e) => handleSort(e)}
          value={orden}
        >
          <option></option>
          <option value="asc">Upward</option>
          <option value="desc">Falling</option>
        </select>
  
        <label className={styles.sortLabel}>  Sort by population:</label>
        <select
          className={styles.sortSelect}
          onChange={(e) => handleSortPop(e)}
          value={orden}
        >
          <option></option>
          <option value="less">From minor to major</option>
          <option value="more">From major to minor</option>
        </select>
      </div>
  
      <div className={styles.cardsContainer}>
        {currentCountries.length ? (
          currentCountries.map((e) => {
            return (
              <div key={e.id} className={styles.cardContainer}>
                <Card
                  id={e.id}
                  flag={e.flag}
                  name={e.name}
                  continent={e.continent}
                />
              </div>
            );
          })
        ) : (
          <h1>Not Country</h1>
        )}
      </div>
  
      <div className={styles.paginationContainer}>
        <Paginado
          countriesPerPage={countriesPerPage}
          allCountries={countries.length}
          paginado={paginado}
        />
      </div>
    </div>
  );
  
};

export default Home;
  
