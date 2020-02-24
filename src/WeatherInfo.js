import React, { Component } from 'react';

class WeatherInfo extends Component {
    render() {
        let iconUrl = `https://openweathermap.org/img/wn/${this.props.iconId}@2x.png`;
        console.log(iconUrl);
        return(
            <div>
                <h2>{this.props.cityName}</h2>
                <h3>{this.props.temp}</h3>
                <img src={iconUrl} alt={this.props.message}></img>
                <h3>{this.props.message}</h3>               
            </div>
        )
    }
}

export default WeatherInfo;