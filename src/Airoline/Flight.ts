import { Route } from './Route';
import { Passenger } from '../Booking/Passenger';
export class Flight{
    private route:Route;
    constructor(private flight_number: string,private departure:string,private arrival:string,private date:Date, private gates:Gate){
        this.flight_number = flight_number;
        this.arrival = arrival
        this.date = date;
        this.gates = gates;
    }

    // addMeal(meal:Meal){
    //     this.Meals.push(meal);
    // }
}