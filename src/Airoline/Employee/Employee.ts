import {Gender} from "./Gender";


export abstract class Employee{

    constructor(private name: string,private age: number, private born: string, public salary:number,private gender:Gender) {
        this.name = name;
        this.age = age;
        this.born = born;
        this.salary = salary;
        this.gender = gender;
    
    }
}
