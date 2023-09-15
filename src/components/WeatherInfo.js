import { useEffect , useState } from 'react';
import partlycloudy from '../img/weather-icons/partlycloudy.svg';
import {icons} from './TransformFunctions';

const WeatherInfo = ({weatherData}) => {

const [minTemp, setMinTemp] = useState('');
const [maxTemp, setMaxTemp] = useState('');
const [humidity, setHumidity] = useState('');
const [pressure, setPressure] = useState('');
const [desc, setDesc] = useState("");
const [id , setId] = useState(null)

useEffect(() =>{
  if (weatherData) {
    const weather = weatherData.list[0] ;
    const {main, weather: weatherInfo} = weather ;    
    setMinTemp(main.temp_min);
    setMaxTemp(main.temp_max);
    setHumidity(main.humidity);
    setPressure(main.pressure);
    setDesc(weatherInfo[0].description) ;
    setId(weatherInfo[0].id) ;
  }
}, [weatherData]);
    return(
        <section class="w-details">
            <div className="content">
              <div className="w-image">
                <img src={icons(id)} alt="Partly Cloudy" />
                <p className="desc">{desc}</p>
              </div>
              <p className="temp">Temperature <span>{minTemp}&deg;C  to {maxTemp}&deg;C</span></p>
              <p className="details"><span>Humidity</span> {humidity}%<span>Pressure</span> {pressure}</p>
            </div>
          </section>
    )
}
export default WeatherInfo ;