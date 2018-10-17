import React, { Component } from 'react';
import Config from './Config';
import weatherIcons from './Weathericons';
import './Weather.css';
import './css/weather-icons-wind.min.css';
import './css/weather-icons.min.css';

const baseurl = `https://api.openweathermap.org/data/2.5/weather?`;

class Weather extends Component {
  
    constructor() {
        super()
        this.state = {
            temperature: null,
            city: null,
            country: null,
            humidity: null,
            description: null,
            error: null,
            icon:null,
            latitude:null,
            longitude:null
        }
    }
    getLocation() {
        const location = window.navigator && window.navigator.geolocation
        if (location) {
          location.getCurrentPosition((position) => {
            this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
            this.getWeather();
          }, () => {
            this.setState({ latitude: null, longitude: null });
            this.getWeather();
          })
        }
        
      }
    getWeather = async () => {
        const prefix = 'wi wi-';
        let urlApi = `${baseurl}`;
        if(this.state.latitude  && this.state.longitude )
         urlApi = `${urlApi}lat=${this.state.latitude}&lon=${this.state.longitude}&appid=${Config.apikey}&units=${Config.unit}&lang=${Config.lang}` ;
        else
         urlApi = `${urlApi}q=${Config.location}&appid=${Config.apikey}&units=${Config.unit}&lang=${Config.lang}` ;
        const api_call = await fetch(urlApi);
        const data = await api_call.json();
        if (Config.location) {
            let code = data.weather[0].id;
            let icon = weatherIcons[code].icon;
            if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
                icon = 'day-' + icon;
            }
            icon = prefix + icon;
            this.setState({
                temperature: (Math.round(data.main.temp*10)/10),
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: false,
                icon: icon
            });
        } else {
            this.setState({
                temperature: null,
                city: null,
                country: null,
                humidity: null,
                description: null,
                icon:null,
                error: "Please enter the values."
            });
        }
    }
    componentDidMount() {
        this.getLocation();
        setInterval(() => this.getWeather(), 3600000);
    }
    render() {
        return (
            <div className="app_weather">
                {!this.state.error && <div>
                    {!this.state.latitude && !this.state.longitude && <div className="app_weather_default">Default city</div>}
                    <p className="app_weather_location">{this.state.city},{this.state.country}</p>
                    <div className="app_weather_code"><i className={`${ this.state.icon }`}></i>  <span>{this.state.temperature}&deg;c</span></div>
                </div>}
                {this.state.error && <div>Erreur lors de la récupéraion des informations</div>}
            </div>
        )
    }
}
export default Weather;