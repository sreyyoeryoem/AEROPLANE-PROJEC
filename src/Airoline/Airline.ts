import { Aeroplane } from "./Aeroplane";
import { Employee } from "./Employee/Employee";
// import { }
// import {}
export class Airline{
    private aeroplanes: Aeroplane[]=[];
    private employee:Employee []=[];

    constructor(private name: string,private code: string){
        this.name = name;
        this.code = code;
    }
    addAeroplane(aeroplanes:Aeroplane){
        this.aeroplanes.push(aeroplanes);
    }

    addEmployee(employee:Employee){
        this.employee.push(employee);
    }
}