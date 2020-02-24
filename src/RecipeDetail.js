import React, { Component } from 'react';

class RecipeDetail extends Component {
    render() {
        return(
            <div>
                {this.props.title}
                {this.props.summary}
                {this.props.sourceName}
                {this.props.sourceUrl}
                {this.props.veggie}
                {this.props.cookTime}
            </div>
        )
    }
}

export default RecipeDetail;