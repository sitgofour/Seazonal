import React, { Component } from 'react';

class WeatherInfo extends Component {
    render() {
        let iconUrl = `https://openweathermap.org/img/wn/${this.props.iconId}@2x.png`;
        const weatherInfo = {
            backgroundColor: "green",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
        const weatherItem = {
            margin: "2em",
            backgroundColor: "white",
            padding: ".8em",
            borderRadius: "10px"
        }

        return(
            <div style={weatherInfo}>
                <h2 style={weatherItem}>{this.props.cityName}</h2>
                <h3 style={weatherItem}>{this.props.temp}</h3>
                <div style={weatherItem}>
                    <img src={iconUrl} alt={this.props.message}></img>
                    <h3>{this.props.message}</h3> 
                </div>
              
            </div>
        )
    }
}

export default WeatherInfo;