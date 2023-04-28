
import { Flight } from "./Flight";
import { Layout } from "../Booking/Layout";
import { Passenger } from "../Booking/Passenger";


export class Aeroplane{
    // private employee: Employee[]=[];
    private flights:Flight[]=[];
    private layout:Layout; 
    private passengers:Passenger[]=[]; 
    constructor(private aeroplane_number:number,private type:string,layout:Layout){
        this.aeroplane_number = aeroplane_number;
    }
    addFlight(flight:Flight){
        this.flights.push(flight)
    }
    addpassenger(passenger:Passenger){
        this.passengers.push(passenger)
    }
}