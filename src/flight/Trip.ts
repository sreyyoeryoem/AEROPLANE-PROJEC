import { Flight } from "./Flight";
export class Trip{
    private flights:Flight[]=[];
    constructor(private departure:string,private arrival:string){
        this.departure = departure;
        this.arrival = arrival;
    }
}