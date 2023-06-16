import { Route } from 'react-router-dom';
import { Detail, Form, Landing, Home } from "./views/index"
import NavBar from './component/NavBar/NavBar';
import { useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" && <NavBar/>}

    <Route exact path="/" component = {Landing} />  
    <Route path="/home" component = {Home} />
    <Route path="/detail"  component = { Detail} />
    <Route path="/create"  component = {Form} />
    
    
      
   
    </div>
  );
}

export default App;
