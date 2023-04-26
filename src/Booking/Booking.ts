import { Seat } from "./seat";
import { Trip } from "../Flight/Trip";
export class Booking{
    seat:Seat;
    trip:Trip[]=[];
    constructor(private Departure: string,private Arrival: string,seat:Seat){
        this.Departure = Departure;
        this.Arrival = Arrival;
    }
}