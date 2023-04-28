import { Airline } from "./Airoline/Airline";
import { Gate } from "./Gate";
import { Route } from "./Airoline/Route";

export class Airport{
    private gates: Gate[] = [];
    private airlines:Airline[]=[];
    private route:Route[] = [];
    constructor(private name: string){
        this.name = name;  
    }
    addGate(gate: Gate){
        this.gates.push(gate);
    }
    addAirline(airline: Airline){
        this.airlines.push(airline)
    }
    addRoute(route: Route){
        this.route.push(route);
    }
    
}
