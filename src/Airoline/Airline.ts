import { Aeroplane } from "./Aeroplane";
import { Employee } from "./Employee/Employee";
export class Airline{
    private aeroplanes: Aeroplane[]=[];
    private employees:Employee []=[];
    constructor(private name: string,private code: string){
        this.name = name;
        this.code = code;
    }
    addAeroplane(aeroplane:Aeroplane){
        this.aeroplanes.push(aeroplane)
    }
    addEmployee(employee:Employee){
        this.employees.push(employee)
    }
}