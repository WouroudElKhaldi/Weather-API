import React from "react";
import WeatherForcast from "./WeatherForcast";
import WeatherInfo from "./WeatherInfo";

const Main = ({weatherData}) => {
    return(
    <>
    <WeatherInfo weatherData={weatherData}/>
    <WeatherForcast weatherData={weatherData}/> 
    </>  
    )
}
export default Main ;