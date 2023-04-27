"use strict";
exports.__esModule = true;
var Passenger_1 = require("./Human/Passenger");
var Trip_1 = require("./Flight/Trip");
var seat_1 = require("./Booking/seat");
var Booking_1 = require("./Booking/Booking");
var sreyyoer = new Passenger_1.Passenger("sreyyoer", "Yoem", 19, 0976388651);
var thana = new Passenger_1.Passenger("thana", "choun", 19, 0976388651);
var singdav = new Passenger_1.Passenger("singdav", "Thoun", 19, 0976388651);
var tripsreyyoer = new Trip_1.Trip("Cambodia", "UK");
var tripThana = new Trip_1.Trip("Cambodia", "USA");
var seatA1 = new seat_1.Seat("A01");
var sreyyoerBooking = new Booking_1.Booking(seatA1);
// sreyyoer.
console.log(sreyyoer);
