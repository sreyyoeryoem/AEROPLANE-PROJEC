import { Aeroplan } from "./Aeroplane";
import { Employee } from "./Employee/Employee";
import { Pilot } from "./Employee/Pilot";
import { Date } from "./Date";
export class Airline{
    private aeroplanes: Aeroplan[]=[];
    private employees:Employee []=[];
    constructor(private name: string,private code: string){
        this.name = name;
        this.code = code;
    }
    addAeroplan(aeroplane:Aeroplan){
        this.aeroplanes.push(aeroplane)
    }
    addEmployee(employee:Employee){
        this.employees.push(employee)
    }
    getEmployees(){
        return this.employees;
    }
    getAllAeroplanes(){
        return this.aeroplanes
    }
   

    getSalaryOfEmployees():number{
        let resultSalary = 0;
        for( let employee of this.employees){
            resultSalary += employee.salary
        }
        return resultSalary
    }
   
}