import {Gender} from "./Gender";
// import {Skill} from "./Skill";
export class Employee{

    constructor(private name: string,private age: number, private born:string, private salary:number,gender:Gender) {
        this.name = name;
        this.age = age;
        this.born = born;
        this.salary = salary;
    }
}
