import React, { Component } from 'react';
import Config from './Config';
<<<<<<< HEAD
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
=======
class Weather extends Component {
    constructor() {
        super()
        this.state = {
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: undefined
        }
    }
    getWeather = async () => {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${Config.location}&appid=${Config.apikey}&units=${Config.unit}`);
        const data = await api_call.json();
        if (Config.location) {
            this.setState({
                temperature: data.main.temp,
>>>>>>> b682124d1f2437bc2837856cb1bf357d3a3c287f
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
<<<<<<< HEAD
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
=======
                error: ""
            });
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter the values."
            });

        }
    }
    componentDidMount() {
        this.getWeather();
        setInterval(() => this.getWeather(), 3600000)
>>>>>>> b682124d1f2437bc2837856cb1bf357d3a3c287f
    }
    render() {
        return (
            <div className="app_weather">
<<<<<<< HEAD
                {!this.state.error && <div>
                    {!this.state.latitude && !this.state.longitude && <div className="app_weather_default">Default city</div>}
                    <p className="app_weather_location">{this.state.city},{this.state.country}</p>
                    <div className="app_weather_code"><i className={`${ this.state.icon }`}></i>  <span>{this.state.temperature}&deg;c</span></div>
                </div>}
                {this.state.error && <div>Erreur lors de la récupéraion des informations</div>}
=======
                {Config.location && <p className="weather__key"> Location: <span className="weather__value"> {Config.location}</span></p>}
                {this.state.temperature && <p className="weather__key"> Temperature:<span className="weather__value"> {this.state.temperature}</span></p>}
                {this.state.humidity && <p className="weather__key"> Humidity:<span className="weather__value"> {this.state.humidity} </span></p>}
                {this.state.description && <p className="weather__key"> Conditions:<span className="weather__value"> {this.state.description} </span></p>}
                {this.state.error && <p className="weather__error">{this.state.error}</p>}
>>>>>>> b682124d1f2437bc2837856cb1bf357d3a3c287f
            </div>
        )
    }
}
export default Weather;