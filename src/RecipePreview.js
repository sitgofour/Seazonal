import React, { Component } from 'react';

class RecipePreview extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.props.getRecipeDetail(this.props.id);
    }

    render() {
        let imageUrl = `https://spoonacular.com/recipeImages/${this.props.id}-480x360.jpg`;

        const recipeStyle = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            maxWidth: "30%",
            backgroundColor: "grey",
            padding: "10px",
            margin: "2rem"
        }

        const recipeImage = {
            width: "80%",
            borderRadius: "10px",
            marginTop: "10px"
        }

        const recipeMoreButton = {
            backgroundColor: "white",
            padding: "8px",
            textTransform: "uppercase",
            fontSize: "16px",
            borderRadius: "5px"
        }


        return(
            <div onClick={this.handleClick} style={recipeStyle}>
                <div style={recipeImage}>
                    <img src={imageUrl} alt={this.props.title} style={recipeImage}></img>
                </div>
                <div className="recipe-title">
                    <h3>{this.props.title}</h3>
                </div>
                <div style={recipeMoreButton}>
                    <p>click for more</p>
                </div>
            </div>
        )
    }
}

export default RecipePreview;