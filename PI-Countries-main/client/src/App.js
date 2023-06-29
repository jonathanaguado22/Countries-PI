import { Route } from 'react-router-dom';
import { Detail, Form, Landing, Home } from "./views/index"


function App() {

  return (
    <div>
     

    <Route exact path="/" component = {Landing} />  
    <Route path="/home" component = {Home} />
    <Route  path="/detail"  component = { Detail} />
    <Route path="/create"  component = {Form} />
    
    
      
   
    </div>
  );
}

export default App;
