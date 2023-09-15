import React, { useState } from "react";
const Search = (props) => {
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  }

  const handleFindWeather = () => {
    props.onValueChange(city);
  } 

  return (
      <nav className="nav">
        <input type="text" placeholder="Type in a city here" value={city} onChange={handleInputChange}/>
        <button className="button" onClick={handleFindWeather}>FIND WEATHER</button>
      </nav>
  );
}
export default Search;
