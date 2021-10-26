import React from 'react';
import './styles.css';
import {
  Card, CardImg, CardSubtitle
} from 'reactstrap';


const WeatherCard = ({weatherData}) => (

  <div className="container">
    <Card className="weather-container">
        <CardSubtitle className="location">The weather in {weatherData.name} is: </CardSubtitle><br/>
        <CardSubtitle className="info"><b>Temperature:</b> {weatherData.main.temp} &#8457;</CardSubtitle>
        <CardSubtitle className="info"><b>Description:</b> {weatherData.weather[0].description}</CardSubtitle>
        <CardSubtitle className="info"><b>Humidity:</b> {weatherData.main.humidity} %</CardSubtitle>
        <div className="center">
          <CardImg src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt='weather icon' style={{height: '150px', width: '150px'}}/>
        </div>
    </Card>
  </div>

)

export default WeatherCard;