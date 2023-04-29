import { Seat } from "./seat";
import { Trip } from "./Trip";
import { Passenger } from "./Passenger";
export class Booking{
    seat:Seat;
    tripTo:Trip[]=[];
    passenger:Passenger;
    tripFrom?:Trip;
   
    constructor(public idBooking:string,passenger:Passenger, seat:Seat,tripFrom?: Trip){
        this.idBooking = idBooking;
        this.seat = seat;
       this.tripFrom = tripFrom;
       this.passenger = passenger;
    }
    addTripTo (trip:Trip) {
        this.tripTo.push(trip);
    }
    getAllTrip (){
        return this.tripTo;
    }
    getTripTo(){
        return this.tripTo;
    }

}