"use strict";
exports.__esModule = true;
exports.Booking = void 0;
var Booking = /** @class */ (function () {
    function Booking(seat) {
        this.trip = [];
    }
    Booking.prototype.addTrip = function (trip) {
        this.trip.push(trip);
    };
    return Booking;
}());
exports.Booking = Booking;
