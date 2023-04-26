import { Gate } from "./Gate";
import { Airline } from "./flight/Airline";
export class Airport{
    private gates: Gate[] = [];
    private airline:Airline[]=[];
    constructor(private name: string,private address: string){
        this.name = name;
        this.address = address;
    }
}