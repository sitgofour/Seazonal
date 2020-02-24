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


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: "default name",
            temp: "default temp",
            message: "default message",
            zipCode: null,
            activeRecipes: null,
            showPreviews: false,
            showForm: true,
            showDetail: false,
            recipeDetails: null
        }
        this.getWeather = this.getWeather.bind(this);
        this.getRecipe = this.getRecipe.bind(this);
        this.getRecipeDetail = this.getRecipeDetail.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.generateRecipePreviews = this.generateRecipePreviews.bind(this);
        this.showFormOrWeather = this.showFormOrWeather.bind(this);
        this.clickedNewLocation = this.clickedNewLocation.bind(this);
        this.clickedMoreRecipes = this.clickedMoreRecipes.bind(this);
        this.showRecipeDetail = this.showRecipeDetail.bind(this);
    }

    handleInputChange = (event) => {
        this.setState({
            zipCode: event.target.value
        });
    }

    clickedNewLocation = () => {
        console.log("new location");
    }

    clickedMoreRecipes = () => {
        console.log("clicked more recipes");
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
                message: `Looks like ${data.weather[0]["main"]} `,
                showForm: false 
            });
        } catch (error) {
            console.log("error in getWeather: " + error);
        }
        this.getRecipe();
    }


    getRecipeDetail = async (id) => {
        let url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=6c1757b500464204a46bc201200b492f`;
        
        try {
            console.log("getRecipeDetail is firing!");
            const response = await axios.get(url);
            let recipeDetails = response.data;
            for(const p in recipeDetails) {
                console.log(p);
            }
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
            this.setState({
                activeRecipes: recipes,
                showPreviews: true
            });
            // this.getRecipeDetail(recipes[0].id);
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

    showRecipeDetail = (recipeId) => {
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
                />
            );
        } 
    }
    
    showFormOrWeather = () => {
        let {cityName, temp, message} = this.state;
        if(this.state.showForm) {
            return <WeatherForm 
                    handleSubmit={this.getWeather}
                    handleInputChange={this.handleInputChange}
                    />
        } else {
            return (
                <Fragment>
                    <WeatherInfo cityName={cityName} temp={temp} message={message}/>
                    <NewOrMore clickedNewLocation={this.clickedNewLocation} clickedMoreRecipes={this.clickedMoreRecipes}/> 
                </Fragment>
            );
        }
    }

    render() {
        return(
            <div className="App">
                <NavBar />
                {this.showFormOrWeather()}
                <div>
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



 // 6c1757b500464204a46bc201200b492f

 // ?apiKey=6c1757b500464204a46bc201200b492f

 //  https://api.spoonacular.com/recipes/search?query=cheese&number=2&apiKey=6c1757b500464204a46bc201200b492f