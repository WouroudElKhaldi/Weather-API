import { useState, useEffect } from "react";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import snow from "../img/weather-icons/snow.svg";
import clear from "../img/weather-icons/clear.svg";
import { timeDisplay, kelvinToCelsius } from "./TransformFunctions";

const ForcastHour = ({weatherData}) => {
  const [time, setTime] = useState("0");
  const [temp, setTemp] = useState("");
  useEffect(() => {
    if (weatherData) {
      const weather = weatherData ;
      const { dt_txt, main } = weather;
      setTemp(main.temp);
      setTime(dt_txt);
    }
  }, [weatherData]);
  return (
    <>
      <div>
        <p className="time">{timeDisplay(time)}</p>
        <img src={partlycloudy} alt="Partly Cloudy" />
        <p className="temp">{temp}&deg;C</p>
      </div>
    </>
  );
};
export default ForcastHour;
