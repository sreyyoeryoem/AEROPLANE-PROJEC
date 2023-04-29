import { Booking} from "../Booking/Booking"
import { Bag } from "./Bag";
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
    getGateNumber(flightNumber:string,date:Date){
        
    }
    
}