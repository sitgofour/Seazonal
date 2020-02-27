import React, { Component } from 'react';

class WeatherInfo extends Component {
    render() {
        let iconUrl = `https://openweathermap.org/img/wn/${this.props.iconId}@2x.png`;

        // converts Kelvin to Fahrenheit and rounds
        let tempInF = `${Math.round(((this.props.temp - 273.15) * 9/5) + 32)}°`;

        const weatherInfo = {
            letterSpacing: "10px",
            fontSize: "18px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap"
        }
        const weatherItem = {
            margin: ".4em",
            backgroundColor: "rgba(79, 178, 134, .9)",
            color: "white",
            padding: ".8em",
            borderRadius: "10px"
        }

        const weatherIconDiv = {
            margin: "1em",
            backgroundColor: "rgba(79, 178, 134, .9)",
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
                <div style={weatherIconDiv}>
                    <img src={iconUrl} alt={this.props.message} style={iconItemStyle}></img>
                    <h3 style={iconItemStyle}>{this.props.message}</h3> 
                </div>
                <h3 style={weatherItem}>{this.props.cityName}</h3>
                <h2 style={weatherItem}>{tempInF}</h2>
            </div>
        )
    }
}

export default WeatherInfo;