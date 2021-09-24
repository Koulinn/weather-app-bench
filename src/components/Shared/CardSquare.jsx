import React from 'react'
import { useState, useEffect } from 'react'
import requests from '../../lib';
import Loading from './Loading';
import pkg from 'celsius'


const { toCelsius } = pkg

function CardComp({city }) {
    const [cityWeather, setCityWeather] = useState({})
    const [isCelsius, setIsCelsius] = useState(true)

    useEffect(() => {
        const getCityWeatherData = async () => setCityWeather(await requests.getCurrentWeather(city))
        getCityWeatherData()
    }, [])

    return (

        <div className={"col-6 mt-5 p-3"}>
                    <div className="d-flex justify-content-between">
                     <div>
                        {isCelsius ?
    
                            <h2 className="mb-1 pb-0">{cityWeather.serverData ? `${toCelsius(cityWeather.serverData.main.temp, 2)} C` : <Loading />}</h2>
                            :
    
                            <h2 className="mb-1 pb-0">{cityWeather.serverData ? `${cityWeather.serverData.main.temp} F` : <Loading />}</h2>
                        }
                        <p>{cityWeather.serverData ? cityWeather.serverData.weather[0].main : <Loading />}</p>
                    </div>
                    {cityWeather.serverData ?
                        <div>
                            <img src={`http://openweathermap.org/img/wn/${cityWeather.serverData.weather[0].icon}.png`} alt='' />
                        </div>
                        : <Loading />
                    }
                </div>
                {cityWeather.serverData ?
                    <h6>{cityWeather.serverData.name}</h6>
                    : <Loading />
                }

        </div>
    )
}

export default CardComp
