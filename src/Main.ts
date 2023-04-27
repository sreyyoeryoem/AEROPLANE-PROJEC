import { Passenger } from './Booking/Passenger';
import { Airport } from './Airport';
import { Flight } from './Airoline/Flight';
import { Gate } from './Gate';
import { Trip } from './Booking/Trip';
import { Seat } from './Booking/seat';
import { Booking } from './Booking/Booking';
import { Airline } from './Airoline/Airline';
import { Aeroplane } from './Airoline/Aeroplane';
import { Layout } from './Booking/Layout';
import { Employee } from './Airoline/Employee/Employee';
import { Gender } from './Airoline/Employee/Gender';
import { Route } from './Airoline/Route';


let sreyyoer = new Passenger ("sreyyoer","Yoem",19,976388651);
let thana = new Passenger ("thana","choun",19,976388651);
// let singdav = new Passenger ("singdav","Thoun",19,0976388651);
let start = new Date("December 17, 2022  8:00:00");
let flight1 = new Flight ("AP43","Cabodiar","singapor",start);
let flight2 = new Flight ("AP43","Cabodiar","singapor",start);
let flight3 = new Flight ("AP43","Cabodiar","singapor",start);

let tripsreyyoer1 = new Trip ("Cambodia","UK");
let tripsreyyoer2 = new Trip ("UK","Cambodia");
let tripThana = new Trip ("Cambodia","USA");
tripsreyyoer1.addFlight(flight1);
tripsreyyoer2.addFlight(flight2);
tripThana.addFlight(flight3);

let seatA1 = new Seat ("A01");
let seatA2 = new Seat ("A02");

let sreyyoerBooking = new Booking (seatA1);
let thanaBooking = new Booking (seatA2);

let gates1 = new Gate ('thana');
let gates2 = new Gate ('sreyyoer');

let airport = new Airport('Thailand','A2103');
let airline = new Airline('Holao','001');
let layout = new Layout('3cm','5cm');

let aeroplane = new Aeroplane(31,'NIM',layout);
let employee1 = new Employee('thana',21,'skun',1000,Gender.famale);
let employee2 = new Employee('sreyyoer',20,'prey ',1000,Gender.famale)
let route1 = new Route('eeeeeeeee');
let route2 = new Route('aaaaaaaa');


airport.addGate(gates1);
airport.addGate(gates2);
airport.addAirline(airline);
airport.addRoute(route1);
airport.addRoute(route2);

airline.addAeroplane(aeroplane);
airline.addEmployee(employee1);
airline.addEmployee(employee2);

aeroplane.addEmployee(employee1);
aeroplane.addEmployee(employee2);
aeroplane.addFlights(flight1);
aeroplane.addFlights(flight2);
aeroplane.addFlights(flight3);
aeroplane.addPassenger(thana);
aeroplane.addPassenger(sreyyoer);

layout.addSeat(seatA1);
layout.addSeat(seatA2);

sreyyoerBooking.addTrip(tripsreyyoer1)
thanaBooking.addTrip(tripThana)

// sreyyoerBooking.addTrip(tripsreyyoer2)
sreyyoer.addBooking(sreyyoerBooking)
thana.addBooking(thanaBooking)

// console.log(sreyyoer)
// console.log(airport);
// console.log(airline);
// console.log(aeroplane);
// console.log(layout);


