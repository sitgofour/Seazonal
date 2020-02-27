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
            minWidth: "250px",
            backgroundColor: "rgba(80, 255, 177, .8)",
            padding: "10px",
            margin: "2rem",
            borderRadius: "7px"
        }

        const recipeImage = {
            width: "80%",
            border: "10px solid rgba(112, 46, 62, .9)",
            borderRadius: "10px",
            marginTop: "10px"
        }

        const recipeMoreButton = {
            cursor: "pointer",
            backgroundColor: "rgba(60, 137, 109, 1)",
            color: "#f5fffa",
            padding: "2px 5px",
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