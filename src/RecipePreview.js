import React, { Component } from 'react';

class RecipePreview extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.props.showRecipeDetail(this.props.id);
    }

    render() {
        let imageUrl = `https://spoonacular.com/recipeImages/${this.props.id}-480x360.jpg`;

        return(
            <div onClick={this.handleClick} className="RecipePreview-wrapper">
                <div className="recipe-image">
                    <img src={imageUrl} alt={this.props.title}></img>
                </div>
                <div className="recipe-title">
                    <h3>{this.props.title}</h3>
                </div>
                <div>
                    <p>click for more</p>
                </div>
            </div>
        )
    }


}

export default RecipePreview;