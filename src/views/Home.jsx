import React from 'react'
import Header from '../components/Shared/Header'
import { useState, useEffect } from 'react'
import CardSquare from '../components/Shared/CardSquare'
import { Row } from 'react-bootstrap'
import CardSearchResult from '../components/Shared/CardSearchResult'

const favCities = ['Leeds', 'Milan', 'Monza', 'Rome', 'Lages', 'Florianópolis']

function Home({ setLocationValue, locationCityWeather, locationValue, isSearchFound, isSearchFailed }) {
    return (
        <div>
            <Header setLocationValue={setLocationValue} />
            <Row>
                {isSearchFound ? <CardSearchResult locationValue={locationValue} cityWeather={locationCityWeather} /> :
                    isSearchFailed ?
                        <div className="mt-2 col-12 search-fail">
                            <div className="d-flex flex-column" >
                                <img className="search-fail-img" height={64} src="https://res.cloudinary.com/koulin/image/upload/v1632493443/fail-removebg-preview_lzydra.png" alt="" />
                                <div className="mt-3 d-flex justify-content-center"><small>We couldn't find {locationValue}</small></div>
                            </div>
                        </div>
                        :
                        <small className="col-12 text-center">Search anywhere in the world!</small>
                }
                {favCities.map((city, i) => <CardSquare city={city} i={i + 1} />)}

            </Row>
        </div>
    )
}

export default Home
