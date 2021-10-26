import React, { useState, useEffect } from 'react';
import './styles.css'


let longdata = navigator.geolocation.getCurrentPosition(response => {return response.coords.longitude});
let latdata = navigator.geolocation.getCurrentPosition(response => {return response.coords.latitude});

localStorage.setItem('long', longdata)
localStorage.setItem('lat', latdata)

const Nasa = () => {
        const [imageData, setImageData] = useState();


        const fetchData = async () => {
                await fetch('https://api.nasa.gov/planetary/earth/imagery?lon='+ localStorage.getItem('longitude') +'&lat='+ localStorage.getItem('latitude') + '&date=2019-02-01&dim=0.15&api_key=CTPTGJww4tZCcSiJzdCGKUqhNW3N0GitJNKFJ2Ro')
                .then(response => response.blob())
                .then(image => {const localURL = URL.createObjectURL(image)
                setImageData(localURL)}, [imageData]);
        }

        
  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <div className="App">
        <img alt="" src={imageData}/>
    </div>
  );
  }



export default Nasa;