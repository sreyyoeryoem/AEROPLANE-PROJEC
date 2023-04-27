import { Employee } from "../Human/Employee";
import { Flight } from "./Flight";
import { Layout } from "../Booking/Layout";
import { Passenger } from "../Human/Passenger";

export class Aeroplane{
    private employee: Employee[]=[];
    private flights:Flight[]=[];
    private layout:Layout; 
    private passengers:Passenger[]=[]; 
    constructor(private aeroplane_number:number,private type:string,layout:Layout){
        this.aeroplane_number = aeroplane_number;
    }
}