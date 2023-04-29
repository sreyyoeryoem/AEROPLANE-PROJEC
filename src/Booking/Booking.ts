import { Seat } from "./seat";
import { Trip } from "./Trip";
import { Passenger } from "./Passenger";
import { Meal } from "../Airoline/Meal";
export class Booking{
    seat:Seat;
    tripTo:Trip[]=[];
    passenger:Passenger;
    tripFrom?:Trip;
    meal:Meal[]=[]
    constructor(public idBooking:string,passenger:Passenger, seat:Seat,tripFrom?: Trip){
        this.idBooking = idBooking;
        this.seat = seat;
       this.tripFrom = tripFrom;
       this.passenger = passenger;

    }
    addTripTo (trip:Trip) {
        this.tripTo.push(trip);
    }

    getTripTo(){
        return this.tripTo;
    }
    addMeal(meal:Meal){
        this.meal.push(meal)
    }

}



