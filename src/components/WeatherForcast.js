  import ForcastHour from "./ForcastHour";
  const WeatherForcast = ({weatherData}) => { 
      return(
        <section className="w-hour">  
        {weatherData?.list.filter((item,index)=>index!==0).map((singleWeather,index)=>{
          return(
            <ForcastHour weatherData={singleWeather} key={index}/>
          )
        })}
      </section>
      )
  }
  export default WeatherForcast ;