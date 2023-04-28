
import { Flight } from "./Flight";
import { Layout } from "../Booking/Layout";
import { Passenger } from "../Booking/Passenger";
import { Employee } from "./Employee/Employee";

export class Aeroplane{
    private employee: Employee[]=[];
    private flights:Flight[]=[];
    private layout:Layout; 
    private passengers:Passenger[]=[]; 
    constructor(private aeroplane_number:number,private type:string,layout:Layout){
        this.aeroplane_number = aeroplane_number;
        this.type = type;
        this.layout = layout;
    }
    addEmployee(employee:Employee){
        this.employee.push(employee);
    }
    addFlights(flights:Flight){
        this.flights.push(flights);
    }
    addPassenger(passengers:Passenger){
        this.passengers.push(passengers);
    }
    addFlight(flight:Flight){
        this.flights.push(flight)
    }
    addpassenger(passenger:Passenger){
        this.passengers.push(passenger)
    }
}