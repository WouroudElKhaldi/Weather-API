import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import partlycloudy from './img/weather-icons/partlycloudy.svg';
import cloudy from './img/weather-icons/cloudy.svg';
import snow from './img/weather-icons/snow.svg';
import clear from './img/weather-icons/clear.svg';

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Karim"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <main role="main" class="main">
        <header className="header">
          <nav className="nav">
              <input type="text" name="" id="" placeholder="Type in a city here"/>
              <button className="button">FIND WEATHER</button>
          </nav>
        </header>
        <section class="w-details">
          <div className="content">
            <div className="w-image">
              <img src={partlycloudy} alt="Partly Cloudy" />
              <p className="desc">overcast clouds</p>
            </div>
            <p className="temp">Temperature <span>10&deg;C to 11&deg;C</span></p>
            <p className="details"><span>Humidity</span> 78% <span>Pressure</span> 1008.48</p>
          </div>
        </section>
        <section className="w-hour">  
          <div>
              <p className="time">03:00</p>
              <img src={partlycloudy} alt="Partly Cloudy" />
              <p className="temp">8&deg;C</p>
          </div>
          <div>
            <p className="time">06:00</p>
            <img src={partlycloudy} alt="Partly Cloudy" />
            <p className="temp">9&deg;C</p>
          </div>
          <div>
            <p className="time">09:00</p>
            <img src={clear} alt="Clear Cloudy" />
            <p className="temp">14&deg;C</p>
          </div>
          <div>
            <p className="time">12:00</p>
            <img src={clear} alt="Clear Cloudy" />
            <p className="temp">17&deg;C</p>
          </div>
          <div>
            <p className="time">15:00</p>
            <img src={clear} alt="Clear Cloudy" />
            <p className="temp">18&deg;C</p>
          </div>
          <div>
            <p className="time">18:00</p>
            <img src={clear} alt="Clear Cloudy" />
            <p className="temp">16&deg;C</p>
          </div>
          <div>
            <p className="time">21:00</p>
            <img src={partlycloudy} alt="Partly Cloudy" />
            <p className="temp">13&deg;C</p>
          </div>
        </section>
        </main>
      </div>
    );
  }
}

export default App;
