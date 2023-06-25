import { Link } from "react-router-dom";
import "./NavBar.css";


const NavBar = () =>{

    return(
<div className="mainContainer">

            <Link to="/home">HOME</Link>
            <Link to="/create" >FORM</Link>
            
<div> 
<div>
                Alphabetical order:   
            <select >
                <option> Alphabetical </option>
                <option value="Upward"> Upward </option>
                <option value="Falling"> Falling </option>
            </select>
            </div>
            <div>
                Order by population: 
            <select >
                <option> Poulation </option>
                <option value="less">From less to more</option>
                <option value="more">from more to less</option>
            </select>
            </div></div>   
   


        </div>

    )
};

export default NavBar;