import React from 'react'
import { useState, useEffect } from 'react'
import requests from '../../lib';
import Loading from './Loading';
import pkg from 'celsius'
import isEven from 'is-even';

const { toCelsius } = pkg

function CardComp({city, i }) {
    const [cityWeather, setCityWeather] = useState({})
    const [isCelsius, setIsCelsius] = useState(true)
    const [isSelectd, setIsSelected] = useState(false)

    useEffect(() => {
        const getCityWeatherData = async () => setCityWeather(await requests.getCurrentWeather(city))
        getCityWeatherData()
    }, [])

    const onClickEffect = ()=>{
        setIsSelected(!isSelectd)
    }

    return (

        <div className={"col-6 my-2 card-outter-wrapper " + (!isEven(i) ? 'pl-0 pr-2 ' :'pr-0 pl-2 ' ) + (i ===1 || i ===2 ? 'mt-5' :'mt-2' ) } onClick={onClickEffect}>
                  <div className={"card-wrapper p-3 pb-1" + (isSelectd ? ' selected' :'')}>
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

        </div>
    )
}

export default CardComp
