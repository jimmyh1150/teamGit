import 'bootstrap/dist/css/bootstrap.css'; 
import React from 'react';
import HeaderNAV from './components/site/HeaderNAV';
import LocationApp from './components/WeatherApp/LocationApp';
import WeatherApp from './components/WeatherApp/WeatherApp';
import TicketMaster from './components/TicketMaster';
import Nasa from './components/Nasa/Nasa';



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
  backgroundColor: '#282c34',
  textAlign: 'center',
  padding: '20px 0',
  borderRadius: '20px',
  width: '600px'
}
const body = {
  margin: '0',
  backgroundColor: '#1B1811',
  color: 'white'
}
const headers = {
  textAlign: 'center'
}
const hr = {
  width: '30%'
}

const App = () => {

  return (
    <div className="App">
      <HeaderNAV/>
      <div style={body}>  
          <div className="row" style={row}>
            <div className="intro-text col" style={col}>
              <h3 style={headers}>Hi There!</h3>
              <p style={headers}>This is our app. <br/>Here, you can:</p>
              <ol style={list}>
                <li>Check the weather of your current location</li>
                <li>Browse images from Nasa</li>
                <li>Check Ticketmaster for events near your current location.</li>
              </ol>
              <TicketMaster/>
            </div>
            <div className="col" style={col}>
              <div style={location}>
                <h3>Your current location is: </h3>
                <LocationApp/>
                <Nasa />
                <br/>
                <WeatherApp />
              </div>
            </div>
          </div>
          <hr/>
      </div>
    </div>
  );
}

export default App;