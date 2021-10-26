import React, { useState, useEffect } from 'react';
import Nasa from './components/Nasa'

  const App = (props) => {

  // const [lat, setLat] = useState(null);
  // const [lng, setLng] = useState(null);
  // const [status, setStatus] = useState(null);

  // const getLocation = () => {
  //   if (!navigator.geolocation) {
  //     setStatus('Geolocation is not supported by your browser');
  //   } else {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       setStatus(null);
  //       setLat(position.coords.latitude);
  //       setLng(position.coords.longitude);
  //     }, () => {
  //       setStatus('Unable to retrieve your location');
  //     });
  //   }

  // }

  // useEffect(() =>{
  //   getLocation()
  // })

  return (
    <div className="App">
      <Nasa />
    </div>
  );
}

export default App;




