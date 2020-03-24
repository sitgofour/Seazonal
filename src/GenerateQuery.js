
import {coldFoods, neutralFoods, hotFoods} from './Foods.js';


const GenerateQuery = (temp) => {
    if(temp <= 65) {
        let randIndex =  Math.floor(Math.random() * hotFoods.length);
        return coldFoods[randIndex];
    } else if(temp <= 80) {
        let randIndex = Math.floor(Math.random() * neutralFoods.length);
        return neutralFoods[randIndex];
    } else {
        let randIndex = Math.floor(Math.random() * coldFoods.length);
        return hotFoods[randIndex];
    }
}


export default GenerateQuery;