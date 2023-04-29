import { Employee } from "./Employee";
import { Gender } from "./Gender";

export class Daggage_handler extends Employee{
                    constructor(name: string,age: number,born: string,  salary:number,gender:Gender) {
                                        super(name,age,born, salary,gender);
                                       
                                    }
}