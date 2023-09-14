import ForcastHour from "./ForcastHour";
import FakeWeatherData from '../fakeWeatherData.json'
const WeatherForcast = () => { 
       const weatherData = FakeWeatherData.list ;
    return(
        <section className="w-hour">  
          <ForcastHour weatherData={weatherData[5]}/>
          <ForcastHour weatherData={weatherData[6]}/>
          <ForcastHour weatherData={weatherData[7]}/>
          <ForcastHour weatherData={weatherData[0]}/>
          <ForcastHour weatherData={weatherData[1]}/>
          <ForcastHour weatherData={weatherData[2]}/>
          <ForcastHour weatherData={weatherData[3]}/>
      </section>
    )
}
export default WeatherForcast ;