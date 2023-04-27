import { Aeroplane } from "./Aeroplane";
// import { }
// import {}
export class Airline{
    private aeoplanes: Aeroplane[]=[];
    // private employee:Employee []=[];

    constructor(private name: string,private code: string){
        this.name = name;
        this.code = code;
    }
}