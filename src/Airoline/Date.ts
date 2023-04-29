export class Date{
                    constructor (public year:number,public month:number,public day:number,public time:string){
                                        this.time = time;
                                        this.day = day;
                                        this.month = month;
                                        this.year = year;
                    }
                    isEqual(other:Date):boolean{
                                        if(other.day == this.day && other.month == this.month && other.year == this.year){
                                                            return true;
                                        }

                    }
}