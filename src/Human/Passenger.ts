import { Booking} from "../Booking/Booking"

export class Passenger{
    bookings: Booking[] =[];
 
    constructor(private name:string,private age:number,private phoneNumber:number) {
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
    }
}