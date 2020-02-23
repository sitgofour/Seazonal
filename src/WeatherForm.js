import React, { Component } from 'react';


class WeatherForm extends Component {
    
    render() {
        return ( 
            <div className="WeatherForm-wrapper">
            <div className="WeatherForm-input">
                <input onChange={this.props.handleInputChange}></input>
            </div>
            <div className="WeatherForm-submit">
                <button onClick={this.props.handleSubmit}>Click</button>
            </div>
            </div>

        )
    }
}

export default WeatherForm;