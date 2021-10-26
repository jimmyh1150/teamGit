import React, { useEffect, useState } from "react";
import Location from './WeatherComponent/Location';


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
        <Location weatherData={data}/>
      ): (
        <div>Could not get location. Please refresh the page.</div>
      )}
      
    </div>
  );
}