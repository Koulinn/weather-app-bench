export const getCityCurrentWeather = async (city)=>{
    try {
        const URL = process.env.REACT_APP_URL_CURRENT_WEATHER + `?q=${city}&units=imperial&appid=` + process.env.REACT_APP_API_KEY
        const res = await fetch(URL)
        if(res.ok){
            const serverData = await res.json()
            const {coord} = serverData
            return {
                coord,
                serverData
            }

        } else {
            return res.status
            // Request Error handling
            console.log(res)
        }

    } catch (error) {
        //Server request error handling
        console.log(error)
    }
}
export const getCityOneCall = async (coord)=>{
    try {
        const URL = process.env.REACT_APP_URL_ONE_WEATHER + `lat=${coord.lat}&lon=${coord.lon}&exclude=minutely,alerts&units=imperial&appid=` + process.env.REACT_APP_API_KEY
        const res = await fetch(URL)
        if(res.ok){
            const serverData = await res.json()
            return serverData
            
        } else {
            // Request Error handling
            console.log(res)
        }

    } catch (error) {
        //Server request error handling
        console.log(error)
    }
}



const requests ={
    getCurrentWeather: getCityCurrentWeather,
    getCityOneCall :getCityOneCall
}

export default requests