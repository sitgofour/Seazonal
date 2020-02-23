import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import WeatherForm from "./WeatherForm.js";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: "default name",
            temp: "default temp",
            message: "default message",
            zipCode: null
        }
        this.getWeather = this.getWeather.bind(this);
        this.getRecipe = this.getRecipe.bind(this);
        this.getRecipeDetail = this.getRecipeDetail.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (event) => {
        this.setState({
            zipCode: event.target.value
        });
    }

    getWeather = async () => {
        // let url =  "api.openweathermap.org/data/2.5/weather?zip=91750,&appid=7518c30bdac34910fe5c37ce6a1c34b9";
        let zipCode = parseInt(this.state.zipCode);

        let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},&appid=7518c30bdac34910fe5c37ce6a1c34b9`
        try{
            const response = await axios.get(url);
            const data = response.data;
            this.setState({ 
                cityName: data.name,
                temp: data.main.temp,
                message: `Looks like ${data.weather[0]["main"]} ` 
            });
        } catch (error) {
            console.log("error in getWeather: " + error);
        }
        this.getRecipe();
    }


    getRecipeDetail = async (id) => {
        let url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=6c1757b500464204a46bc201200b492f`;
        
        try {
            const response = await axios.get(url);
            let recipeDetails = response.data;
            console.log(recipeDetails.title);

        }
        catch(error) {
            console.log("err in getRecipeDetails: " + error);
        }
    }

    defineRecipeQuery = () => {
        if(this.state.temp > 285) {
            console.log("defined as cold");
            return "cold";
        } else {
            console.log("defined as hot");
            return "hot";
        }
    }

    getRecipe = async () => {
        let recipeQuery = this.defineRecipeQuery();
        let url = `https://api.spoonacular.com/recipes/search?query=${recipeQuery}&number=6&apiKey=6c1757b500464204a46bc201200b492f`;
        try {
            const response = await axios.get(url);
            const recipes = response.data.results;
            console.log(recipes);
            console.log("id here: " + recipes[0].id);
            // this.getRecipeDetail(recipes[0].id);
        }
        catch(error) {
            console.log("error in getRecipe: " + error);
        }
    }

    render() {

        return(
            <div className="App">
                <h1>Seazonal</h1>
                <h2>{this.state.cityName}</h2>
                <h3>{this.state.temp}</h3>
                <h3>{this.state.message}</h3>
                <WeatherForm 
                    handleSubmit={this.getWeather}
                    handleInputChange={this.handleInputChange}
                />
            </div>
        )
    }
 }



 export default App;



 // 6c1757b500464204a46bc201200b492f

 // ?apiKey=6c1757b500464204a46bc201200b492f

 //  https://api.spoonacular.com/recipes/search?query=cheese&number=2&apiKey=6c1757b500464204a46bc201200b492f