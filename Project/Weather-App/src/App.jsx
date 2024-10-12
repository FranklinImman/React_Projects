import { useEffect, useState } from 'react'
import './App.css'

import searchicon from '../public/weather-app-img/images/search.png'
import clearicon from '../public/weather-app-img/images/clear.png'
import cloudsicon from '../public/weather-app-img/images/clouds.png'
import drizzleicon from '../public/weather-app-img/images/drizzle.png'
import snowicon from '../public/weather-app-img/images/snow.png';
import windicon from '../public/weather-app-img/images/wind.png';
import humidityicon from '../public/weather-app-img/images/humidity.png'
import rainicon from '../public/weather-app-img/images/rain.png';
const WeatherDetails=(props)=>{
  console.log(props);
  const {icon,temp,city,country,lat,lon,humidity,wind} = props;
  return (<>
  <div className="image">
    <img src={icon} alt="Image" />
  </div>
  <div className="temp">
  {temp}°C
    </div>
    <div className="location">
      {city}
    </div>
    <div className="country">
      {country}
    </div>
    <div className="cord">
    <div >
      <span className='lat'>Latitude</span>
      <span>{lat}</span>
    </div>
    <div >
      <span className='lon'>Longitude</span>
      <span>{lon}</span>
    </div>
    </div>
    <div className="data-container">
      <div className="element">
        <img src={humidityicon} alt="humidityicon" className='humidityicon'/>
        <div className="data">
          <div className="humidity-percent">{humidity}%</div>
          <div className="text">Humidity</div>
        </div>
      </div>
      <div className="element">
        <img src={windicon} alt="windicon" className='windicon'/>
        <div className="data">
          <div className="wind-percent">{wind} km/hr</div>
          <div className="text">Wind Speed</div>
        </div>
      </div>
    </div>
  </>)
}



function App() {
  let api_key="ca30ffdc400301f70af6cd2d4caf65c4"
const [text,setText]=useState("")
const [icon,setIcon]=useState(snowicon)
const [temp,setTemp]=useState(0)
const [city,setCity]=useState("")
const [country,setCountry]=useState("");
const [lat,setLat]=useState(0);
const [lon,setLong]=useState(0)
const [humidity,setHumidity]=useState(0)
const [wind,setWind]=useState(0);
const [cityNotFound,setCityNotFound] = useState(false);
const [loading,setLoading] = useState(false);
const [error,seterror] = useState(null);
const weatherIconMap = {
  "01d":clearicon,
  "01n":clearicon,
  "02d":cloudsicon,
  "02n":cloudsicon,
  "03d":drizzleicon,
  "03n":drizzleicon,
  "04d":drizzleicon,
  "04n":drizzleicon,
  "09d":rainicon,
  "09n":rainicon,
  "010d":rainicon,
  "010n":rainicon,
  "013d":snowicon,
  "013n":snowicon
};

const search = async ()=>{
  setLoading(true);
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`;

  try{

    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);
    if(data.cod === "404"){

      setCityNotFound(true);
      setLoading(false);
      return; 
    }
else{
    setHumidity(data.main.humidity);
    setWind(data.wind.speed);
    setTemp(Math.floor(data.main.temp));
    setCity(data.name); 
    setCountry(data.sys.country);
    setLat(data.coord.lat);
    setLong(data.coord.lon);
    const weather = data.weather[0].icon;
    setIcon(weatherIconMap[weather]||clearicon);
    setCityNotFound(false);}
  }catch(error){
    console.log("An error Occurred:",error.message);
  }
  finally{
    setLoading(false)
  }

}

const changeHandle=(e)=>{
  setText(e.target.value);
}

const handlekeydown=(e)=>{
  if (e.key==='Enter'){
    search();
  }
}

useEffect(function(){
  search();
},[]);

  return (
    <>
     <div className="container">
      <div className="input-container">
        <input type="text" className='city-Input'placeholder='Search City' onChange={changeHandle} value={text}/>
        <div className='search-icon'>
          <img src={searchicon} alt="search" className='searchicon' onKeyDown={handlekeydown} onClick={()=>search()}/>
        </div>
      </div>
      { !loading && !cityNotFound && <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} lon={lon} humidity={humidity} wind={wind}/>}

      {loading && <div className="loading-message">Loading...</div>}

      {error&&<div className="error-message">{error}</div>}
    
    { cityNotFound && <div className="city-not-found">City Not Found</div>
    }
      <p className='copyright'>
      Designed by <span>Franklin Immanuel</span>
     </p>
     </div>
     
    </>
  )
}

export default App
