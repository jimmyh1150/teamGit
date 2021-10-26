import React from 'react';
import HeaderNAV from './components/site/HeaderNAV';
import LocationApp from './components/WeatherApp/LocationApp';
import WeatherApp from './components/WeatherApp/WeatherApp';
import TicketMaster from './components/TicketMaster';
import Nasa from './components/Nasa';
import 'bootstrap/dist/css/bootstrap.css'; 


const row = {
  display: 'flex'
};
const col = {
  width: '75%',
  padding: '30px',
};
const list = {
  marginLeft: '10px'
};
const location = {
  backgroundColor: 'lightblue',
  textAlign: 'center',
  padding: '20px'
}
const body = {
  margin: '0 50px'
}
const headers = {
  textAlign: 'center'
}

const App = () => {

  return (
    <div className="App">
      <HeaderNAV/>
      <div style={body}>  
          <div className="row" style={row}>
            <div className="intro-text col" style={col}>
              <h3>Hi There!</h3>
              <p>This is our app. <br/>Here, you can:</p>
              <ol style={list}>
                <li>Check the weather of your current location</li>
                <li>Browse images from Nasa</li>
                <li>Check Ticketmaster for events near your current location.</li>
              </ol>
            </div>
            <div className="col" style={col}>
              <div style={location}>
                <h3>Your current location is: </h3>
                <LocationApp/>
              </div>
            </div>
          </div>
          <hr/>
        <h3 style={headers}>TODAY'S WEATHER</h3><br/>
        <WeatherApp/>
        <hr/>
        <h3 style={headers}>NASA APP HERE</h3>
        <Nasa/>
        <hr/>
        <h3 style={headers}>TICKETMASTER APP HERE</h3>
        <TicketMaster/>
      </div>
    </div>
  );
}

export default App;