
import {coldFoods, neutralFoods, hotFoods} from './Foods.js';


const GenerateQuery = (temp) => {
    console.log(temp);
    console.log(coldFoods);
    console.log(neutralFoods);
    console.log(hotFoods);

    if(temp <= 65) {
        let randIndex =  Math.floor(Math.random() * hotFoods.length);
        console.log("cold");
        return coldFoods[randIndex];
    } else if(temp <= 80) {
        let randIndex = Math.floor(Math.random() * neutralFoods.length);
        console.log("neutral");
        return neutralFoods[randIndex];
    } else {
        let randIndex = Math.floor(Math.random() * coldFoods.length);
        console.log("hot");
        return hotFoods[randIndex];
    }
}


export default GenerateQuery;