"use strict";
exports.__esModule = true;
exports.Passenger = void 0;
var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, age, phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.bookings = [];
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
    }
    Passenger.prototype.addBooking = function (booking) {
        this.bookings.push(booking);
    };
    return Passenger;
}());
exports.Passenger = Passenger;
