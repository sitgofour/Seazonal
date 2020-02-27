import React, { Component } from 'react';

class RecipeDetail extends Component {
    render() {
        // let imageUrl = `https://spoonacular.com/recipeImages/${this.props.id}-480x360.jpg`;
        // console.log("url in detail" + imageUrl)
        const recipeDetailStyle = {
            backgroundColor: "rgba(80, 255, 177, .8)",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "5px",

        }

        const linkStyle = {
            backgroundColor: "rgba(60, 137, 109, .9)",
            color: "white",
            padding: ".5em",
            borderRadius: "5px",
            textTransform: "uppercase",
            textDecoration: "none",
        }

        const recipeImage = {
            border: "10px solid rgba(112, 46, 62, .9)",
            borderRadius: "5px",
        }

        const buttonStyle = {
            backgroundColor: "rgba(60, 137, 109, .9)",
            border: "none",
            borderRadius: "2px",
            color: "white",
            padding: "15px 32px",
            textAlign: "center",
            textDecoration: "none",
            fontSize: "16px",
            cursor: "pointer",
        }

        const titleStyle = {
            letterSpacing: ".8px"
        }

        return(
            <div style={recipeDetailStyle}>
                <h2 style={titleStyle}>{this.props.title}</h2>
                <img src={this.props.imageUrl} alt={this.props.title} style={recipeImage}></img>
                {/* {this.props.summary}  */}
                <h4>Source: {this.props.sourceName}</h4>
                <a target="blank" href={this.props.sourceUrl} style={{textDecoration: "none"}}><h4 style={linkStyle}>Take me to recipe source</h4></a>
                <p>{`Vegetarian: ${this.props.veggie ? "Yes" : "No"}`}</p>
                <p>{`Cooktime: ${this.props.cookTime ? this.props.cookTime : "N/A"}`}</p>
                <button onClick={this.props.back} style={buttonStyle}>back to results</button>
            </div>
        )
    }
}

export default RecipeDetail;