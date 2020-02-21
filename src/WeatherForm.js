import React, { Component } from 'react';


class WeatherForm extends Component {
    
    render() {
        return (
            <div>
                <button onClick={this.props.handleSubmit}>Click</button>
            </div>
        )
    }
}

export default WeatherForm;