import {Gender} from "./Gender";
import {Skill} from "./Skill";
export class Employee{

    constructor(private name: string,private age: number, private born: number, private salary:number,gender:Gender,skill:Skill) {
        this.name = name;
        this.age = age;
        this.born = born;
        this.salary = salary;
    }
}
