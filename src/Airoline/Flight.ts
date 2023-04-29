import { Route } from './Route';
import { Meal } from './Meal';
import { Passenger } from '../Booking/Passenger';
export class Flight{
    private route:Route;
    private Meals:Meal[]=[];
 
    
    constructor(private flight_number: string,private departure:string,private arrival:string,private date:Date,private meal:Meal){
        this.flight_number = flight_number;
        this.arrival = arrival
        this.date = date;
        this.meal = meal;
    }
   
    addMeal(meal:Meal){
        this.Meals.push(meal);
    }
}