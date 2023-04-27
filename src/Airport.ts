import { Airline } from "./Airoline/Airline";
import { Gate } from "./Gate";
import { Route } from "./Airoline/Route";

export class Airport{
    private gates: Gate[] = [];
    private airline:Airline[] = [];
    private route:Route[] = [];
    constructor(private name: string,private address: string){
        this.name = name;
        this.address = address;
    }
    addGate(gate: Gate){
        this.gates.push(gate);
    }

    addAirline(airline: Airline){
        this.airline.push(airline);
    }

    addRoute(route: Route){
        this.route.push(route);
    }
}
