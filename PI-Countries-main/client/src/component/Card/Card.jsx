
import "./Card.css"

const Card = (props) => {
  return (
    <div className="card">
       
     <img  src={props.flag} alt={props.name} />
      <p>Name: {props.name}</p>
      <p>Continent: {props.continent}</p>
    </div>
  );
};

export default Card;
