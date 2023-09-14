import partlycloudy from '../img/weather-icons/partlycloudy.svg';
import cloudy from '../img/weather-icons/cloudy.svg';
import snow from '../img/weather-icons/snow.svg';
import clear from '../img/weather-icons/clear.svg';

const WeatherInfo = ({weatherData}) => {
  const {weather:{ description} , main: {temp_min ,temp_max , humidity , pressure}} = weatherData ;
    return(
        <section class="w-details">
            <div className="content">
              <div className="w-image">
                <img src={partlycloudy} alt="Partly Cloudy" />
                <p className="desc">{description}</p>
              </div>
              <p className="temp">Temperature <span>{temp_min}&deg;C to {temp_max}&deg;C</span></p>
              <p className="details"><span>Humidity</span> {humidity}% <span>Pressure</span> {pressure}</p>
            </div>
          </section>
    )
}
export default WeatherInfo ;