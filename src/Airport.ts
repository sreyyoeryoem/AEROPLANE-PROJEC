import { Airline } from "./Airoline/Airline";
import { Booking } from "./Booking/Booking";
import { Gate } from "./Gate";
export class Airport{
    private gates: Gate[] = [];
    private airlines:Airline[]=[];
    private bookings:Booking[]=[];
    constructor(private name: string){
        this.name = name;  
    }
    addGate(gate: Gate){
        this.gates.push(gate);
    }
    addAirline(airline: Airline){
        this.airlines.push(airline)
    }
    getAllAirlines(){
        return this.airlines
    }
    addBooking(booking: Booking){
        this.bookings.push(booking)
    }
    getBooking(){
        return this.bookings;
    }
    
    getFlightsPassenger(numberCheck: string){
        let result = [];
        let flightofpassenger = [];
        for(let booking of this.getBooking()){
            if((booking.idBooking) === numberCheck){
                result.push(booking.passenger)
                for(let trip of booking.getTripTo()){
                    for(let fligh of trip.getFlight()){
                        flightofpassenger.push(fligh)
                    }
                }
                result.push(flightofpassenger)
            }
        }
        return result
    } 
}


