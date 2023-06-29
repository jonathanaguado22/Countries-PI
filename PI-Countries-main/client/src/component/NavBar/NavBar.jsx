import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { getCountry, getCountryName } from "../../redux/actions";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const NavBar = ({ setCurrentPage }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  useEffect(() => {
    dispatch(getCountry());
  }, [dispatch]);

  function handleInputChange(e) {
    dispatch(getCountryName(e));
    setCurrentPage(1);
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.homeLink}>
        <Link to="/home">Home</Link>
      </div>
      <div className={styles.searchContainer}>
        <div className={styles.searchLabel}>Search countries</div>
        <input
          value={name}
          type="text"
          placeholder="Country name"
          onChange={(e) => {
            setName(e.target.value);
            handleInputChange(e.target.value);
          }}
        />
      </div>
      <div className={styles.createLink}>
        <Link to="/create">
          <button>Create Actividad</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
