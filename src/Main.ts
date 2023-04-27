import { Passenger } from './Booking/Passenger';
import { Airport } from './Airport';
import { Flight } from './Airoline/Flight';
import { Gate } from './Gate';
import { Trip } from './Booking/Trip';
import { Seat } from './Booking/seat';
import { Booking } from './Booking/Booking';


let sreyyoer = new Passenger ("sreyyoer","Yoem",19,976388651);
let thana = new Passenger ("thana","choun",19,976388651);
// let singdav = new Passenger ("singdav","Thoun",19,0976388651);
let start = new Date("December 17, 2022  16:00:00");
let flight1 = new Flight ("AP43","Cabodiar","singapor",start)

let flight2 = new Flight ("AP43","Cabodiar","singapor",start)
let flight3 = new Flight ("AP43","Cabodiar","singapor",start)

let tripsreyyoer1 = new Trip ("Cambodia","UK");
let tripsreyyoer2 = new Trip ("UK","Cambodia");
let tripThana = new Trip ("Cambodia","USA");
tripsreyyoer1.addFlight(flight1);
tripsreyyoer1.addFlight(flight2);
tripsreyyoer1.addFlight(flight3);

let seatA1 = new Seat ("A01")
let seatA2 = new Seat ("A02")

let sreyyoerBooking = new Booking (seatA1)
let thanaBooking = new Booking (seatA2)


sreyyoerBooking.addTrip(tripsreyyoer1)
thanaBooking.addTrip(tripThana)

// sreyyoerBooking.addTrip(tripsreyyoer2)
sreyyoer.addBooking(sreyyoerBooking)
thana.addBooking(thanaBooking)

console.log(sreyyoer)
