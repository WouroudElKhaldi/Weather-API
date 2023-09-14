import React from "react";
import WeatherForcast from "./WeatherForcast";
import WeatherInfo from "./WeatherInfo";
import fakeWeatherData from  '../fakeWeatherData.json' ;

const Main = () => {
    const weatherData = fakeWeatherData.list ;
    return(
    <>
    <WeatherInfo weatherData={weatherData[4]}/>
    <WeatherForcast /> 
    </>  
    )
}
export default Main ;