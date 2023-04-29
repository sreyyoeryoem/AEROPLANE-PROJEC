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
    getPassengersReturnTicket(flight_number:string):number{
        let passengerReturnTicket = 0;
        for(let aeroplan of this.getAllAeroplanes()){
            for (let passenger of aeroplan.getAllPassengers()){
                for(let booking of passenger.getBooking()){
                    for(let trip of booking.getTripTo()){
                            for (let flight of trip.getFlight()){
                               if(flight["flight_number"] == flight_number){  
                                    if(booking.tripFrom != undefined){ 
                                        passengerReturnTicket += 1;
                                    }                      
                               }
                            }
                    }
                }
            }
            
        }
        return passengerReturnTicket
           
          
    }
    
    
    getFlights(pilotfrome:Pilot,date:Date):number{
        let countOfFlights = 0 ;
        for(let aeroplan of this.aeroplanes){
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