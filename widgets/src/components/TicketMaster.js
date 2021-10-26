import React, {useState, useEffect} from 'react';


const TicketMaster = () => {
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);
    const [status, setStatus] = useState(null);
    const [eventList, setEventList] = useState([]);
    const latlon= lat + lon;


    const getLocation = () => {
        if (!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser');
        } else {
            setStatus('Locating...');
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus(null);
                setLat(position.coords.latitude);
                setLon(position.coords.longitude);
            }, () => {
                setStatus('Unable to retrieve your location');
            });
        }
    }

    
    
useEffect(() => {
    if (lat && lon ){
        fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=0ps2AGABt3YGhVyPttfk6QbywhTcsVUT&latlong='+`${lat},${lon}`)
        .then(response => response.json())
        .then(data => setEventList(data._embedded.events));
    }
}, [lat, lon]);
    return(
        <div id="app">
            <h1>What's Happening Around Me?</h1>
            <button onClick={getLocation}>Find Events</button>
            <p>{status}</p>
            <br />
            <div><h1></h1>
               {eventList.map(event => <div><a href={event.url}>{event.name}</a></div>)}      
             <br />
             <br />
             <br />
             <div><h4></h4></div>
            </div>
        </div> 
    );
}

export default TicketMaster;