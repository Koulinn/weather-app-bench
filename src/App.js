import { Container } from "react-bootstrap";
import  Home  from "./views/Home";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react'



function App() {
  const [locationValue, setLocationValue]= useState('')

  
  return (
    <Container className="max-size" fluid>
      <Router>
        <Route path="/" exact render={(routerProps) =>
          <Home {...routerProps} setLocationValue={setLocationValue}/>}>
        </Route>
      </Router>
    </Container>
  );
}

export default App;
