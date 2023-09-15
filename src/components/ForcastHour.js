import { useState, useEffect } from "react";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import { timeDisplay, icons} from "./TransformFunctions";

const ForcastHour = ({weatherData}) => {
  const [time, setTime] = useState("0");
  const [temp, setTemp] = useState("");
  const [id , setId] = useState(null) ;
  useEffect(() => {
    if (weatherData) {
      const weather = weatherData ;
      const { dt_txt, main , weather: weatherInfo} = weather;
      setTemp(main.temp);
      setTime(dt_txt);
      setId(weatherInfo[0].id)
    }
  }, [weatherData]);
  return (
    <>
      <div>
        <p className="time">{timeDisplay(time)}</p>
        <img src={icons(id)} alt="Partly Cloudy" />
        <p className="temp">{temp}&deg;C</p>
      </div>
    </>
  );
};
export default ForcastHour;
