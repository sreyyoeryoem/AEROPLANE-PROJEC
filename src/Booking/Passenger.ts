import { Booking} from "../Booking/Booking"

export class Passenger{
    bookings: Booking[] =[];
 
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
}