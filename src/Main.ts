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
import { Date } from './Airoline/Date';

let seatA1 = new Seat ("A01")
let seatA2 = new Seat ("A02")
let seatA3 = new Seat ("A03")

let sreyyeorbag1 = new Bag ("A01") 
let sreyyeorbag2 = new Bag ("A02") 
let thanabag1 = new Bag ("B01") 
let singdavbag1 = new Bag ("B01") 

let date1 = new Date(2023,2,12,"12:30:00");
let date2 = new Date(2023,1,12,"12:30:00");
let date3 = new Date(2023,1,12,"12:30:00");

let sreyyoer = new Passenger ("sreyyoer","Yoem",19,976388651);
let thana = new Passenger ("thana","chhoeun",19,976388651);
let singdav = new Passenger ("singdav","Thoun",19,976388651);

let layout1 = new Layout("50m","100m")

layout1.addSeate(seatA1)
layout1.addSeate(seatA2)

let gate1 = new Gate('A01');
let gate2 = new Gate('A02');

let flight1 = new Flight ("AP43","Cabodiar","singapor",date1,gate1);
let flight2 = new Flight ("AP44","singapr","Uk",date2,gate2);
let flight3 = new Flight ("AP45","Cabodiar","singapor",date3,gate1);
let flight4 = new Flight ("AP46","singapr","USA",date3,gate2);
let flight5 = new Flight ("AP47","Cabodiar","singapor",date3,gate1);
let flight6 = new Flight ("AP48","singapr","France",date3,gate2);

let pilot1 = new Pilot("kaven",32,"20/10/1033",200,Gender.male)
let pilot2 = new Pilot("sasa",32,"20/10/1033",200,Gender.male)
let chef1 = new Chef("sreykav",25,"20/10/199",400,Gender.famale)

sreyyoer.addBag(sreyyeorbag1)
sreyyoer.addBag(sreyyeorbag2)
thana.addBag(thanabag1)
singdav.addBag(singdavbag1)

let sreyyoertripTo = new Trip ("Cambodia","UK");

let sreyyoertripFrom = new Trip ("UK","Cambodia");

sreyyoertripTo.addFlight(flight1);
sreyyoertripTo.addFlight(flight2);

sreyyoertripFrom.addFlight(flight2);
sreyyoertripFrom.addFlight(flight1);

let ThanaTripTo = new Trip ("Cambodia","USA");
let thanatripFrom = new Trip ("UK","Cambodia");

ThanaTripTo.addFlight(flight1);
ThanaTripTo.addFlight(flight4);

thanatripFrom.addFlight(flight2);
thanatripFrom.addFlight(flight1);

let singdavTripTo = new Trip ("Cambodia","France");

singdavTripTo.addFlight(flight1);
singdavTripTo.addFlight(flight6);


// =============booking ========================================================
let sreyyoerBooking = new Booking ("A1",sreyyoer,Meal.DAIRY_FREE,seatA1,date1,sreyyoertripFrom)
let thanaBooking = new Booking ("A2",thana,Meal.HALAL,seatA2,date1,thanatripFrom)
let singdavBooking = new Booking ("A3",singdav,Meal.VEGETARIAN,seatA3,date2)


sreyyoerBooking.addTripTo(sreyyoertripTo);
thanaBooking.addTripTo(ThanaTripTo);
singdavBooking.addTripTo(singdavTripTo)


sreyyoer.addBooking(sreyyoerBooking)
thana.addBooking(thanaBooking)
singdav.addBooking(singdavBooking)


// ======================================Airport=================
let airport = new Airport("A3P89")

airport.addGate(gate1)
airport.addGate(gate2)
airport.addBooking(sreyyoerBooking)
airport.addBooking(thanaBooking)
airport.addBooking(singdavBooking)

let airlineCompany1 = new Airline ("UKairline","A1111");
let airlineCompany2 = new Airline ("USAairline","A222");
airport.addAirline(airlineCompany1)
airport.addAirline(airlineCompany2)

// ==============================================airline==============


let aeroplane1 = new Aeroplan ("OH-LWP","Airbys A320 family",layout1)
let aeroplane2 = new Aeroplan ("OH-LWP","Airbys A320 family",layout1)
airlineCompany1.addAeroplan(aeroplane1)
airlineCompany1.addAeroplan(aeroplane2)

aeroplane1.addFlight(flight1)
aeroplane1.addFlight(flight2)
aeroplane1.addFlight(flight3)

aeroplane1.addpassenger(sreyyoer);
aeroplane1.addpassenger(thana);
aeroplane1.addpassenger(singdav);

// =======================Employee=======================================

let daggage_handler = new Daggage_handler("papa",32,"20/10/1033",700,Gender.male)
let attendant = new Attendant("yaya",32,"20/10/1033",400,Gender.famale)


aeroplane1.addpilot(pilot1)
airlineCompany1.addEmployee(pilot1)
airlineCompany1.addEmployee(chef1)
airlineCompany1.addEmployee(daggage_handler)
airlineCompany1.addEmployee(attendant)


// User1  get the full details of a passenger’s trip from their Booking Reference 
airport.getFlightsPassenger("A2")


/// User2 As an airline manager, I want to know for a given flight, how many passengers have return tickets.
airlineCompany1.getPassengersReturnTicket("AP43")


//User3 As an airline pilot, I want to know, for a given date, how many flights I have to join. 
airlineCompany1.getFlights(pilot1,date2)


//User4 As an airline chef, I need to know, for a given flight, how many of each meal type I need to prepare
aeroplane1.getMealFromFlights(flight1)


//User5 As an airline manager, I want to find out how much salary I pay all my employees
airlineCompany1.getSalaryOfEmployees()


// User 6 As a passenger, I want to know which gate my plane is waiting at.
sreyyoer.getGateNumber('AP43',date1);


console.log()
