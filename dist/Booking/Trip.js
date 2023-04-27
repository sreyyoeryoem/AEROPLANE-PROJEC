"use strict";
exports.__esModule = true;
exports.Trip = void 0;
var Trip = /** @class */ (function () {
    function Trip(departure, arrival) {
        this.departure = departure;
        this.arrival = arrival;
        this.flights = [];
        this.departure = departure;
        this.arrival = arrival;
    }
    Trip.prototype.addFlight = function (flight) {
        this.flights.push(flight);
    };
    return Trip;
}());
exports.Trip = Trip;
