import React from 'react'
import Header from '../components/Shared/Header'
import { useState, useEffect } from 'react'
import CardSquare from '../components/Shared/CardSquare'
import { Row } from 'react-bootstrap'
import CardSearchResult from '../components/Shared/CardSearchResult'



function Home({ setLocationValue, locationCityWeather, locationValue, isSearchFound, isSearchFailed }) {
    return (
        <div>
            <Header setLocationValue={setLocationValue} />
            <Row>
              {isSearchFound ? <CardSearchResult locationValue={locationValue} cityWeather={locationCityWeather}/> :
              isSearchFailed ? <small>Sorry :[ we couldn't find {locationValue}, try to put a real city! </small>: 
              <small>Search anywhere on the world!</small>
              }
                <CardSquare city={'London'} />
                <CardSquare city={'Leeds'} />
            </Row>
        </div>
    )
}

export default Home
