import React, { useEffect, useState } from "react";
import WeatherInfo from './WeatherComponent/WeatherInfo';

const text = {
  textAlign: 'center'
}
const center = {
  textAlign: 'center'
}

export default function WeatherApp() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])

  return (
    <div className="WeatherApp">
      {(typeof data.main != 'undefined') ? (
        <div style={center}>
          <button>&#176;F / &#176;C</button><br/><br/>
          <WeatherInfo weatherData={data}/>
        </div>
        
      ): (
        <div style={text}>Could not get weather. Please refresh the page.</div>
      )}
      
    </div>
  );
}