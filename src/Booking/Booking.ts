import { Seat } from "./seat";
import { Trip } from "../Human/Trip";
export class Booking{
    seat:Seat;
    trip:Trip[]=[];
    constructor(seat:Seat){
        this.seat = seat;
       
    }
    addTrip (trip:Trip) {
        this.trip.push(trip);
    }
}