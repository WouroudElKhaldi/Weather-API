import { useState, useEffect } from "react";
import Search from "./Search";
import Main from "./Main";

const Home = () => {
  const [receivedCity, setReceivedCity] = useState("tripoli");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const handleValueChange = (value) => {
    setReceivedCity(value);
  };
  const API = "c6bf930472b9db1ac793515651057fe8";
  const base_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${receivedCity}&cnt=8&units=metric&appid=${API}`;

  useEffect(() => {
    // Fetch data when receivedCity changes
    if (receivedCity) {
      fetch(base_URL)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setWeatherData(data);
        })
        .catch((error) => {
          setError(error);
          console.error("API Error: ", error);
        });
    }
  }, [receivedCity]);

  return (
    <>  
      <header className="header">
        <Search onValueChange={handleValueChange} />
      </header>
      <main role="main" className="main">
        {/* {JSON.stringify(weatherData)} */}
        <Main weatherData={weatherData} />
      </main>
    </>
  );
};
export default Home;
