import React, { useState, useEffect } from 'react';
import './styles.css'


const Nasa = () => {  
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [imageData, setImageData] = useState()
  


  
  useEffect(() => {
    const fetchData = async () => {
       await  navigator.geolocation.getCurrentPosition(function(position) {
        setLong(position.coords.longitude);      
      });
        await  navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);       
      });
      

    //     fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=${long}&lat=${lat}&date=2019-02-01&dim=0.15&api_key=CTPTGJww4tZCcSiJzdCGKUqhNW3N0GitJNKFJ2Ro`)
    //     .then(response => response.blob())
    //     .then(() => {setImageData(imageData)});

    //     console.log(imageData)
    //     console.log(lat)
    //     console.log(long)
     }
        fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=${long}&lat=${lat}&dim=0.2000&api_key=CTPTGJww4tZCcSiJzdCGKUqhNW3N0GitJNKFJ2Ro`)
        .then(response => response.blob())
        .then(image => {const localURL = URL.createObjectURL(image)
        setImageData(localURL)}, [imageData]);
        // console.log(imageData)

        
        // console.log(lat)
        // console.log(long)
    
    fetchData();
  }, [lat, long])
  
//   const nasafetch = (lat, long) =>{
//       fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=${long}&lat=${lat}&date=2019-02-01&dim=0.15&api_key=CTPTGJww4tZCcSiJzdCGKUqhNW3N0GitJNKFJ2Ro`)
//       .then(response => response.blob())
//       .then(image => {const localURL = URL.createObjectURL(image)
//       setImageData(localURL)}, []);
//       console.log(imageData)
//   }
  
  return (
    <div className="App">
        <img alt="" src={imageData}/>
    </div>
  );
  }

  export default Nasa;