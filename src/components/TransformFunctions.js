import React from "react";

export const timeDisplay = (time) => {
    const date = new Date(time);
    const hours = date.getHours().toString().padStart(2, '0');;
    const minutes = date.getMinutes().toString().padStart(2, '0');;
    return(
        <>
        {hours} : {minutes}
        </>
    )
}

export const kelvinToCelsius = (temp) => {
    return (
        <>
        {Math.round(temp - 273.15)}
        </>
    )
}