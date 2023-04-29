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
    // getEmployees(){
    //     return this.employees;
    // }
    getAllAeroplanes(){
        return this.aeroplanes
    }
    getMealFromFlights(){
        for(let fligh of this.aeroplanes){
            // console.log(fligh)
        }
    }

    getSalaryOfEmployees():number{
        let resultSalary = 0;

        for( let employee of this.employees){
            resultSalary += employee.salary
        }
        return resultSalary

    }
}