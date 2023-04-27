"use strict";
exports.__esModule = true;
exports.Flight = void 0;
var Flight = /** @class */ (function () {
    function Flight(flight_number, departure, arrival, date) {
        this.flight_number = flight_number;
        this.departure = departure;
        this.arrival = arrival;
        this.date = date;
        this.Meals = [];
        this.flight_number = flight_number;
        this.arrival = arrival;
        this.date = date;
    }
    return Flight;
}());
exports.Flight = Flight;
