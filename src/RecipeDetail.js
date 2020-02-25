import React, { Component } from 'react';

class RecipeDetail extends Component {
    render() {
        // let imageUrl = `https://spoonacular.com/recipeImages/${this.props.id}-480x360.jpg`;
        // console.log("url in detail" + imageUrl)
        const recipeDetailStyle = {
            backgroundColor: "grey"
        }

        const linkStyle = {
            backgroundColor: "white",
            color: "black",
            padding: ".5em",
            borderRadius: "5px",
            textTransform: "uppercase",
            textDecoration: "none",
        }

        return(
            <div style={recipeDetailStyle}>
                <h2>{this.props.title}</h2>
                <img src={this.props.imageUrl} alt={this.props.title}></img>
                {/* {this.props.summary}  */}
                <h4>{this.props.sourceName}</h4>
                <a target="blank" href={this.props.sourceUrl}><h4 style={linkStyle}>Take me to recipe source</h4></a>
                <p>{`Vegetarian: ${this.props.veggie ? "Yes" : "No"}`}</p>
                <p>{`Cooktime: ${this.props.cookTime ? this.props.cookTime : "N/A"}`}</p>
                <button onClick={this.props.back}>back to results</button>
            </div>
        )
    }
}

export default RecipeDetail;