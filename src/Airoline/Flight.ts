import { Route } from './Route';
import { Date } from './Date';
import { Gate } from '../Gate';
export class Flight{
    private route:Route;
    constructor(private flight_number: string,private departure:string,private arrival:string,private date:Date, private gates:Gate){
        this.flight_number = flight_number;
        this.arrival = arrival
        this.date = date;
        this.gates = gates;
    }
}