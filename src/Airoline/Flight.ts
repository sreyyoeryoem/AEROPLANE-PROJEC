import { Route } from './Route';
import { Meal } from './Meal';
export class Flight{
    // private route:Route;
    private Meals:Meal[]=[];
    
    constructor(private flight_number: string,private departure:string,private arrival:string,private date:Date){
        this.flight_number = flight_number;
        this.arrival = arrival
        this.date = date;
        // this.route = route;
    }
    addMeal(Meals:Meal){
        this.Meals.push(Meals);
    }
}