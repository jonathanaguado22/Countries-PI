import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <Link className={styles.cardLink} to={`/detail/${props.id}`}>
        <img className={styles.cardImg} src={props.flag} alt={props.name} />
        <p className={styles.cardText}>{props.name}</p>
        <p className={styles.cardText}>Continent: {props.continent}</p>
      </Link>
    </div>
  );
};

export default Card;
