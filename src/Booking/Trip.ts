import { Flight } from "../flight/Flight";
export class Trip{
    private flights:Flight[]=[];
    constructor(private departure:string,private arrival:string){
        this.departure = departure;
        this.arrival = arrival;
    }
    addFlight(flight:Flight){
        this.flights.push(flight);
    }
}