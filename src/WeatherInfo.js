import React, { Component } from 'react';

class WeatherInfo extends Component {
    render() {
        let iconUrl = `https://openweathermap.org/img/wn/${this.props.iconId}@2x.png`;

        // converts Kelvin to Fahrenheit and rounds
        let tempInF = `${Math.round(((this.props.temp - 273.15) * 9/5) + 32)}°`;

        const weatherInfo = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
        const weatherItem = {
            margin: "1em",
            backgroundColor: "rgba(0, 0, 0, .7)",
            color: "white",
            padding: ".8em",
            borderRadius: "10px"
        }

        const weatherIconDiv = {
            margin: "1em",
            backgroundColor: "rgba(0, 0, 0, .7)",
            color: "white",
            padding: "0 .8em",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center"
        }

        const iconItemStyle = {
            margin: ".5em"
        }

        return(
            <div style={weatherInfo}>
                <h3 style={weatherItem}>{this.props.cityName}</h3>
                <h2 style={weatherItem}>{tempInF}</h2>
                <div style={weatherIconDiv}>
                    <img src={iconUrl} alt={this.props.message} style={iconItemStyle}></img>
                    <h3 style={iconItemStyle}>{this.props.message}</h3> 
                </div>
              
            </div>
        )
    }
}

export default WeatherInfo;