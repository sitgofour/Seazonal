import React, { Component } from 'react';


class WeatherForm extends Component {
    
    render() {

        const formWrapper = {
            color: "white",
            backgroundColor: "rgba(60, 137, 109, .6)",
            margin: "5em 3em",
            width: "500px",
            padding: "2em",
            borderRadius: "8px",
            fontSize: "26px",
        }

        const formInputStyle = {
            width: "20%",
            height: "1.4em",
            fontSize: "18px"
        }

        const formButtonStyle = {
            cursor: "pointer",
            background: "rgba(112, 46, 62, .7)",
            color: "#f5fffa",
            width: "25%",
            fontSize: "18px",
            marginTop: "1em",
            padding: ".5em",
        }

        return ( 
            <div style={formWrapper}>
                <div><h4>Enter your Zip Code</h4></div>
                <div>
                    <input onChange={this.props.handleInputChange} style={formInputStyle}></input>
                </div>
                <div>
                    <button onClick={this.props.handleSubmit} style={formButtonStyle}>Search</button>
                </div>
            </div>
        )
    }
}

export default WeatherForm;