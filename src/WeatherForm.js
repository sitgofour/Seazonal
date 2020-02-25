import React, { Component } from 'react';


class WeatherForm extends Component {
    
    render() {

        const formWrapper = {
            color: "white",
            backgroundColor: "rgba(100, 100, 100, .5)",
            margin: "5em 3em",
            width: "500px",
            padding: "2em",
            borderRadius: "8px",
            fontSize: "26px",
        }

        const formInputStyle = {
            width: "33%",
            height: "1.4em",
            fontSize: "18px"
        }

        const formButtonStyle = {
            background: "rgba(100, 0, 0, .5)",
            color: "white",
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
                    <button onClick={this.props.handleSubmit} style={formButtonStyle}>Click</button>
                </div>
            </div>
        )
    }
}

export default WeatherForm;