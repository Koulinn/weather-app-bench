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
            // Request Error handling
            console.log(res)
        }

    } catch (error) {
        //Server request error handling
        console.log(error)
    }
}

const requests ={
    getCurrentWeather: getCityCurrentWeather
}

export default requests