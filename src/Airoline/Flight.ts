import { Route} from './route';
import { Meal} from './meal';
export class Flight{
    private route:Route;
    private Meals:Meal[]=[];
    
    constructor(private flight_number: string,private departure:string,private arrival:string,private date:Date){
        this.flight_number = flight_number;
        this.arrival = arrival
        this.date = date;
    }
}