import { Gate } from "./Gate";
import { Airline } from "./Airoline/Airline";
export class Airport{
    private gates: Gate[] = [];
    private airlines:Airline[]=[];
    constructor(private name: string){
        this.name = name;
        
    }
    addGate(gate: Gate){
        this.gates.push(gate);
    }
    addAirline(airline: Airline){
        this.airlines.push(airline)
    }
}