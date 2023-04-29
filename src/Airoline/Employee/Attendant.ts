import { Employee } from "./Employee";
import { Gender } from "./Gender";

export class Attendant extends Employee{
                    constructor(name: string,age: number,born: string,  salary:number,gender:Gender) {
                                        super(name,age,born, salary,gender);
                                       
                                    }
}