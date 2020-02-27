import React, { Component } from 'react';


class NewOrMore extends Component {
    render() {
        const buttonWrapper = {
            display: "flex",
            justifyContent: "center",
        }

        const buttonDiv = {
            margin: "2em",
        }

        const buttonStyle = {
            cursor: "pointer",
            fontFamily: "inherit",
            letterSpacing: ".3px",
            padding: ".8em 1.5em",
            fontSize: "20px",
            textDecoration: "none",
            border: "none",
            backgroundColor: "rgba(60, 137, 109, .95)",
            color: "#f5fffa",
            borderRadius: "5px",
            textTransform: "uppercase"
        }

        return(
            <div style={buttonWrapper}>
                <div style={buttonDiv}>
                    <button onClick={this.props.clickedNewLocation} style={buttonStyle}>New Search</button>
                </div>
                {/* <div style={buttonDiv}>
                    <button onClick={this.props.clickedMoreRecipes} style={buttonStyle}>More Recipes</button>
                </div> */}
            </div>
        )
    }
}

export default NewOrMore;