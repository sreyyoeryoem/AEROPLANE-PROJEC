import { Pilot } from "./Employee/Pilot";
import { Flight } from "./Flight";
import { Layout } from "../Booking/Layout";
import { Passenger } from "../Booking/Passenger";
import { Employee } from "./Employee/Employee";

<<<<<<< HEAD
export class Aeroplan{
    private employee: Pilot[]=[];
    private flights:Flight[]=[];
    private layout:Layout; 
    private passengers: Passenger[]=[];

    constructor(private registration_number:string,private type:string,layout:Layout){
        this.registration_number = registration_number;
        this.layout = layout;
    }
    addpassenger(passenger:Passenger){
        this.passengers.push(passenger);
=======
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
>>>>>>> 1003fec0185a2e9e6f3b34e54c10cb7723f1d931
    }
    addFlight(flight:Flight){
        this.flights.push(flight)
    }
    getAllPassengers(){
        return this.passengers;
    }
    getflight(){
        return this.flights;
    }
    
  
}