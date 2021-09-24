import { Container } from "react-bootstrap";
import  Home  from "./views/Home";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react'
import requests from '../src/lib';



function App() {
  const [locationValue, setLocationValue]= useState('')
  const [locationCityWeather, setLocationSetWeather] = useState({})
  const [isSearchFound, setIsSearchFound] = useState(false)
  const [isSearchFailed, setSearchFailed] = useState(false)
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    const getCityCoordData = async () => {
      if(locationValue.length > 3){
        const response = await requests.getCurrentWeather(locationValue)
        if(response != '404'){
          const cityWeatherOneCall = await requests.getCityOneCall(response.coord)
          setLocationSetWeather(cityWeatherOneCall)
          setSearchFailed(false)
          setIsSearchFound(true)
          setIsSearching(false)
          return
        } else {
          setIsSearchFound(false)
          setSearchFailed(true)
          setIsSearching(false)
          return
        }

      } else {

      }
      setSearchFailed(false)
      setIsSearching(false)
      setIsSearchFound(false)
    }
    getCityCoordData()



}, [locationValue])


  return (
    <Container className="mobile-emulator-size" fluid>
      <Router>
        <Route path="/" exact render={(routerProps) =>
          <Home {...routerProps} locationValue={locationValue} isSearchFailed={isSearchFailed} setLocationValue={setLocationValue} isSearchFound={isSearchFound} locationCityWeather={locationCityWeather}/>}>
        </Route>
      </Router>
    </Container>
  );
}

export default App;
