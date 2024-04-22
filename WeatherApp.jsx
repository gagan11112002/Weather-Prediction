import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
 
export default function WeatherApp() {
    const[weatherInfo,setWeatherInfo] = useState({
        city:"Tokyo",
        feelsLike: 12,
        humidity: 92,
        temp: 12.57,
        tempMax: 13.95,
        tempMin: 11.17,
        weather: "clear sky",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign: "center"}}>
            <h2>
                Weather App by Gagan &#9829;
            </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}