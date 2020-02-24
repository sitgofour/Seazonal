import React, { Component } from 'react';

class WeatherInfo extends Component {
    render() {
        return(
            <div>
                <h2>{this.props.cityName}</h2>
                <h3>{this.props.temp}</h3>
                <h3>{this.props.message}</h3>               
            </div>
        )
    }
}

export default WeatherInfo;