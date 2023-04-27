import { Aeroplane } from "./flight/Aeroplane";
import { Passenger } from "./Human/Passenger";
import { Seat } from "./Booking/seat";
import { Booking } from "./Booking/Booking";
import { Flight } from "./flight/Flight";
import { Trip } from "./Flight/Trip";
import { Layout } from "./Booking/Layout";

let seats = new Seat(1);
let trip = new Trip('phnom Penh','Khos kong');
let bookings = new Booking(seats);
let Layouts = new Layout('10cm','20cm');

Layouts.addSeat(seats);
console.log(Layouts);

bookings.addTrip(trip);
console.log(bookings);



