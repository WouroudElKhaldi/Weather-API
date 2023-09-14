import partlycloudy from '../img/weather-icons/partlycloudy.svg';
import cloudy from '../img/weather-icons/cloudy.svg';
import snow from '../img/weather-icons/snow.svg';
import clear from '../img/weather-icons/clear.svg';

const ForcastHour = ({weatherData}) => {
    const {dt_txt ,main:{temp}} = weatherData ;
    return(
        <>
        <div>
            <p className="time">{dt_txt}</p>
            <img src={partlycloudy} alt="Partly Cloudy" />
            <p className="temp">{temp}&deg;C</p>
        </div>
        </>
    )
}
export default ForcastHour ;