import React, { useState } from "react";
const Search = (props) => {
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  }

  const handleFindWeather = (e) => {
    e.preventDefault()
    props.onValueChange(city);
  } 

  return (
      <form className="nav" onSubmit={handleFindWeather}>
        <input type="text" placeholder="Type in a city here" value={city} onChange={handleInputChange}/>
        <button className="button"  type="submit">FIND WEATHER</button>
      </form>
  );
}
export default Search;
