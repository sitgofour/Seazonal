import React, { Component } from 'react';
import axios from 'axios';
import WeatherForm from "./WeatherForm.js";


class FetchTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: "default name",
            temp: "default temp",
            message: "default message"
        }
        this.getWeather = this.getWeather.bind(this);
        this.getRecipe = this.getRecipe.bind(this);
    }


    getWeather = async () => {
        // let url =  "api.openweathermap.org/data/2.5/weather?zip=91750,&appid=7518c30bdac34910fe5c37ce6a1c34b9";
        let url = 'https://api.openweathermap.org/data/2.5/weather?zip=91750,&appid=7518c30bdac34910fe5c37ce6a1c34b9'
        try{
            console.log(axios.get);
            console.log(url);
            const response = await axios.get(url);
            console.log(response.data);
            const data = response.data;
            this.setState({ 
                cityName: data.name,
                temp: data.main.temp,
                message: `Looks like ${data.weather[0]["main"]} ` 
            })
        } catch (error) {
            console.log("error here ev: " + error);
        }
        this.getRecipe();
    }


    getRecipe = async () => {
        let url = 'https://api.spoonacular.com/recipes/search?query=pizza&number=3&apiKey=6c1757b500464204a46bc201200b492f';
        try {
            const response = await axios.get(url);
            const recipes = response.data.results;
            console.log(recipes);
        }
        catch(error) {
            console.log("there was una error!!!" + error);
        }
    }

    // componentDidMount() {
    //     this.getWeather();
    // }

    render() {

        return(
            <div className="FetchTest">
                <h1>Seazonal</h1>
                <h2>{this.state.cityName}</h2>
                <h3>{this.state.temp}</h3>
                <h3>{this.state.message}</h3>
                <WeatherForm handleSubmit={this.getWeather}/>
            </div>
        )
    }
 }



 export default FetchTest;



 // 6c1757b500464204a46bc201200b492f

 // ?apiKey=6c1757b500464204a46bc201200b492f

 //  https://api.spoonacular.com/recipes/search?query=cheese&number=2&apiKey=6c1757b500464204a46bc201200b492f