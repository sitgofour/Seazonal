import React, { Component } from 'react';



class WeatherForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <button onClick={this.props.handleSubmit}>Click</button>
            </div>
        )
    }
}

export default WeatherForm;