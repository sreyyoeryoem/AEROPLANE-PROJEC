import { Pilot } from "./Employee/Pilot";
import { Flight } from "./Flight";
import { Layout } from "../Booking/Layout";
import { Passenger } from "../Booking/Passenger";
import { Employee } from "./Employee/Employee";
import { Meal } from "./Meal";

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
    getFlightOfpassenger(){
        let flightofpassenger = [];
        for(let passenger of this.passengers){
            for(let booking of passenger.getBooking()){
                for(let trip of booking.getTripTo()){
                    for (let flight of trip.getFlight()){
                        flightofpassenger.push(flight);
                    }
                }
            }
        }
        return flightofpassenger

    }
    getMealFromFlights(fligh:Flight){
      let resultMeals = [];
        for(let passenger of this.passengers){
            for(let booking of passenger.getBooking()){
                for(let trip of booking.getTripTo()){
                    for (let flight of trip.getFlight()){
                       if(fligh["flight_number"] == flight["flight_number"]){        
                            resultMeals.push(booking.meal);                          
                       }
                    }
                }
            }
        }
        return resultMeals
    }
}

