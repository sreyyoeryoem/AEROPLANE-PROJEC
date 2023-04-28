import {Gender} from "./Gender";

export abstract class Employee{
    constructor(private name: string,private age: number, private born: number, private salary:number,gender:Gender) {
        this.name = name;
        this.age = age;
        this.born = born;
        this.salary = salary;
    }
}
