import { Passenger } from './Booking/Passenger';
import { Airport } from './Airport';
import { Flight } from './Airoline/Flight';
import { Gate } from './Gate';
import { Trip } from './Booking/Trip';
import { Seat } from './Booking/seat';
import { Booking } from './Booking/Booking';
import { Airline } from './Airoline/Airline';
import { Aeroplan } from './Airoline/Aeroplane';
import { Layout } from './Booking/Layout';
import { Pilot } from './Airoline/Employee/Pilot';
import { Attendant } from './Airoline/Employee/Attendant';
import { Chef } from './Airoline/Employee/chef';
import { Daggage_handler } from './Airoline/Employee/Daggage_handler';
import { Gender } from './Airoline/Employee/Gender';

import { Meal } from './Airoline/Meal';
import { Bag } from './Booking/Bag';





let seatA1 = new Seat ("A01")
let seatA2 = new Seat ("A02")
let seatA3 = new Seat ("A03")

let sreyyeorbag1 = new Bag ("A01") 
let sreyyeorbag2 = new Bag ("A02") 
let thanabag1 = new Bag ("B01") 
let singdavbag1 = new Bag ("B01") 

let sreyyoer = new Passenger ("sreyyoer","Yoem",19,976388651);
let thana = new Passenger ("thana","chhoeun",19,976388651);
let singdav = new Passenger ("singdav","Thoun",19,976388651);

sreyyoer.addBag(sreyyeorbag1)
sreyyoer.addBag(sreyyeorbag2)
thana.addBag(thanabag1)
singdav.addBag(singdavbag1)

let start = new Date("December 6, 2022 3:00:00");

let sreyyoertripTo = new Trip ("Cambodia","UK");


let flight1 = new Flight ("AP43","Cabodiar","singapor",start)

let flight2 = new Flight ("AP44","singapr","Uk",start)

let flight3 = new Flight ("AP45","Cabodiar","singapor",start)
let flight4 = new Flight ("AP46","singapr","USA",start)

let flight5 = new Flight ("AP47","Cabodiar","singapor",start)
let flight6 = new Flight ("AP48","singapr","France",start)


let sreyyoertripFrom = new Trip ("UK","Cambodia");
sreyyoertripTo.addFlight(flight1);
sreyyoertripTo.addFlight(flight2);

sreyyoertripFrom.addFlight(flight2);
sreyyoertripFrom.addFlight(flight1);

let ThanaTripTo = new Trip ("Cambodia","USA");
ThanaTripTo.addFlight(flight1);
ThanaTripTo.addFlight(flight4);

let singdavTripTo = new Trip ("Cambodia","France");
singdavTripTo.addFlight(flight1);
singdavTripTo.addFlight(flight6);


// =============booking ========================================================

let sreyyoerBooking = new Booking ("A1",sreyyoer,Meal.DAIRY_FREE,seatA1,sreyyoertripFrom)
let thanaBooking = new Booking ("A2",thana,Meal.HALAL,seatA2)
let singdavBooking = new Booking ("A3",singdav,Meal.VEGETARIAN,seatA3)


sreyyoerBooking.addTripTo(sreyyoertripTo);
thanaBooking.addTripTo(ThanaTripTo);
singdavBooking.addTripTo(singdavTripTo)


sreyyoer.addBooking(sreyyoerBooking)
thana.addBooking(thanaBooking)
singdav.addBooking(singdavBooking)


// ======================================Airport=================
let airport = new Airport("A3P89")
let gate1 = new Gate ("A01")
let gate2 = new Gate ("A02")

airport.addGate(gate1)
airport.addGate(gate2)
airport.addBooking(sreyyoerBooking)
airport.addBooking(thanaBooking)
airport.addBooking(singdavBooking)

let airlineCompany1 = new Airline ("UKairline","A1111");
let airlineCompany2 = new Airline ("USAairline","A222");
airport.addAirline(airlineCompany1)
airport.addAirline(airlineCompany2)
// airport.addAirline(airlineCompany2)

// ==============================================airline==============
let layout1 = new Layout("50m","100m")
layout1.addSeate(seatA1)
layout1.addSeate(seatA2)

let aeroplane1 = new Aeroplan ("OH-LWP","Airbys A320 family",layout1)
let aeroplane2 = new Aeroplan ("OH-LWP","Airbys A320 family",layout1)
airlineCompany1.addAeroplan(aeroplane1)
airlineCompany1.addAeroplan(aeroplane2)

aeroplane1.addFlight(flight1)
aeroplane1.addFlight(flight2)
// aeroplane1.addFlight(flight2)

aeroplane1.addpassenger(sreyyoer);
aeroplane1.addpassenger(thana);
aeroplane1.addpassenger(singdav);

// =======================Employee=======================================

let pilot1 = new Pilot("kaven",32,"20/10/1033",200,Gender.male)
let chef1 = new Chef("sreykav",25,"20/10/199",400,Gender.famale)
let daggage_handler = new Daggage_handler("papa",32,"20/10/1033",700,Gender.male)
let attendant = new Attendant("yaya",32,"20/10/1033",400,Gender.famale)
airlineCompany1.addEmployee(pilot1)
airlineCompany1.addEmployee(chef1)
airlineCompany1.addEmployee(daggage_handler)
airlineCompany1.addEmployee(attendant)


// console.log(sreyyoer.bookings)

// User1  get the full details of a passenger’s trip from their Booking Reference 
airport.getFlightsPassenger("A1")
// User2 As an airline manager, I want to know for a given flight, how many passengers have return tickets.
airport.getPassengersReturnTicket()
//User3 As an airline pilot, I want to know, for a given date, how many flights I have to join.

//User4 As an airline chef, I need to know, for a given flight, how many of each meal type I need to prepare
aeroplane1.getMealFromFlights(flight1)

//User5 As an airline manager, I want to find out how much salary I pay all my employees
airlineCompany1.getSalaryOfEmployees()
// User 6 As a passenger, I want to know which gate my plane is waiting at.

console.log(aeroplane1.getMealFromFlights(flight1))
