import { Employee } from "./Employee";
import { Gender } from "./Gender";
export class Baggage_handler extends Employee {
    constructor(name: string, age: number, born: number, salary: number, gender: Gender) {
        super(name, age, born, salary, gender);
    }
}