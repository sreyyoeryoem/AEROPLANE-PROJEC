import { Employee } from "../Human/Employee";
import { Flight } from "../flight/Flight";
import { Layout } from "../Booking/Layout";

export class Aeroplane{
    private employee: Employee[]=[];
    private flights:Flight[]=[];
    private layout:Layout; 
    constructor(private aeroplane_number:number,private type:string,layout:Layout){
        this.aeroplane_number = aeroplane_number;
    }
}