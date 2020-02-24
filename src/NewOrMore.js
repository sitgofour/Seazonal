import React, { Component } from 'react';


class NewOrMore extends Component {
    render() {
        return(
            <div>
                <div>
                    <button onClick={this.props.clickedNewLocation}>Search New Location</button>
                </div>
                <div>
                    <button onClick={this.props.clickedMoreRecipes}>More Recipes</button>
                </div>
            </div>
        )
    }
}

export default NewOrMore;