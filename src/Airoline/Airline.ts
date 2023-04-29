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
    getFlights(pilotfrome:Pilot,date:Date){
        let countOfFlights = 0 ;
        for(let aeroplan of this.aeroplanes){
            // console.log(aeroplan)
            for(let pilot of aeroplan.getpilot()){
                if(pilot["name"] == pilotfrome["name"]){
                    for(let flight of aeroplan["flights"]){
                        if(flight["date"].isEqual(date)){
                            countOfFlights += 1;
                        }
                    }
                }

            }
        }
        return countOfFlights
    }
}