import React from "react";
import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";

export const timeDisplay = (time) => {
    const date = new Date(time);
    const hours = date.getHours().toString().padStart(2, '0');;
    const minutes = date.getMinutes().toString().padStart(2, '0');;
        return `${hours}:${minutes}`
}

export const kelvinToCelsius = (temp) => {
    return (
        <>
        {Math.round(temp - 273.15)}
        </>
    )
}

export const icons = (id) => {
    switch(true) {
        case id < 300:
        return `${storm}`;
        break;
        case id <= 499:
        return `${drizzle}`;
        break;
        case id <= 599:
        return `${rain}`;
        break;
        case id <= 699:
        return `${snow}`;
        break;
        case id <= 799:
        return `${fog}`;
        break;
        case id == 800:
        return `${clear}`;
        break;
        case id == 801:
        return `${partlycloudy}`;
        break;
        case id <= 805:
        return `${mostlycloudy}`;
        break;
    }
}