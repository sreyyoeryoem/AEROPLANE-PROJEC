import { Seat } from "./seat";
import { Trip } from "./Trip";
import { Passenger } from "./Passenger";
import { Meal } from "../Airoline/Meal";
export class Booking{
    seat:Seat;
    tripTo:Trip[]=[];
    passenger:Passenger;
    tripFrom?:Trip;
    
    constructor(public idBooking:string,passenger:Passenger, public meal:Meal, seat:Seat,tripFrom?: Trip){
        this.idBooking = idBooking;
        this.seat = seat;
        this.tripFrom = tripFrom;
        this.passenger = passenger;
        this.meal = meal;
       
    }
    addTripTo (trip:Trip) {
        this.tripTo.push(trip);
    }

    getTripTo(){
        return this.tripTo;
    }
}



