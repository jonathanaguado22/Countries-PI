
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createActivity, getCountry } from "../../redux/actions";
import { validate } from "./Validate";
import { useHistory } from "react-router-dom";
import styles from './Form.module.css';

const Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const countries = useSelector((state) => state.countries);
  const [error, setError] = useState({});
  const [completeForm, setCompleteForm] = useState({
    name: '',
    difficulty: 0,
    duration: '',
    season: '',
    countries: [],
  });

  useEffect(() => {
    dispatch(getCountry());
  }, [dispatch]);

  const handleChange = (e) => {
    setCompleteForm({
      ...completeForm,
      [e.target.name]: e.target.value,
    });
    setError(validate({
      ...completeForm,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelect = (e) => {
    e.preventDefault();
    setCompleteForm((state) => {
      if (e.target.name === 'countries') {
        return {
          ...state,
          countries: [...state.countries, e.target.value],
        };
      } else {
        return {
          ...state,
          [e.target.name]: e.target.value,
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!completeForm.name || !completeForm.difficulty || !completeForm.duration || !completeForm.season || completeForm.countries.length === 0) {
      return alert('Fill out the form');
    }

    dispatch(createActivity(completeForm));
    alert('Activity created successfully');
    setCompleteForm({
      name: '',
      difficulty: 0,
      duration: '',
      season: '',
      countries: [],
    });
    history.push('/home');
  };

  const handleRemoveCountry = (event) => {
    setCompleteForm({
      ...completeForm,
      countries: completeForm.countries.filter((con) => con !== event.target.value),
    });
  };

  useEffect(() => {
    dispatch(getCountry());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.linkContainer}>
        <Link to="/home" className={styles.link}>Home</Link>
      </div>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Create Activity</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Actividad:</label>
            <input
              type="text"
              placeholder="Activity name"
              value={completeForm.name}
              name="name"
              onChange={handleChange}
              className={styles.input}
            />
            {error.name && <p className={styles.error}>{error.name}</p>}
          </div>
  
          <div className={styles.formGroup}>
            <label className={styles.label}>Difficulty:</label>
            <div>
              <input
                type="text"
                value={completeForm.difficulty}
                name="difficulty"
                onChange={handleChange}
                className={styles.input}
              />
              {error.difficulty && <p className={styles.error}>{error.difficulty}</p>}
            </div>
          </div>
  
          <div className={styles.formGroup}>
            <label className={styles.label}>Duration:</label>
            <input
              type="number"
              placeholder="Hours"
              value={completeForm.duration}
              name="duration"
              onChange={handleChange}
              className={styles.input}
            />
            {error.duration && <p className={styles.error}>{error.duration}</p>}
          </div>
  
          <div className={styles.formGroup}>
            <label className={styles.label}>Season:</label>
            <input
              type="text"
              placeholder="Season"
              value={completeForm.season}
              name="season"
              onChange={handleChange}
              className={styles.input}
            />
            {error.season && <p className={styles.error}>{error.season}</p>}
          </div>
  
          <div className={styles.formGroup}>
            <label className={styles.label}>Countries:</label>
            <select
              name="countries"
              id="countries"
              
              onChange={handleSelect}
              className={styles.select}
            >
              <option></option>
              {countries.map((con) => (
                <option key={con.name}>{con.name}</option>
              ))}
            </select>
  
            <div className={styles.selectedCountries}>
              <label className={styles.label}>Selected Countries:</label>
              <ul className={styles.countryList}>
                {completeForm.countries.map((country) => (
                  <li key={country} className={styles.countryItem}>
                    {country}
                    <button
                      type="button"
                      value={country}
                      onClick={handleRemoveCountry}
                      className={styles.deleteButton}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          <div className={styles.formGroup}>
            <button
              type="submit"
              disabled={Object.keys(error).length === 0 ? false : true}
              className={styles.addButton}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
  
};

export default Form;
