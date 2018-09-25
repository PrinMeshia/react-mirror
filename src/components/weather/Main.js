import React, { Component } from 'react';
import Config from './Config';
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
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
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
    }
    render() {
        return (
            <div className="app_weather">
                {Config.location && <p className="weather__key"> Location: <span className="weather__value"> {Config.location}</span></p>}
                {this.state.temperature && <p className="weather__key"> Temperature:<span className="weather__value"> {this.state.temperature}</span></p>}
                {this.state.humidity && <p className="weather__key"> Humidity:<span className="weather__value"> {this.state.humidity} </span></p>}
                {this.state.description && <p className="weather__key"> Conditions:<span className="weather__value"> {this.state.description} </span></p>}
                {this.state.error && <p className="weather__error">{this.state.error}</p>}
            </div>
        )
    }
}
export default Weather;