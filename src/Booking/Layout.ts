import { Seat } from "./seat";
export class Layout {
    seats:Seat[]=[];
    constructor(private row:string, private colunm :string){
        this.row = row;
        this.colunm = colunm;
    }
    addSeat(seats:Seat){
        this.seats.push(seats);
    }
}