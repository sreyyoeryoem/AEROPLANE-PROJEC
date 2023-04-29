import { Booking} from "../Booking/Booking"
import { Bag } from "./Bag";
import { Date } from "../Airoline/Date";
export class Passenger{
    bookings: Booking[] =[];
    bags:Bag [] = [];
    constructor(private firstName:string,private lastName:string,private age:number,private phoneNumber:number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
    }
    addBooking(booking:Booking){
        this.bookings.push(booking);
    }
    getBooking(){
        return this.bookings
    }

    addBag(bags:Bag){
        this.bags.push(bags);
    }
    getGateNumber(flightNumber:string,date:Date):string{
        for(let booking of  this.bookings){
            for(let trip of booking.getTripTo()){
                for(let flight of trip.getFlight()){
                    if(flight['flight_number'] == flightNumber && flight["date"].isEqual(date)){
                        // return flight["gates"]
                        return(flight["gates"]["name"])
                    }            
                }
            }
        }
    }
}