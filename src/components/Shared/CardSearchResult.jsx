import React from 'react'
import { useState, useEffect } from 'react'
import requests from '../../lib';
import Loading from './Loading';
import pkg from 'celsius'


const { toCelsius } = pkg

function CardSearchResult({ cityWeather, locationValue }) {
    const [isCelsius, setIsCelsius] = useState(true)

    return (
        <div className={"col-12 mt-5 p-3"}>
            <div className="d-flex justify-content-between">
                <div>
                    {isCelsius ?

                        <h2 className="mb-1 pb-0">{toCelsius(cityWeather.current.temp, 2)} C </h2>
                        :

                        <h2 className="mb-1 pb-0">{cityWeather.current.temp}</h2>
                    }
                    <p>{locationValue}</p>
                </div>

                <div>
                    <img src={`http://openweathermap.org/img/wn/${cityWeather.current.weather[0].icon}.png`} alt='' />
                </div>


            </div>

            <h6>{cityWeather.current.weather[0].main}</h6>



        </div>
    )
}

export default CardSearchResult
