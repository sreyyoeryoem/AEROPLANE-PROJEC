import { Seat } from "./seat";
export class Layout {
    seats: Seat[] = [];
    constructor(private row: string, colunm: string) {

    }
    addSeate(seat: Seat) {
        this.seats.push(seat);
    }
}