import React, { Component } from 'react';


class NewOrMore extends Component {
    render() {
        const buttonWrapper = {
            display: "flex",
            justifyContent: "center",
            backgroundColor: "red"
        }

        const buttonDiv = {
            margin: "2em",
        }

        const buttonStyle = {
            padding: ".8em 1.5em",
            fontSize: "16px",
            textDecoration: "none",
            border: "none",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px"
        }

        return(
            <div style={buttonWrapper}>
                <div style={buttonDiv}>
                    <button onClick={this.props.clickedNewLocation} style={buttonStyle}>Search New Location</button>
                </div>
                <div style={buttonDiv}>
                    <button onClick={this.props.clickedMoreRecipes} style={buttonStyle}>More Recipes</button>
                </div>
            </div>
        )
    }
}

export default NewOrMore;