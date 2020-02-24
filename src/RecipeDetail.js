import React, { Component } from 'react';

class RecipeDetail extends Component {
    render() {
        // let imageUrl = `https://spoonacular.com/recipeImages/${this.props.id}-480x360.jpg`;
        // console.log("url in detail" + imageUrl)
        const recipeDetailStyle = {
            backgroundColor: "grey"
        }

        return(
            <div style={recipeDetailStyle}>
                <h2>{this.props.title}</h2>
                <img src={this.props.imageUrl} alt={this.props.title}></img>
                {/* {this.props.summary}  */}
                <h4>{this.props.sourceName}</h4>
                <h4>{this.props.sourceUrl}</h4>
                <p>{`Vegetarian: ${this.props.veggie ? "Yes" : "No"}`}</p>
                <p>{`Cooktime: ${this.props.cookTime ? this.props.cookTime : "N/A"}`}</p>
            </div>
        )
    }
}

export default RecipeDetail;