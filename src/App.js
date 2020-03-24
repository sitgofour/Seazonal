import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import WeatherForm from "./WeatherForm.js";
import RecipePreview from './RecipePreview.js';
import RecipeDetail from './RecipeDetail.js';
import WeatherInfo from './WeatherInfo.js';
import NewOrMore from './NewOrMore.js';
import { Fragment } from 'react';
import NavBar from './NavBar.js';
import GenerateQuery from './GenerateQuery.js';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: "default name",
            temp: "default temp",
            message: "default message",
            icon: "",
            zipCode: null,
            activeRecipes: null,
            showPreviews: false,
            showForm: true,
            showDetail: false,
            recipeDetails: null
        }
        this.defaultState = this.state;
        this.getWeather = this.getWeather.bind(this);
        this.getRecipe = this.getRecipe.bind(this);
        this.getRecipeDetail = this.getRecipeDetail.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.generateRecipePreviews = this.generateRecipePreviews.bind(this);
        this.showFormOrWeather = this.showFormOrWeather.bind(this);
        this.clickedNewLocation = this.clickedNewLocation.bind(this);
        this.clickedMoreRecipes = this.clickedMoreRecipes.bind(this);
        this.showRecipeDetail = this.showRecipeDetail.bind(this);
        this.backToResults = this.backToResults.bind(this);
    }

    handleInputChange = (event) => {
        this.setState({
            zipCode: event.target.value
        });
    }

    clickedNewLocation = () => {
        console.log("new location");
        this.setState(this.defaultState);
    }

    clickedMoreRecipes = () => {
        console.log("clicked more recipes");
    }

    backToResults = () => {
        this.setState({
            recipeDetails: false,
            showPreviews: true
        });
    }

    getWeather = async () => {
        let zipCode = parseInt(this.state.zipCode);
        let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},&appid=${process.env.REACT_APP_WEATHER}`;

        try{
            const response = await axios.get(url);
            const data = response.data;
            this.setState({ 
                cityName: data.name,
                temp: data.main.temp,
                message: data.weather[0]["main"],
                icon: data.weather[0]["icon"],
                showForm: false 
            });
        } catch (error) {
            console.log("error in getWeather: " + error);
        }
        this.getRecipe();
    }


    getRecipeDetail = async (id) => {
        let url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_SPOON}`;
        
        try {
            console.log("getRecipeDetail is firing!");
            const response = await axios.get(url);
            let recipeDetails = response.data;
            
            this.setState({
                recipeDetails: {
                    id: recipeDetails.id,
                    image: recipeDetails.image,
                    title: recipeDetails.title,
                    summary: recipeDetails.summary,
                    veggie: recipeDetails.vegetarian,
                    sourceName: recipeDetails.sourceName,
                    sourceUrl: recipeDetails.sourceUrl,
                    cookTime: recipeDetails.readyInMinutes,
                },
                showPreviews: false
            })
        }
        catch(error) {
            console.log("err in getRecipeDetails: " + error);
        }
    }

    // defineRecipeQuery = () => {
    //     if(this.state.temp > 285) {
    //         return "cold";
    //     } else {
    //         return "soup";
    //     }
    // }


    getRecipe = async () => {
        // let recipeQuery = this.defineRecipeQuery();
        let tempF = Math.round(((this.props.temp - 273.15) * 9/5) + 32);
        console.log(tempF);
        let recipeQuery = GenerateQuery(tempF);

        let url = `https://api.spoonacular.com/recipes/search?query=${recipeQuery}&number=6&apiKey=${process.env.REACT_APP_SPOON}`;

        try {
            const response = await axios.get(url);
            const recipes = response.data.results;
            this.setState({
                activeRecipes: recipes,
                showPreviews: true
            });
        }
        catch(error) {
            console.log("error in getRecipe: " + error);
        }
    }

    generateRecipePreviews = () => {
        if(this.state.showPreviews) {
            console.log(this.state.activeRecipes);
            let recipeList = this.state.activeRecipes.map(recipe => 
                <RecipePreview
                    getRecipeDetail={this.getRecipeDetail} 
                    title={recipe.title} 
                    id={recipe.id} 
                    key={recipe.id}/>
            )
            return recipeList;
        } 
    }

    showRecipeDetail = () => {
        if(this.state.recipeDetails) {
            let recipe = this.state.recipeDetails;
            return(
                <RecipeDetail
                    id={recipe.id}
                    title={recipe.title}
                    imageUrl={recipe.image}
                    summary={recipe.summary}
                    veggie={recipe.veggie}
                    sourceName={recipe.sourceName}
                    sourceUrl={recipe.sourceUrl}
                    cookTime={recipe.readyInMinutes}
                    back={this.backToResults}
                />
            );
        } 
    }
    
    showFormOrWeather = () => {
        let {cityName, temp, message, icon} = this.state;
        if(this.state.showForm) {
            return <WeatherForm 
                    handleSubmit={this.getWeather}
                    handleInputChange={this.handleInputChange}
                    />
        } else {
            return (
                <Fragment>
                    <WeatherInfo cityName={cityName} temp={temp} message={message} iconId={icon}/>
                    <NewOrMore clickedNewLocation={this.clickedNewLocation} clickedMoreRecipes={this.clickedMoreRecipes}/> 
                </Fragment>
            );
        }
    }

    render() {
        return(
            <div className="App">
                <NavBar />
                <div>
                    {this.showFormOrWeather()}
                </div>
                <div className="recipe-previews">
                    {this.generateRecipePreviews()}
                </div>
                <div>
                    {this.showRecipeDetail()}
                </div>
            </div>
        )
    }
 }

 export default App;
