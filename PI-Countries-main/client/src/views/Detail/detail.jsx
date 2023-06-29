
 import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { getCountryById } from "../../redux/actions";
import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Detail.module.css";

const Detail = () => {
  const country = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const history = useHistory();
  let id = history.location.pathname.split("/").pop();

  useEffect(() => {
    dispatch(getCountryById(id));
  }, [dispatch, id]);

  return (
    <div className={styles.detailContainer}>
      <div className={styles.linkContainer}>
        <Link to="/home">Home</Link>
      </div>
      <div className={styles.containerDetail}>
        {country && country.activities && (
          <div className={styles.activityContainer}>
            <div className={styles.detailCard}>
              <h2>Activities:</h2>
              {country.activities.map((activity) => (
                <div key={activity.id} className={styles.activityCard}>
                  <h3>Name: {activity.name}</h3>
                  <h3>Difficulty: {activity.difficulty}</h3>
                  <h3>Duration: {activity.difficulty}h</h3>
                  <h3>Season: {activity.season}</h3>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className={styles.detailCard}>
          {country ? (
            <div>
              <img src={country.flag} alt="" />
              <h1 className={styles.detailCardTitle}>{country.name}</h1>
              <h3 className={styles.detailCardInfo}>ID: {country.id}</h3>
              <h3 className={styles.detailCardInfo}>Capital: {country.capital}</h3>
              <h3 className={styles.detailCardInfo}>Continent: {country.continent}</h3>
              <h3 className={styles.detailCardInfo}>Subregion: {country.subregion}</h3>
              <h3 className={styles.detailCardInfo}>
                Area: {Number(country.area).toLocaleString()}
              </h3>
              <h3 className={styles.detailCardInfo}>
                Population: {Number(country.population).toLocaleString()}
              </h3>
              
            </div>
          ) : (
            <h1 className={styles.errorMessage}>Not Country</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;

