  import ForcastHour from "./ForcastHour";
  const WeatherForcast = ({weatherData}) => { 
      return(
        <section className="w-hour">  
        {weatherData?.list.filter((item,index)=>index!==0).map((singleWeather,index)=>{
          return(
            <ForcastHour weatherData={singleWeather}/>
          )
        })}
          {/* <ForcastHour weatherData={weatherData[1]}/>
          <ForcastHour weatherData={weatherData[2]}/>
          <ForcastHour weatherData={weatherData[3]}/>
          <ForcastHour weatherData={weatherData[4]}/>
          <ForcastHour weatherData={weatherData[5]}/>
          <ForcastHour weatherData={weatherData[6]}/>
          <ForcastHour weatherData={weatherData[7]}/> */}
      </section>
      )
  }
  export default WeatherForcast ;