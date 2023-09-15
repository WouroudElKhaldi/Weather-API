import { useState, useEffect } from "react";
import Search from "./Search";
import Main from "./Main";

const Home = () => {
  const [receivedCity, setReceivedCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);
  const [networkError, setNetworkError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleValueChange = (value) => {
    setReceivedCity(value);
  };
  const API = "c6bf930472b9db1ac793515651057fe8";
  const base_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${receivedCity}&cnt=8&units=metric&appid=${API}`;

  useEffect(() => {
    // Fetch data when receivedCity changes
    if (!navigator.onLine) {
      setNetworkError(true);
      setError(false);
      return;
    }
    if (receivedCity) {
      setIsLoading(true);
      fetch(base_URL)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          if (data.cod === "200") {
            setWeatherData(data);
            setIsLoading(false);
            setError(false);
          } else {
            setError(true);
          }
        })
        .catch((err) => {
          if (err.message === "Network request failed") {
            setNetworkError(true);
          } else {
            setError(true);
          }
          window.addEventListener("offline", () => {
            setNetworkError(true);
            setError(false);
          });
          console.error("API Error: ", error);
          setIsLoading(false);
        });
    }
  }, [receivedCity, window]);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  };

  const loadingstyle = {
    display: "flex",
    color: "black",
    border: "2px solid black",
    padding: "10px",
    borderRadius: "5px",
  }

  const errorStyle = {
    display: "flex",
    color: "red",
    border: "2px solid red",
    padding: "10px",
    borderRadius: "5px",
  };

  return (
    <>
      <header className="header">
        <Search onValueChange={handleValueChange} />
      </header>

      <main role="main" className="main">
        {isLoading ? (
          <div style={containerStyle}>
            <h2 style={loadingstyle}>Loading ...</h2>
          </div>
        ) : networkError ? (
          <div style={containerStyle}>
            <h2 style={errorStyle}>Network issue</h2>
          </div>
        ) : error ? (
          <div style={containerStyle}>
            <h2 style={errorStyle}>City not found !!!</h2>
            <h3 style={errorStyle}>Try to type a valid city name. </h3>
          </div>
        ) : (
          weatherData && <Main weatherData={weatherData} />
        )}
      </main>
    </>
  );
};
export default Home;
